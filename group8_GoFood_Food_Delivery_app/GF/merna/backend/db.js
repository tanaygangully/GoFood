const mongoose = require('mongoose');
const mongoURI='mongodb://tanaybhusangangully:bpjiHz@ac-yhdsqjx-shard-00-00.esggpqh.mongodb.net:27017,ac-yhdsqjx-shard-00-01.esggpqh.mongodb.net:27017,ac-yhdsqjx-shard-00-02.esggpqh.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-2fanq6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = ()=>{
    mongoose.connect(mongoURI,{ useNewUrlParser: true },(err,result)=>{
    if(err)console.log("---",err)
    else{
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){
            const foodCategory = mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else{
                    global.food_items = data;
                    global.foodCategory = catData;
                }
            })
            // if(err) console.log(err);
            // else {
            //     global.food_items = data;
                
            // }

        })
        }

    });

}

module.exports = mongoDB;
