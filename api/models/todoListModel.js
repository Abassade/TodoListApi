'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({

    task_title :{
        type: String,
        required: 'Enter the title here',
        default: 'title'
    },
  task_des: {
    type: String,
    required: 'Kindly enter the task here',
    default:'your description'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);