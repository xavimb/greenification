var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/green');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log("Database connected, yay!");
});

// DOMAIN SCHEMA

var greenSchema = mongoose.Schema({
    buildingID: Number,
    address : String,
    city : String,
    points : Number,
    sensors : [{sensorID: Number, 
                device: String,
                measurments: [{timeStamp : Date, 
                              energy: Number 
                            }]
            }],
    user: String // Only supports one user for now
})

greenSchema.methods.getUserBuilding = function(username) {
  return this.model('Green').find({ user: username });
}

greenSchema.methods.getBuildingSensors = function(building_id) {
  return this.model('Green').find({ buildingID: building_id }.sensors);
}

//var Green = mongoose.model('Green', greenSchema)

// NOTIFICATION SCHEMA

var pushSchema = mongoose.Schema({
    timeStamp: Date,
    username: String,
    notificationID: Number
})













