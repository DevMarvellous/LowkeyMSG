import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Automatically remove messages 24 hours after creation
messageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 });

// Automatically remove messages 24 hours after creation
messageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 });

const Message = mongoose.model('Message', messageSchema);

export default Message;