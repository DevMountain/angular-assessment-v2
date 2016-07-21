# Angular assessment


``1``
 Create a basic angular app that includes a mainCtrl,mainService,app.js and routes.js The index.html file is included in this repo so you dont need to add one.

``2``
 Config your router so that the home.html loads first. Also set up the routes for the about.html, blog.html and shop.html.

``3``
Connect the navigation links that are located in the index.html to point to the corresponding page.

``4``
 After you have your routing setup you can start working on getting the data you'll need.
 For the shop.html view you're going to need to make an api call to http://practiceapi.devmounta.in/products to get all the products.
 
 ``5``
 All the styles are completed for you already so you'll just need to display the data in the right spot. LOOK FOR COMMENTS.
 Product needs to be a directive.  The template is provided for you shop.html (You'll need to move it).
 It needs to have an isolate scope and take in the product and show the details.
 Clicking on the title will navigate to product details.
 Clicking on the image will collapse the image and show a link that says "show image" instead.  Click on "show image" will hide the "show image" link and show the actual image.
  
 ``6`` 
 After your data is displaying correctly you'll need to get the product-details view configured.
 In your routes file add a route called details. This route is going to have an id being passed in. The url will look like this detail/:id.
 Now that the route is setup you can finish the links in the shop.html file.

 The link that points to the product detail will need to pass along the id of the item being clicked ui-sref="details(id: the id )"".

``7``
Product-details.html will be the hardest view to get working. You'll need to check the state params for the id being passed along in the route.
After you have that id you'll need to make an api call to http://practiceapi.devmounta.in/products + the id being passed in the route.
This will return the specific item based off the id you passed.
Put that item on $scope and display in the view.


# Congratulations! you have finished the assessment
