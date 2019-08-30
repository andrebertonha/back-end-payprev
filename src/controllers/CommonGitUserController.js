const GitUser = require('../models/GitUser');
const User = require('../models/User');
const Tag = require('../models/Tag');

class CommonGitUserController {
  async index(req, res) {

    const user = await User.findByPk(req.userId);
    if(user.isadmin) {
      return res.status(400).json({ error: 'Only common users can view github users list' });
    }

    const users = await GitUser.findAll();
    return res.json(users);

  }

  /**
   *
   List Create For Github Users
   */
  async store(req, res) {

    const user = await User.findByPk(req.userId);
    if(user.isadmin) {
      return res.status(400).json({ error: 'Only common users can add tags to github users list' });
    }

    const { login, tags } = req.body;
    const gituser = await GitUser.findAll({ where: { login: login }});

    let id = 0;
    gituser.forEach(element => {
        id = element.id;
    });

    try {
      await Tag.create({
        tags: tags,
        gituser_id: id
      });
    } catch (err) {
      if(err) throw err
    }

    const users = await GitUser.findAll({
      where: { login: login },
      include: [
        {
          model: Tag,
          as: 'user_tags',
          attributes: ['tags']
        }
      ],
    });

    return res.json(users);
  }
}

module.exports = new CommonGitUserController();
