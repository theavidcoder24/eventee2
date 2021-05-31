# Eventee - Web Application

Eventee, an event planning web app that allows the user to search for events nearby using the user’s location and import events from Facebook.
It uses inbuilt categories to separate events that will be imported from Facebook and see the current events around you in map view making it easier to navigate instead of seeing it in list view.

### Emails & Passwords

## User

Email: tracy@email.com
Password: User1

## Admin

Email: derek@email.com
Password: admin123

# Github Repository

https://github.com/theavidcoder24/eventee2

# Project Installation

Access Demo on https://malloriecini.com/

In your database software create a new blank database then name it 'eventee2' and import the SQL file located in API folder
deployScript.sh

Install the client and api folders into a web server like MAMP or WAMP. The folders need to be installed into the www folder if you're using Wamp for example. Update the database connection settings found within the db.php file with the username and password needed to access the database.

You can view the project in the browser by using these addresses
Local: http://localhost:3000
On Your Network: http://(Insert IP address):
http://localhost:3000/dashboard

Local: http://localhost:3000/react-admin2  
 On Your Network: http://192.168.43.2:3000/react-admin2

## Admin Panel

If installing on a new development environment be sure to run the command below if you don't see a node_modueles folder in the repo

#### cd react-admin

Directs user to the right folder to install dependencies

#### npm install

    Installs the node_modules folder that contains the dependencies

#### npm start

    Starts the development server.

#### npm run build

    Bundles the app into static files for production.

#### npm test

    Starts the test runner

#### npm run eject

    Removes this tool and copies build dependencies, configuration files and scripts into the app diretory. If you do this, you can't go back!

# Technology used in whole project

### Front End

- General use of HTML5, CSS3 and JavaScript was used throughout the project pages.
- Layout Framework: Materialize Version 1.0.0 has been used by linking to CDN that is responsible for the layout and funtionality of the elements
- React (JavaScript Library) implemented into the project by local installation and node git bash,

### Back End

- PHP Hypertext Preprocessor Version 7.3.12
- MySQL/SQL
- Server Software: Apache/2.4.41 (Win64) PHP/7.3.12
- WAMP Version 3.2.0 - 64bit

### 3rd Party Technologies

- Visual Studio Code - used to code the project
- Facebook API – integrate Facebook events and invite friends from Facebook to sign up for events
- Google Maps API – use the apis that are grouped by platform such as “Maps”, “Routes", “Places”
- Material Design - used the icons
- Fetch API - gives a method of fetching api resources to communicate with the server

# Business Rules

- The application will use Google maps API integration so that the user can see the directions to the event.
- Uses can choose to add the event to the device calendar and allow access to their contacts so they can send invitations to the event out via text, call them directly or email.
- When user is signing up can select some interested places for the app to recommend when they are nearby.
- See suggested events around the user’s current location in map view based on the user’s interested selected when registering.
- Events will have markers/icons that are colour coded.
- The application can pinpoint events that are near the user when they enter the app and click on “Explore Events” that also integrates with Facebook events giving the user multiple options
- It has a maximum radius of events where the user is situated.
- Users will be directed to the website of the event if they need to book tickets
- To get your event featured on Eventee you would have to pay a fee
- Receive in-app notifications about upcoming events. If you are an event organizer you can receive notifications when someone has registered at your event.

# CRUD Matrix

## Web Application

|                | CREATE | READ | UPDATE | DELETE | SESSION |
| -------------- | ------ | ---- | ------ | ------ | ------- |
| Create Events  | \*     |      |        |        |         |
| Explore Events |        | \*   |        |        |         |
| Join Event     | \*     | \*   | \*     |        |         |
| Edit Event     |        |      | \*     |        |         |
| Update Profile |        |      | \*     |        |         |
| Register       | \*     |      | \*     |        |         |
| Login          |        |      |        |        | \*      |
| Logout         |        |      |        |        | \*      |
| Log Event      | \*     |      | \*     |        | \*      |

## Administration Panel

|                       | CREATE | READ | UPDATE | DELETE | SESSION |
| --------------------- | ------ | ---- | ------ | ------ | ------- |
| Delete Event (Admin)  |        |      | \*     | \*     |         |
| Manage Users (Admin)  | \*     | \*   | \*     | \*     |         |
| Manage Events (Admin) | \*     | \*   | \*     | \*     |         |
