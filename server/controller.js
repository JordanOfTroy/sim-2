module.exports = {

  getAllHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_all_houses().then(houses => {
      res.status(200).send(houses)
    })
    .catch (err => {
      res.status(500). send(err)
    })
  },

  addNewHouse: (req, res) => {
    // console.log('you got this far:', req.body)
    let {propertyName, address, city, stateIN, zipcode, imageURL} = req.body
    const db = req.app.get('db')
    db.add_new_house({propertyName, address, city, stateIN, zipcode, imageURL})
    .then(houses => {
      res.status(200).send(houses)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },

  deleteAHouse: (req, res) => {
    console.log('house goes bye-bye', req.params)
    const db = req.app.get('db')
    let {id} = req.params
    db.delete_house({id})
    .then(houses => {
      res.status(200).send(houses)
    })
    .catch(err => {
      console.log(err)
      res.send(500).send(err)
    })
  }

}