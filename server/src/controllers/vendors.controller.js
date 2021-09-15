// import vendors from '../models/vendors.model.js'

const funcs = {
  // retrieve and return all vendors from the database
  findAll (req, res) {
    res.json({ message: 'find all vendors' })
  },
  // find a single vendor with id
  findOne (req, res) {
    res.json({ message: `find one vendor with id ${req.params.id}` })
  },
  // create and save a new vendor
  create (req, res) {
    res.json({ message: 'create a new vendor' })
  },
  // update a vendor identified by id in the request
  update (req, res) {
    res.json({ message: `update vendor with id ${req.params.id}` })
  },
  // delete a vendor with the specified id in the request
  delete (req, res) {
    res.json({ message: `delete vendor with id ${req.params.id}` })
  }
}

export default funcs
