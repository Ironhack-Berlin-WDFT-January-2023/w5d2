const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
	title: String,
	description: String,
	author: {
		type: Schema.Types.ObjectId,
		// This refers to the model
		ref: "Author"
	},
	rating: Number,
	reviews: [{
		user: String,
		text: String
	}]
})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book
