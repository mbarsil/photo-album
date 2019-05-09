# AngularTestTask

## Overview
This test has been carried out following the instructions given by Ciklum on behalf of the Novax team. In order to do it certain decisions have been made, that will be laid out in the following sections.

It is important to point out that in order to not extend the delivery of the task for too long, certain improvements are only indicated as next steps. Some of them would be and overkill due to the simplicity of the task but interesting to include for better scalability nonetheless.

Also, the final result is based on the programmers experience and research on documentation and related resources, so any advice on improvements is welcome.

## Design Decisions
### User interface
To lay out the UI a basic setup has been chosen, with a material toolbar, a subheader with navigation links (material also), and a search bar where the user chan type a search term to look for pictures from Flickr. These pictures are then displayed in a material grid with a header including the title.

A similar disposition has been used for the liked pictures, using a message to inform when there are no favorite photos.

The color schem is based on Angular Material itself, and for the subheader a color scheme generator has been used for proper contrast and combinations.

### Project structure
The project structure follows the one established by the Angular CLI. However, to host the components, a directory ```components``` has been created. Since this project is small, no further organization is needed, but should it grow, the choice would be to structure the project by functional/feature modules so it would scale easily.

For the same reasons the store for the project is hosted right below app level, in the ```store``` directory. If the application had to grow and had several functional modules, this would most likely be moved to the inside of said modules, and kept separately for each one.

A third new directory has been created, ```models```, where the models live, in this case the ```Photo``` model, used to shape the state for the favorites photos.

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

## Additional work and improvements
While the provided solution is fully functional, some improvements could be added for better scalability and maintainability should the application grow. At the current moment they might complicate the application unnecessarily, but the following are worth mentioning:

* Addition of Entities to manage the state ([article by the @ngrx team](https://medium.com/ngrx/introducing-ngrx-entity-598176456e15))
* Addition of effects, for instance to fetch the photos from the API ([one example](https://medium.com/front-end-weekly/an-intro-to-ngrx-effects-ngrx-store-with-angular-4-c55c4d1d5baf))
* Adding the **unlike** functionality. For this it would be necessary to add information to identify the pictures to unlike.
* Adding pagination to both paths in the application, and virtual scroll.
* Babel aliases for ```import``` statements.


