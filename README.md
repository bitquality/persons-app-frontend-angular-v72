# Persons App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

# Playing at Heroku

- https://persons-app.herokuapp.com/

# Playing with Persons Service App

- https://bmo-persons-app-mw.herokuapp.com/api/persons/v1/all

- https://bmo-persons-app-mw.herokuapp.com/api/persons/v1/add

Sample POST Request body:

{
	"firstName": "Krishna",
	"lastName": "Mullapudi"
}

# Heroku tips

heroku create

heroku git:remote -a your_app_name_just_created

git push heroku master

heroku open

heroku logs

# Playing Localy

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular CLI commands

Create angular workspace/folder, initial app and init git - ng new persons-app-v7

Build and open browser - ng serve --open

Create a new component called persons-list- ng generate component persons-list
