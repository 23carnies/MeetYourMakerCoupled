const Store = require('../models/store')
const User = require('../models/user')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
  }

  function create(req, res) {
    req.body.createdBy = req.user._id
    Store.create(req.body)
    .then(store => {
      req.user.store.push(store._id)
      User.findByIdAndUpdate(req.user._id, req.user, {new: true})
      
      .then(() => {
        console.log(store)
        res.status(200).json(store)})
     })
    .catch(err => {res.json(err)}) 
   }

  async function index(req, res) {
    const stores = await Store.find({})
    .then(stores => {res.json(stores)})
    .catch(err => {res.json(err)})
  }

  async function show(req,res) {
		const stores = await Store.findById(req.params.id)
		.then(store => {res.json(store)})
        .catch(err => {res.json(err)})
	}

    async function update(req, res) {
        const updatedstore = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedstore);
    }

    async function deleteOne(req, res) {
        const deletedstore = await Store.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedstore);
    }