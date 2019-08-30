const jwt = require('jsonwebtoken');
const { string, object } = require('yup');

const User = require('../models/User');

const authConfig = require('../config/auth');

class SessionController {

  async store(req, res) {
    const schema = object().shape({
      email: string().email().required(),
      password: string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if(!user) {
      res.status(401).json({ error: 'User not found' });
    }

    if(!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id } = user;

    return res.json({
      user: {
        id, email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
