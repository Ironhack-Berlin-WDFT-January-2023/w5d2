const router = require("express").Router()
const Book = require("../models/Book")
const Author = require("../models/Author")

router.get("/books", (req, res, next) => {
	// Get all books from db
	Book.find()
		.then(booksFromDB => {
			console.log(booksFromDB)
			res.render("books/index", { books: booksFromDB })
		})
		.catch(err => next(err))
})

router.get("/books/add", (req, res, next) => {
	// get all authors from db
	Author.find()
		.then(authorsFromDB => {
			console.log(options)
			res.render("books/add", { authors: authorsFromDB })
		})
		.catch(err => next(err))
})

router.get("/books/:id", (req, res, next) => {
	const bookId = req.params.id

	Book.findById(bookId)
		.populate("author")
		.then(bookFromDB => {
			console.log(bookFromDB)
			res.render("books/detail", { book: bookFromDB })
		})
		.catch(err => next(err))
})

router.post("/books", (req, res, next) => {
	console.log(req.body)
	const { title, author, description, rating } = req.body

	Book.create({ title: title, author, description, rating })
		.then(createdBook => {
			console.log(createdBook)
			// Redirect to book details route
			res.redirect(`/books/${createdBook._id}`)
			// We could also render the view again and pass the created book as data to the view:
			// res.render("books/detail", { book: createdBook })
		})
		.catch(err => next(err))
})

router.get("/books/edit/:id", (req, res, next) => {
	Book.findById(req.params.id)
		.then(bookFromDB => {
			res.render("books/edit", { book: bookFromDB })
		})
		.catch(err => next(err))
})

router.post("/books/edit/:id", (req, res, next) => {
	const { title, author, description, rating } = req.body

	Book.findByIdAndUpdate(req.params.id, {
		title,
		author,
		rating,
		description
	})
		.then(() => {
			// Redirect to book details route
			res.redirect(`/books/${req.params.id}`)
		})
		.catch(err => next(err))
})

router.get("/books/delete/:id", (req, res, next) => {
	Book.findByIdAndDelete(req.params.id)
		.then(() => {
			res.redirect("/books")
		})
		.catch(err => next(err))
})

router.post("/books/:id/reviews", (req, res, next) => {
	const { user, text } = req.body
	const bookId = req.params.id

	Book.findByIdAndUpdate(bookId,
		{ $push: { reviews: { user: user, text: text } } }
	)
		.then(() => {
			res.redirect(`/books/${bookId}`)
		})
		.catch(err => next(err))
})

module.exports = router