const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
  session: String,
  requester: String,
  date: String,
  reason: String,
  technician: String,
  status: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }

})

module.exports = mongoose.model('Mission', MissionSchema);