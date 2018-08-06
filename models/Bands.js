const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  band:String,
  image:String,
  genders: [String]
},{
  timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }})

// const phoneSchema =  new Schema({
//     bandName:[{
//         "name": "Los Genaros",
//         "image": "http://www.interaccionmexico.com/uploads/1/0/7/5/107574623/los-genaros_orig.jpg",
//         "specs": [
//           "Rock",
//           "RockPop",
//           "HardRock"
//         ]
//       },
//       {
//         "name": "Los Caligaris",
//         "image": "http://www.interaccionmexico.com/uploads/1/0/7/5/107574623/caligaris-color_orig.jpg",
//         "specs": [
//           "Rock",
//           "Ska",
//           "Cuartetos"
//         ]
//       },
//       {
//         "name": "Epica",
//         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WieugML73-SlM6WiIHsh0z56WupFmglw5SrUGJwwr7A0b3Su1g",
//         "specs": [
//           "Rock",
//           "Metal",
//           "Sinfónico"
//         ]
//       },{
//     timestamps:{
//         createdAt:'created_at',
//         updatedAt:'updated_at'
//     }
//     }]
// })