const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    sunday: Array,
    monday: Array,
    tuesday: Array,
    wednesday: Array,
    thursday: Array,
    friday: Array,
    saturday: Array
})

scheduleSchema.statics.getScheduleByID = async function(scheduleID){
    return await this.findOne({
        _id: scheduleID
    }); 
};

scheduleSchema.statics.addschedule = function(schedule, callback){
    schedule.save().then(callback);
};


scheduleSchema.statics.delete = async function(scheduleID){
    return await this.deleteOne({
        _id : scheduleID
    });
}

scheduleSchema.statics.updateSchedule = async function(scheduleID, schedule){
    return await this.updateOne({
        _id: scheduleID
    }, {
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday
    }, {
        new: true
    }); 
};

var Schedule= mongoose.model("Schedule", scheduleSchema)

module.exports = {
    Schedule
}