var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/green');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log("Database connected, yay!");
});

var greenSchema = mongoose.Schema({
    buildingID: Number,
    address : String,
    city : String,
    points : Number,
    sensors : [{sensorID: Number, 
              measurments: [{timeStamp : Date, 
                          energy: Number, 
                          device: String
                          }]
            }],
    user: String // Only supports one user for now
})

var Green = mongoose.model('Green', greenSchema)

greenSchema.methods.getUserBuildings = function(username) {
  return this.model('Green').find({ user: username });
}










