const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    _id: {
      type: Number
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    text: {
      type: String
      // required: true
    },
    name: {
      type: String
    },
    Call_Type: {
      type: String
      // required: true
    },
    Disposition: {
      type: String
      // required: true
    },
    Location: {
      type: String
      // required: true
    },
    Location_Type: {
      type: String
      // required: true
    },
    person_last_name: {
      type: String
      // required: true
    },
    person_first_name: {
      type: String
      // required: true
    },
    officer_last_name: {
      type: String
      // required: true
    },
    officer_first_name: {
      type: String
      // required: true
    },
    time: {
      type: String
      // required: true
    },
    incident_date: {
      type: Date,
      default: Date
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);
PostSchema.plugin(AutoIncrement, {
  inc_field: '_id',

  start_seq: '112232'
});
module.exports = Post = mongoose.model('post', PostSchema);
