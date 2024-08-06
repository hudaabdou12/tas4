const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'proj-0' 

mongoClient.connect(connectionUrl , (error , res1) =>{
if (error) {
return console.log('error has occured')
}
console.log('all perf')

const db = res1.db(dbname)

// db.collection('users').insertOne({
//     name : 'yasmin',
//     age : 23
// },
// (error,data) =>{
//     if(error){
//         console.log("Unable to insert data")
//     }
//     console.log(data.insertedId)
// })

// db.collection('users').insertOne({
//   name : 'alaa',
//   age : 23
// },
// (error,data) =>{
//   if(error){
//       console.log("Unable to insert data")
//   }
//   console.log(data.insertedId)
// })


// db.collection ('users').insertMany(
//   [{
//  name : 'alaa',
//  age : 27
//  },
//  {
//   name : 'yasmeen',
//   age : 27
//  },
//  {
//   name : 'huda',
//   age : 27
//   },
//   {
//    name : 'abd elbasite',
//    age : 27
//   },
//  {
//    name : 'ala',
//    age : 27
//   },
//  {
//    name : 'dania',
//    age : 6
//   },
//   {
//     name : 'nour',
//     age : 4
//   },
//  {
//    name : 'malika',
//    age : 5
//   },
//   {
//     name : 'zain',
//     age : 3
//   },
//   {
//     name : 'nor',
//     age : 1
//   }]
//    , (error,data)=>{
//     if(error){
//         console.log("Unable to insert data")
//   }
//   })


// db.collection('users').find({age:27}).toArray((error,users)=>{
//   if(error){
//   return console.log('Error has occurred')
//   }
//   console.log(users)
//   })


//  db.collection('users').find({age:27}).limit(3).toArray((error , users)=>{
//    if (error) {
//    return console.log('error has occured')
//    }
//    console.log(users)
//    })


  //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b20f40e56ee4aed0fecafe")},{
  //       $set:{name: "yasssmen" },
  //    }).
  //    then((data1)=>{console.log(data1.modifiedCount)})
  //    .catch((error)=> {console.log(error)})


  //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b20f40e56ee4aed0fecaff")},{
  //       $set:{name: "yasoo" },
  //    }).
  //    then((data1)=>{console.log(data1.modifiedCount)})
  //    .catch((error)=> {console.log(error)})


  //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b20f40e56ee4aed0fecb00")},{
  //       $set:{name: "allaa" },
  //       $inc: {age: 4 }
  //    }).
  //    then((data1)=>{console.log(data1.modifiedCount)})
  //    .catch((error)=> {console.log(error)})


  //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b20f40e56ee4aed0fecb01")},{
  //       $set:{name: "loly" },
  //       $inc: {age: 4 }
  //    }).
  //    then((data1)=>{console.log(data1.modifiedCount)})
  //    .catch((error)=> {console.log(error)})



  //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b20f40e56ee4aed0fecb02")},{
  //       $inc: {age: 4 }
  //    }).
  //    then((data1)=>{console.log(data1.modifiedCount)})
  //    .catch((error)=> {console.log(error)})


  //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b20f40e56ee4aed0fecb03")},{
  //       $inc: {age: 4 }
  //    }).
  //    then((data1)=>{console.log(data1.modifiedCount)})
  //    .catch((error)=> {console.log(error)})


    // db.collection('users').updateMany({},{
    //     $inc: {age: 10 }
    // }).
    // then((data1)=>{console.log(data1.modifiedCount)})
    // .catch((error)=> {console.log(error)})


   db.collection('users').deleteMany({age:41})
   .then((data1)=>{console.log(data1.deletedCount)})
   .catch((error)=> {console.log(error)})


})
      
