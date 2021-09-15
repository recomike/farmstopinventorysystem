import vendors from '../controllers/vendors.controller.js'

export default (app) => {
  // retrieve all vendors
  app.get('/vendors', vendors.findAll)

  // retrieve a single vendor with id
  app.get('/vendors/:id', vendors.findOne)

  // create a new vendor
  app.post('/vendors', vendors.create)

  // update a vendor with id
  app.put('/vendors/:id', vendors.update)

  // delete a vendor with id
  app.delete('/vendors/:id', vendors.delete)
}
