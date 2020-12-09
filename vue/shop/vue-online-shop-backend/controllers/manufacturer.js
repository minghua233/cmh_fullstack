const {
  all,
  request
} = require("../app")
const Model = require("../model")
const {
  Manufacturer
} = Model
// 模块化控制器
// 加了s
const manufacturerController = {
  create(req, res) {
    // request response
    // 逻辑
    // Model
    // View
    const requestBody = req.body
    const newManufacturer = new Manufacturer(requestBody)
    newManufacturer.save((err, saved) => {
      if (err) {
        console.log(err);
        return
      }
      // console.log(saved);
      Manufacturer
        .findOne({
          _id: newManufacturer.id
        })
        .exec((err, manufacturer) => {
          res.json(manufacturer)
        })
    })
  },
  all(req, res) {
    Manufacturer
      .find({})
      .exec((err, manufacturers) => res.json(manufacturers))
  },
  byId(req, res) {
    const idParams = req.params.id
    Manufacturer
      .findOne({
        _id: idParams
      })
      .exec((err, manufacturer) => res.json(manufacturer))
  },
  remove(req, res) {
    
  }
}
module.exports = manufacturerController