# Chat #


A simple chat that works in real time mode
##### P.S. Sandbox for mastering new development technologies  #####



### Functional: ### 
- Authorization
- Adding new chats
- Chat conversations



### Launching ###
- Run the command "npm install" and "npm install gulp -g" .
- import chat.sql from the project's root directory to the mysql database. 
- Edit file server.js - enter your user и password (when you set mysql, you specified them), name database, can be a port if changed. 
```
        var options_connect = {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '1234',
            database: 'chat'
        }
```
+ For development:
  - Start the server with the command "node server.js"
  - Run gulp with a command "gulp" 
+ For Production:
  - Run gulp with a command "gulp build" (He will collect the whole project),
  -  Start the server with the command "node server.js".
  
### How it works ###  

- #### 1. Authorization  ####
![authorization png](https://github.com/TaylerGur/chat/blob/master/index.png)
> Before you start to communicate you need to be autographed. If this is the first time you register.
- #### 2. Chat  ####
> For correspondence, you can choose any existing chat or create a new one. Use the output to change the user.


### Dependencies ###

To run in chats, you need to have you installed [mysql](https://dev.mysql.com/downloads/installer/) (
If you've never really set MySQL , there's a video -> https://www.youtube.com/watch?v=5XUA3kbNo0s ), and [nodejs](https://nodejs.org/uk/download/).

### Used technology stack: ### 
- React - view library all project based on it. Thanks to the React, all components are independent bricks, with which it is convenient to build a project.  
- Redux - all states are stored in one global Store. 
- node.js - now js and on the server;)
- express - The most documented and available on nodejs
- mysql - The most simple database.
- Socket.io - With him the chat station is "really alive". 


Thanks;)
