const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

const bandSchema = new Schema({
  band:String,
  desc: String,
  image:{
    type: String,
    default: 'http://dreamreader.net/wp-content/uploads/2015/01/Rock-Music-titlea.jpg'
  },
  genders: [String]
  
},{
  timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }})
  

  module.exports = mongoose.model('Band', bandSchema)