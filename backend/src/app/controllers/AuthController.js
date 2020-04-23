const User = require('../models/User')
const bcrypt = require('bcryptjs');
const middleware = require('../middlewares/Token');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    // Cheking if user exists !
    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    //Comparing password's

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: "Invalid password" });
    }
    user.password = undefined;

    res.json({
      user,
      token: middleware.generateToken({ id: user.id })
    });
  }
}