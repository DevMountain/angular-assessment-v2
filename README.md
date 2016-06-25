# front-end-assessment


``1``
 Create a basic angular app that includes a mainCtrl,mainService,app.js and routes.js The index.html file is included in this repo so you dont need to add one

``2``

 Config your router so that the home.html loads first. Also set up the routes for the rest of the views.

``3``

 Connect the navigation links that are located in the index.html to point to the corresponding page

``4``
#Shop.html

 After you have your routing setup you can start working on getting the data you'll need.
 For the shop.html view your going to need to make an api call to https://dev-assessment.firebaseio.com/products.json to get all the products
 All the styles are completed for you already so you'll just need to display the data in the right spot. LOOK FOR COMMENTS
 After your data is displaying correctly set up the links to point to the product-details view
 The link that points to the product detail will need to pass along the id of the item being clicked

``5``

#product-details.html

This will be the hardest view to get working. You'll need to check the state params for the id being passed along in the route
after you have that id you'll need to make an api call to https://dev-assessment.firebaseio.com/products/ + the id being passed in the route
This will return the specific item based off the id you passed
