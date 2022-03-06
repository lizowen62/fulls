const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    create_by: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("invest_note", NoteSchema);
