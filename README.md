# Palette Picker 

[Deployed site](https://palette-picks-fe.herokuapp.com/)
[Backend](https://github.com/hfaerber/Palette_Picks)

Contributors: 

[Cameron MacRae](https://github.com/cammac60)
[Heather Faerber](https://github.com/hfaerber)

## Overview

  Palette Picker is an application for designing color palettes and allows users to create custom palettes that can be saved to a project. 
  
### How to Use: 

Once on the landing page, sing in to continue. As of 02-12-20 you can sign in with any name or password as long as the fields are filled in. See [Known Bugs/Future Iterations](###-known-bugs/future-iterations) for more details. 

<img width="1440" alt="Screen Shot 2020-02-12 at 5 31 00 PM" src="https://user-images.githubusercontent.com/47998896/74390127-8bedda00-4dbd-11ea-82cb-9c76e0a7347e.png">

You will then be directed to the homepage where you can sign out and create new projects. 

<img width="1440" alt="Screen Shot 2020-02-12 at 5 37 17 PM" src="https://user-images.githubusercontent.com/47998896/74390418-76c57b00-4dbe-11ea-899d-bb37c54cdb4a.png">

If you scroll down further you will see a section where you can create a new palette. Colors can be chosen manually using a hex code or randomly by clicking the randomize button. There is also a locking mechanism for each color so that you can keep colors you like while continuing to randomize others. Once you are satisfied with the palette simply select the project that it belongs to and give it a name. After clicking the create button your palette will be saved under the selected project. 

<img width="1440" alt="Screen Shot 2020-02-12 at 5 37 17 PM" src="https://user-images.githubusercontent.com/47998896/74390634-1daa1700-4dbf-11ea-9114-aa2bca7bc5d9.png">

If you scroll back up and click on a project you will be taken to a project page. From here you can use the menu options at the top to sign out or go back to the homepage. You can also delete the project or some of the palettes within it by using the delete project button or by clicking the trash icon next to a palette. 

<img width="1440" alt="Screen Shot 2020-02-12 at 5 42 51 PM" src="https://user-images.githubusercontent.com/47998896/74390742-6a8ded80-4dbf-11ea-9bbf-2b0f130e4d09.png">

### Known Bugs/Future Iterations

- There is a bug that is causing some of the selected colors to appear transparent even when a hex is entered after clicking the radnomize button. To get around this, simply type in or remove a character and add it back. 
- Since anyone can log in with any username or password all projects and palettes are shared within the database. Meaning that anyone can add or remove any project or palette. This should be solved when real sign in validation is implemented. 
- We would like to add the ability for users to be able to edit project and palette names as well as change the color scheme of a palette after it has been added. 

### Dev Setup Instructions

- Clone this repo.
- Cd into the root repository and run `npm i` or `npm install` to install all dependencies. 
- `npm start` to get the repo up and running on localhost:3000.
- The testing suite can be run with `npm test`.
