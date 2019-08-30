const api = require('../services/api');
const GitUser = require('../models/GitUser');
const User = require('../models/User');

class GitUserController {

  async index(req, res) {
    const { login } = req.params;

    const user = await api.get(`/users/${login}`);

    if(!user) {
      res.status(400).json({ error: 'User not found!' });
    }

    const { name, bio, location, html_url } = user.data;
    return res.json({ login, name, bio, location, html_url });
  }

  async store(req, res) {

    const user = await User.findByPk(req.userId);
    if(!user.isadmin) {
      return res.status(400).json({ error: 'You have to be admin user to add users' });
    }

    const userExists = await GitUser.findOne({ where: { login: req.body.login } });
    if(userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    req.body.user_id = req.userId;

    const { login, name, bio, location, html_url, user_id } = await GitUser.create(req.body);
    return res.json({ login, name, bio, location, html_url, user_id });
  }

}

module.exports = new GitUserController();
