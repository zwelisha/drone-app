# Toy Drone Assessment

## Rules of Engagement
### Interface
The interface needs to look as good as possible and work on both mobile and desktop devices. The logic part of the test should take about a day to complete, so use the rest of the time to embellish the interface as much as possible, really show us what you can do, show us your creative side!

### Logic
The assessment / game is a simulation of a toy drone moving on a square surface (you decide what the surface looks like). The dimensions of the surface are 10 units x 10 units. There are no other obstructions on the surface. The drone is free to roam around the surface but must be prevented from falling crossing the boundary. Any movement that would result in the drone crossing the surface boundary must be prevented, however further valid movement commands must still be allowed.

### The game needs to accept the following commands:
1. PLACE (X,Y,F)
2. MOVE
3. LEFT
4. RIGHT
5. REPORT
6. ATTACK

##### X – x position on the grid
##### Y – y position on the grid
##### F – The direction the drone is facing (North, South, East, West)


##### PLACE
- PLACE will put the toy drone on the surface in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) is the SOUTHWEST most corner.
- The first valid command to the drone is a PLACE command.
- After the place command, any sequence of commands may be issued, in any order, including another PLACE
command.
- The application should discard all commands in the sequence until a valid PLACE command has been
executed.

##### MOVE 
will move the toy drone one unit forward in the direction it is currently facing.
##### LEFT and RIGHT 
will rotate the drone 90 degrees in the specified direction without changing the position of the drone.

##### REPORT 
will announce the X,Y and F of the drone. This can be in any form.
##### ATTACK 
will cause the drone to fire a projectile 2 units ahead of the current position and explode on the surface. If there are not 2 free spaces on the surface in the direction that the drone is facing the command should be ignored.

If the Drone is not yet on the surface the only command that should be accepted is the place command Input is the developer’s choice but needs to be as intuitive as possible.

#### Example Input and Output:
a) PLACE 0,0,NORTH <br/>
MOVE <br/>
LEFT <br/>
LEFT <br/>
ATTACK <br/>
REPORT - Output: 0,1,SOUTH

b) PLACE 0,0,NORTH <br/>
LEFT<br/>
REPORT Output: 0,0,WEST

c) PLACE 1,2,EAST <br/>
MOVE <br/>
MOVE <br/>
LEFT <br/>
MOVE <br/>
ATTACK <br/>
REPORT Output: 3,3,NORTH

## Getting Started

### Requirements

1. node
2. serve
3. Text editor (Recommended: VSCode or SublimeText or Atom)
4. Prettier

### Installation

#### 1. NodeJs

The installation differs from one operating system to the other, but the documentation which can be found [here](https://nodejs.org/en) have clear instructions for each operating system.

#### 2. serve

Serve is a small, robust tool from the creators of Next.js and is a Node.js package that can be used to serve a static site, a single-page web app, or a static file. It's great for running production builds locally before deploying them, and it's also handy for sharing progress with clients, and teammates, or just testing on different devices on the same network.

```npm install -g serve```

#### 3. Text Editor
Any text editor of your choice can be used. However Visual Studio Code and Atom are highly recommended.

#### 4. Prettier
The installation documentation for Prettier can be found [here](https://prettier.io/) have clear instructions for each text editor.


#### Folder Structure

There are three folders in drone-app. js, css and public. Then there are three files, gitignore, readme and index

```
drone-app
    css
        bootsrap.css
        main.css
    js
        bootstrap.js
        drone.js
        jquery.js
        main.js
    public
        images
    .gitignore
    index.html
    README.md
```

### Formatting The Code

Use Prettier extension for consistency

### Running The Project

#### 1. Clone the project
```
git clone https://github.com/zwelisha/drone-app
```

#### 2. Change Directory (To the root folder of the project)

Change directory to the project `cd drone-app`.
There you will see the folder structure detailed above.



Then to run this game run the following command

```
serve
```
then copy the localhost url and open it on your browser

```
Have fun!

#### Authors

[Zweli Mthethwa](https://www.linkedin.com/in/zweli-mthethwa-244b45a8/)