const Mission = require('../models/Mission');

module.exports = {

  //Lista os status das missões
  async index(req, res) {
    const { user_id } = req.headers;
    const missionStatus = await Mission.find({ user: user_id });

    return res.json(missionStatus);

  },

  //Criar a missão
  async store(req, res) {
    const { session, requester, date, reason,
      thecnician, status } = req.body;

    const { user_id } = req.headers;

    try {

      if (
        session === '' ||
        requester === '' ||
        reason === '' ||
        date === ''
      ) {
        return res.status(400).send({ error: "Preencha todos os campos corretamente!" });

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

    } catch (error) {
      return res.status(400).send({ error: 'Registration mission failed!' });

    }

  },
  async delete(req, res) {


    const missions = await Mission.deleteOne({ _id: req.params.id }, function (err) {
      if (err) return res.status(400).json({
        error: true,
        message: "Error: Não foi possível apagar a missão!"
      })

      return res.json({
        error: false,
        message: "Missão apagada"
      })

    })



  }


}