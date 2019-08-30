import * as Yup from 'yup';
const User = require('../models/User');

class UserController {

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
      cpf: Yup.string().required().min(11),
      isadmin: Yup.boolean().required(),
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
