# Robot Simulator
Robot simulator will help you simulate behaviour of robot on a board. UI will accept the command input from user as mentioned below.
| Command | Details |
| ------ | ------ |
| PLACE X,Y,F | It will place robot at (x,y) position and direction F(North,South,East or West)  |
| MOVE | Move the robot one step forward in the current direction |
| LEFT or RIGHT |  It will rotate the robot 90 degrees in the specified direction without changing the position of the robot. |
| REPORT | It will announce the X,Y and orientation of the robot |



### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@github.com:varunchauhan49/Simulator.git
$ cd Simulator
$ yarn install
$ yarn start
```

For testing the code execute the following command

```sh
$ yarn test
```

### Tech

Simulator uses a number of open source projects to work properly:

* [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces which is fast, scalable, and simple.
* [Reactstrap](https://reactstrap.github.io/) - Easy to use React Bootstrap 4 components.
* [Twitter Bootstrap](http://getbootstrap.com/) - great UI boilerplate for modern web apps
* [Font Awesome](https://fontawesome.com/) - for amazing icons
* [CRA](https://github.com/facebook/create-react-app) - Create React apps with no build configuration.
* [Enzyme](https://airbnb.io/enzyme/) - Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
* [Jest](https://jestjs.io/) - Jest is used by Facebook to test all JavaScript code including React applications.
