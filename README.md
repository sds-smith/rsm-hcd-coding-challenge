# Discover Breweries

A brewery locator app built for the [RSM HCD Coding Challenge](https://github.com/sds-smith/rsm-hcd-coding-challenge/blob/main/RSM%20HCD%20Coding%20Challenge%20Instructions.pdf) and powered by the [OpenBreweryDB API](https://www.openbrewerydb.org/documentation).

## Primary Tech Stack:
 * MongoDB
 * Express.js 4.18.2
 * React.js 18.2.8
 * Node.js 18.12.1

### Additional Technologies used:
 * React Router for client-side routing
 * Axios for http requests (client to server and server to external api)
 * Google-map-react for Google Maps integration
 * SCSS for Styling
 * Mongoose for MongoDB integration
 * Docker for containerizing the app for deployment

 ## Demo the App:
 The app is hosted live at some url. Feel free to try it out, or click the thumbnail below to view a short video.

 ## UI/UX Flow:
 When the user navigates to the home page, they are presented with a list of all breweries in a default city (Asheville, NC), provided by [OpenBreweryDB](https://www.openbrewerydb.org/documentation).

 Within the list, the user is able to:
  * Click on any brewery name to be routed to an individual brewery card displaying location information, including an embedded instance of Google Maps showing the brewery's location. 
  * Click on any brewery url to open the brewery's own website in a new window.

 From any route in the App, the user will see a persistent header containing two navigation elements:
  * Beer mug icon - returns to the home page
  * Find Breweries Near Me - leverages the browser's built-in Geolocation API (with the user's explicit permission) to display a list of breweries closest to the client's location returned from OpenBreweryDB.
 
 From any individual brewery card, the user can click the back arrow to return to the list from which they originally navigated to the brewery card.

