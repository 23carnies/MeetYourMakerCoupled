const Store = require('../models/store')

module.exports = {
    create
}

function create(req, res) {
    Store.findById(req.params.id, function(err, store){
        store.reviews.push(req.body)
        store.save()
        .then(reviews => {res.json(reviews) })
        .catch(err => {res.json(err)})
    })
}