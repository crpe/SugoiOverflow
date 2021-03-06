'use strict';

var mongoose = require('mongoose-q')(require('mongoose'));
var Schema = mongoose.Schema;

var Answer = new Schema({
  author:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp:{
    type: Date,
    'default': Date.now
  },
  body:{
    type: String,
    required: true
  },
  correct:{
    type: Boolean,
    required: true,
    default: false
  },
  upVotes:{
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  downVotes:{
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
});

Answer.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});
module.exports = Answer;
