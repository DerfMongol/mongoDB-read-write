

var MongoClient = require('mongodb').MongoClient

const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"

const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  const collection = client.db("players").collection("nba")

  collection.insertOne({ name:"Jalen Rose",job:"ESPN Sports Analyst",date:"2015 on NBA Countdown",players:["Michael Jordan","Bill Russell","Magic Johnson","Kareem Abdul-Jabar","Larry Bird","Tim Duncan","Kobe Bryant","Wilt Chamberlain","Shaquille O'Neal","Lebron James"],url:"https://boxden.com/showthread.php?t=2296945",pic:"jalen"})

})



