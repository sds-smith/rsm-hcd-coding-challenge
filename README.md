# Discover Breweries

A brewery locator app built for the [RSM HCD Coding Challenge](https://rsm-hcd-coding-challenge.s3.amazonaws.com/requirements/RSM+HCD+Coding+Challenge+Instructions+(1).pdf) and powered by the [OpenBreweryDB API](https://www.openbrewerydb.org/documentation).

## Primary Tech Stack
 * MongoDB 6.0
 * Express.js 4.18.2
 * React.js 18.2.8
 * Node.js 18.12.1

### Additional Technologies used:
 * React Router for client-side routing
 * TypeScript for all client-side code
 * Axios for http requests (client to server and server to external api)
 * Google-map-react for Google Maps integration
 * SCSS for Styling
 * Mongoose for MongoDB integration
 * Docker for containerizing the app for shipping

 ## Demo the App
 The app is hosted live at [https://dgx0klc0yfelo.cloudfront.net](https://dgx0klc0yfelo.cloudfront.net). Feel free to try it out, or click the image below to view a short video.

 [![video link](http://img.youtube.com/vi/AsdvD8i8Wd4/0.jpg)](https://youtu.be/AsdvD8i8Wd4)


 ## UI/UX Flow
 When the user navigates to the home page, they are presented with a list of all breweries in a default city (Asheville, NC), provided by [OpenBreweryDB](https://www.openbrewerydb.org/documentation). The list displays the following information for each brewery:

  * Name
  * Brewery Type
  * Address (Street, City, State, Zip)
  * Website URL (Clickable)

 Within the list, the user is able to:
  * Click on any brewery name to be routed to an individual brewery page displaying location information, including name, address, and a map indicating the brewery's location using latitude and longitude. 
  * Click on any brewery url to open the brewery's website in a new tab.

 From any route in the App, the user will see a persistent header containing two navigation elements:
  * Beer mug icon - returns to the home page
  * Find Breweries Near Me - leverages the browser's built-in Geolocation API (with the user's explicit permission) to display a list of breweries closest to the client's location, returned from OpenBreweryDB.
 
 From any individual brewery page, the user can click the back arrow to return to the list from which they originally navigated to the brewery page.

## Server-side functionality
The versionable REST API follows the MVC design pattern and is accessed through the `/v1` path. It consists of one router (BreweriesRouter) at `v1/breweries`. 

BreweriesRouter contains three endpoints:
 * `'/default_city'` returns the default list of breweries for display on the home page. This list is persisted in a MongoDB Cluster.
 * `'/get_geocode?[BREWERY_POSTAL_CODE]'` returns the latitude and longitude for any brewery that is missing that data in OpenBreweryDB. A request is sent to the Google Maps API.
 * `'/by-dist?[CLIENT_GEOLOCATION_DATA]'` returns a list of breweries closest to the user's current location. A request is sent to the OpenBreweryDB API.

## Deployment and Hosting
 The app is distributed on AWS Cloudfront from two load-balanced AWS EC2 instances, each running it in a Docker container.