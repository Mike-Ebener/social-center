const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    // createdBy: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    createdAt: {
      type: Date,
      default: Date.now
    //   get: createdAtVal => dateFormat(createdAtVal)
    },
    email: {
        type: String,
        required: true,
        // match: /.+\@.+\..+/,
        unique: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  //friends goes here
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// // get total count of thoughts and replies on retrieval
// UserSchema.virtual('thoughtCount').get(function() {
//   return this.thoughts.reduce(
//     (total, thought) => total + thought.replies.length + 1,
//     0
//   );
// });

const User = model('User', UserSchema);

module.exports = User;