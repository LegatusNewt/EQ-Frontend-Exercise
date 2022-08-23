# EQ Interview Exercise

This project has two components. A Nodejs web server and a Vuejs 3 web application. The project is currently hosted in an Elastic Beanstalk environment in AWS.

[EQ Project](http://eq.legate.technology)

[Git Repo](https://github.com/LegatusNewt/EQ-Frontend-Exercise)

In order to run the project locally you can simple run the EQ_Server node server (follow instructions in that readme) which will serve the built frontend app that is already included.

If you wish to run them seperately make sure the port number on the websocket in the Vue socket.js file is pointing at whichever port you choose to run the nodejs server at. By default i'm running the Nodejs server at port 3000 and vite likes to run the Vuejs app at port 5173 by default.


