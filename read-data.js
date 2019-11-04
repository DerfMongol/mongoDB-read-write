var MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://Lee:Crusher79!@cluster0-efaxd.mongodb.net/test?retryWrites=true"
const client = new MongoClient(uri, { useNewUrlParser: true })

let allTime = []

client.connect(err => {
    const collection = client.db("critics").collection("pga")
    const collection2 = client.db("allTime").collection("pga")
    // collection.find({players: 'Harry Vardon'}).toArray((err, result) => {
    //     if (err) {
    //         throw err
    //     }
    //     console.log(result)
    //     client.close()
    // })
    collection.find({}).toArray((err, res) => {
        res.forEach((critic, index1) => {
            critic.players.forEach((player1, index2) => {
                if (index1 === 0) {
                    allTime.push({
                        player: player1,
                        rank: index2 + 1,
                        lists: 1,
                        avg: 0
                    })
                }
                else if (index1 > 0) {
                    allTime.some((player2, index3) => {
                        if (player1 === player2.player) {
                            allTime[index3].rank += (index2 + 1)
                            allTime[index3].lists++
                            return true
                        }
                        else if (index3 === allTime.length - 1) {
                            allTime.push({
                                player: player1,
                                rank: index2 + 1,
                                lists: 1,
                                avg: 0
                            })
                        }
                    })
                }
            })
        })
        allTime.forEach((player, index4) => {
            allTime[index4].avg = (player.rank / player.lists).toFixed(2)
        })
    
        allTime.sort((a, b) => a.avg - b.avg)
        console.log(allTime)
        collection2.insertMany(allTime)
        client.close()
    })
    
})






