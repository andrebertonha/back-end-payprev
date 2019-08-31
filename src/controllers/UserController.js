const { string, object, boolean } = require('yup');
const User = require('../models/User');

class UserController {

  async index(req, res) {
    return res.json({ ok: 'true' });
  }

  async store(req, res) {
    const schema = object().shape({
      email: string().email().required(),
      password: string().required().min(8),
      cpf: string().required().min(11),
      isadmin: boolean().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if(userExists) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const { id, email, isadmin } = await User.create(req.body);
    return res.json({ id, email, isadmin });
  }

}

module.exports = new UserController();
