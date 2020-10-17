# notes-taken

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Generic badge](https://img.shields.io/badge/Dev_Dependancy-nodemon-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Dev_Dependancy-express-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Dev_Dependancy-uuid-blue.svg)](https://shields.io/)



## Description

Check out this [note app](https://notes-taken-ucb.herokuapp.com/) and start leaving messages. It's run on a shared server so you can check out what other people are posting! If you are intersted in finding out hoe it works or want to make some tweaks yourself keep reading for the info you will need!

## Table of Contents

* [Preview](#preview)

* [Installation](#installation)

* [Usage](#usage)

* [Project Significance](#project-significance)

* [Code Highlights](#code-highlights)

* [License](#license)

* [Contributing](#contributing)

* [Questions](#questions)

## Preview

![video demonstration](public/assets/images/nt-one.gif)

## Installation

To install necassary dependancies please use the following command(s): 
 * uuid - used to create unique IDs for each new note 
 * nodemon - used to refresh server // can run into complications when attempting to save new notes

```
npm install express uuid nodemon
```

## Usage 

#### *App*

Head over to the link and you can start using the note taker. Type in a title and make sure you add in some text before you attempt to save. You can type in as many notes as you would like. You can then save them and read later. Once you no longer need a note you can delete it!

#### *Develop*
When it comes to Development keep in mind that the file structre is important. Any functionality that is involved with front end display will be in the *htmlRoutes.js* file. If you want to dig in to the functionality that creates the notes, saves the notes, and deletes the notes take a look at *apiRoutes.js*. The *index.js* contains all of the code that connects the front end to the back end js files. *Server.js* contains the main express commands that init the server.

A quick note -- just to re-itereate *nodemon* is great to use when you are testing to make sure the html is rendering from your backend (testing if you're sending the files) but it can start being a pain when you are trying to test if notes are being saved. The way the code is set up it is going to reset the *db.json* file that contains the notes everytime you make any change to the server.

## Project Significance

This was a really great project to work on! We got to create out own server and make a practical application. We exercised a couple of new concepts in this assignment! Although we have used GET methods with ajax calls before this was the first time we used GET methods with express. This was also the first time we used the POST and DELETE methods. If I am not mistaken this is the project that has been closest to a complete CRUD application. The only one we were not able to implement was UPDATE!

## Code Highlights

The code below is from *apiRoutes.js* and it contained the main functionality of our project. It was the code that made everything work. Of the three CRUD methods we used, DELETE was the hardest but also the most satisfyng to work on. My favorite interaction is how I filtered through the db.json file and deleted a specific note.

```
//delete notes
    app.delete("/api/notes/:id", (req, res) => {

        //filter through notes to match by id 
        savedNotes.forEach(note => {
            if (req.params.id === note.id) {
                //find the index of current obj
                let noteID = savedNotes.findIndex(obj => obj.id === note.id);
                savedNotes.splice(noteID, 1);
            };
        });

        //update db.json file
        fs.writeFile("./data/db.json", JSON.stringify(savedNotes), (err) => {
            if (err) throw (err);
        });

        //close cycle and send back json
        res.json(savedNotes);
    });
```
```
[{"title":"new note","text":"woooo","id":"c661e23d-a5c8-4a2d-bcc5-06bb01af1cd5"},{"title":"test note!!","text":"YAAYYYY","id":"bec35218-f407-4906-8317-7db4b409dea9"},{"title":"Another one","text":"OKEi","id":"1c8c334c-8c56-4aa8-9d5e-0d1eb15ab6a8"}]
```

## License

MIT

## Contributing

[Jonathan-David Lopez Martinez](http://www.jds.world/)

## Questions 

If you have any questions about the repo, want to open an issue or contact me directly please reach out to focus4ursoul@gmail.com. Check out more of my work at [Goodlvn](https://github.com/Goodlvn).

<img src="https://avatars3.githubusercontent.com/u/37821521?v=4=50x50" alt="drawing" width="200"/>
