# ProjectBoard
Workflow made simple.

## Summary 
Project Board is browser based productivity application that allows a user to stay ontop of thier workflow. The user can open Project Board, add new tasks under in progress and reference these tasks throughout the day. Once a task has been complete, the user can click "compeleted" and the tile will transitioin to the Completed column. If they need to revise something they can can click "revise" and the tile will transisiton back to the In Progress column. When a tasks is finished the user can click "Delete" and the task tile will disapear. Project baord was built using Handlebars, MySQL, Express, and JavaScript. Its teh base of what will become a browser based Kanban baord. 

## Demo
![Site]() 

 
## Technologies Used
- Handlebars: Used as a templating engine for ul HTML snippets that hold the task cards, and separate the generation of the different HTML from the rest of the JavaScript for cleaner and more organozed code.
- MySQL: Relational database management system based on SQL – Structured Query Language, used in this applicationt to warehouse and query user tasks. 
- Express.js - Used for application set up of middle ware for end point connection between the front end and backend.
- Node.js - Used for package managment and to execute JavaScript code to build the command line tool for server-side scripting.
- jQuery - Used for executing functions on the browser side that allow the application render user inputs.
- Git - Version control system to track changes to source co    de
- GitHub - Hosts repository that can be deployed to GitHub Pages
 
## Code Snippet
The following JavaScript snippet is our project model that utilizes the orm that then is executed in the router PUT POST and DELETE functions in our project_controller file. This project object is the intersection between our orm and controller, leveraging the orms functionality of SELECTING and INSERTING data points to and from our data base, then serving that functionality along with callback functions in the project obj to the controller that parses that information and serves it to our server file that then renders it via our localhost to the browser.


```js
var project = {
selectAll: function(cb) {
    orm.selectAll("tasks", function(res) {
        cb(res);
    });
},
insertOne: function(col, val, cb) {
    orm.insertOne("tasks", col, val, cb, function(res) {
        cb(res);
    });
},
update: function(objColVal, condition, cb) {
    orm.update("tasks", objColVal, condition, function(res) {
        cb(res);
    });
},
delete: function(condition, cb) {
    orm.delete("tasks", condition, function(res) {
        cb(res);
    });
}
};
```

## Built With
* [Handlebars.sj](https://handlebarsjs.com/)
* [MySQL](https://www.mysql.com/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [npmjs](https://docs.npmjs.com/)
* [inquirer](https://www.npmjs.com/package/inquirer)

## Authors

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)
