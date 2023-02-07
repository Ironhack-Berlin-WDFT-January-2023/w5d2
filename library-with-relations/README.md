# CRUD application: Library

Use Ironlauncher to generate the project structure:  
```bash
$ npx ironlauncher@latest <project-name>
```
 
Select:
- views
- no auth
 
Run the app:
```bash 
$ npm run dev
```
 
## Features
 
Seed the database with the json data 
 
When I visit **/books** I want to see a list of all my book titles from the database ✅
- We need a route **/books** and get all books from the db
- We need a view that gets all the books and displays the titles
  
When I click on a book title from the list I want to be taken to a route **/books/:id** and want to see all book details ✅
- Titles should be links
- We need a route **/books/:id** that gets the specific book from the db 
- We need a view to show the book details
  
When I click on a link **add a book** under the books list I am taken to a form to add a book ✅
- We need a link under the titles list
- We need a route that displays the form to add a book
 
When I click on **Add** after filling out the form I want to be taken to the detail view of the added book and the book should be added to the database ✅
- We need a route to POST **/books**
- We need to create a new document in the database using the values from the form
- We need to redirect to the details view of this book
  
When I click on a link **edit** under the book details I want to be taken to a form where I can edit the book ✅
- We need a link in the book details view to **/books/edit/:id**
- We need that route
- We need to retrieve that book from the db
- We need to render a form displaying the fields from that book
  
When I click on **update** I want to be taken to the book details view showing the changed fields of the book and the book should be updated in the database ✅
- We need a post route to **/books/edit/:id**
- In the route we need to update the book in the db
- We need to redirect to the details view of that book
 
When I click on a link **delete** under a book details view I want to be able to delete the book and be redirected to the books list ✅
- We need a link under the book details view
- We need a route to **/books/delete/:id**
- We need to delete this book in the db
- We need to redirect to **/books**