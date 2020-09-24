const Calendar = require('../models/calendar')

module.exports = {
    create,
    index
}

function create(req, res) {
    console.log(req.body)
   Calendar.create(req.body)
        .then(calendar => { res.json(calendar) })
        .catch(err => { res.json(err) })
}

async function index(req, res) {
    const events = await Calendar.find({})
    .then(events => {res.json(events)})
    .catch(err => {res.json(err)})
  }
