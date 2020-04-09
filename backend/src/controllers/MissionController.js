const Mission = require('../models/Mission');
const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const { session, requester, date, reason,
      thecnician, status } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);


    if (!user) {
      return res.status(400).json({ error: 'User dos not exists' });
    }

    const mission = await Mission.create({
      user: user_id,
      session,
      requester,
      date,
      reason,
      thecnician,
      status

    })

    return res.json(mission);

  }

}