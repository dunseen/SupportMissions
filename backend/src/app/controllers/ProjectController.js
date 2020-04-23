module.exports = {
  async index(req, res) {
    return res.json({ ok: true, user: req.userId })

  }
}