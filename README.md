# Sample Frontend Application

## Overview
This project aims to provide an overview of the programmers ability to handle Angular, API's, Javascript in general, reactive programming using Rxjs and the usage of stage management tools like Ngrx.

The final result is based on the programmers experience and research on documentation and related resources, so any advice on improvements is welcome.

The main flow of this sample application is to offer a list of photos from the Flickr public API, and allow to search and favorite them, showing a list of the favorited photos in a secondary path.

## Design Decisions
### User interface
To lay out the UI a basic setup has been chosen, with a material toolbar, a subheader with navigation links (material also), and a search bar where the user chan type a search term to look for pictures from Flickr. These pictures are then displayed in a material grid with a header including the title.

A similar disposition has been used for the liked pictures, using a message to inform when there are no favorite photos.

The color schem is based on Angular Material itself, and for the subheader a color scheme generator has been used for proper contrast and combinations.

### Flow
The application landing page is ```/photo-album```, which will be also redirecto to from any non existing route or ```/```. Here the user can favorite the default pictures loaded from the initial state, or search for new pictures using the search bar.
A brief message will be displayed if a photo is favorited.

Then the user can navigate to the ***Liked photos*** section to see his/her favorite pictures. This pictures will be available no matter what the user 
searches for in the main page.

### Project structure
The project structure follows the one established by the Angular CLI. However, to host the components, a directory ```components``` has been created. Since this project is small, no further organization is needed, but should it grow, the choice would be to structure the project by functional/feature modules so it would scale easily.

For the same reasons the store for the project is hosted right below app level, in the ```store``` directory. If the application had to grow and had several functional modules, this would most likely be moved to the inside of said modules, and kept separately for each one.

A third new directory has been created, ```interfaces```, where the type definitions live. There are a few to define structures for the data used in the application and have better typing.

Finally the service used to reach the Flickr API is placed in the ```service``` directory.

### Application state
The modeled state for the application is the following:

* ```searchTerm```: it holds the term used by the user to search for pictures.
* ```photos```: it holds the response from the Flickr API, that represents the list of photos searched by the user.
* ```favorites```: this is the list of favorited photos by the user.

To update the state, there are several actions provided:

* ```FAVORITE_PHOTO```: to favorite a photo from the list.
* ```SEARCH_TERM```: to store the most recently used search term by the user.
* ```SET_PHOTOS```: to store the photos retrieved from the API.

To model the state, a type ```State``` has been created, following the structure described previously. The favorite property in the state uses the ```Photo``` model, defined as a class in the ```models``` directory.

### Testing
Due to timing matters, no unit tests have been added, though I am fully aware of the importance of this, and this is a mandatory part of the project, whether it is normal unit testing, TDD, or even ATDD if possible.
Only the basic setup for mocking dependencies and providers has been added,
however given more time all functionality for components and the service would be tested,
as well as the store.

## Code style
This application has been created following the Angular styleguide, along with coding patterns that I believe provide readability and maintainbility to the project, based on experience.

This style is enforced by the usage of TSLint, and a ```tslint.json``` file that includes some standard rules and others added by myself. Also, **Husky** has been used to set up **Git Hooks** for disallowing pushes to the repository without running **ng lint** first. 

## Additional work and improvements
While the provided solution is fully functional, some improvements could be added for better scalability and maintainability should the application grow. At the current moment they might complicate the application unnecessarily, but the following are worth mentioning:

* Addition of Entities to manage the state ([article by the @ngrx team](https://medium.com/ngrx/introducing-ngrx-entity-598176456e15))
* Addition of effects, for instance to fetch the photos from the API ([one example](https://medium.com/front-end-weekly/an-intro-to-ngrx-effects-ngrx-store-with-angular-4-c55c4d1d5baf))
* Adding the **unlike** functionality. For this it would be necessary to add information to identify the pictures to unlike.
* Adding pagination to both paths in the application, and virtual scroll.
* Babel aliases for ```import``` statements.
* Add a ```loading``` property to the state to show an spinner while the API returns the photos.

