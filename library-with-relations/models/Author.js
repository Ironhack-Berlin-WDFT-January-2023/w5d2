const mongoose = require("mongoose")
const Schema = mongoose.Schema

const authorSchema = new Schema({
	name: String,
	lastName: String,
	nationality: String,
	birthday: Date,
	pictureUrl: String,
	books: [
		{
			type: Schema.Types.ObjectId,
			ref: "Book"
		}
	]
})

const Author = mongoose.model("Author", authorSchema)
module.exports = Author
