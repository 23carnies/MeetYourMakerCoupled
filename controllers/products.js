const Store = require('../models/store')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne 
  }

function create(req, res) {
  Store.findById(req.params.id, function(err, store) {
    store.products.push(req.body)
    store.save()
      .then(products => {res.json(products)})
      .catch(err => {res.json(err)})
  })
}

  async function index(req, res) {
    const products = await Store.find({})
    .populate('addedBy')
    .then(products => {res.json(products)})
    .catch(err => {res.json(err)})
  }

  async function show(req,res) {
		const products = await Store.findById(req.params.id)
		.then(product => {res.json(product)})
    .catch(err => {res.json(err)})
	}

  function update(req,res){
    console.log(req.user)
    Store.findById(req.params.storeId)
    .then((store) => {
      let a = store.products.findIndex(p=> p._id.toString()===req.body._id)
      store.products.splice(a, 1, req.body)
      store.save()
      .then(product => {res.json(product)})
      .catch(err => {res.json(err)})
    })
  }

  function deleteOne(req,res){
    console.log(req.params)
    Store.findById(req.params.storeId)
    .then((store) => {
      let a = store.products.findIndex(p => p._id.toString()===req.params.productId)
      store.products.splice(a, 1)
      store.save()
      .then(res.status(200).json(store))
    })
  }