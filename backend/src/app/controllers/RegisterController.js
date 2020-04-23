const User = require('../models/User');
const middleware = require('../middlewares/Token')

module.exports = {
  //Registering user's
  async store(req, res) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "User already exists" });
      }
      user = await User.create(req.body);
      user.password = undefined;

      return res.json({
        user,
        token: middleware.generateToken({ id: user.id })
      });

    } catch{
      return res.status(400).send({ error: 'Registration failed!' });
    }
  }
}