# Welcome to the Deloitte .NET CoP Angular “Tour of Heroes” workshop.
* This workshop will introduce practitioners to Angular single-page-application development fundamentals and demonstrate core Angular concepts and architecture using the Angular tutorial application “Tour of Heroes” and its accompanying official Angular documentation as a model.
[This repository](https://github.com/BFGriffith/angular-tour-of-heroes) is a fork based on the open-source Angular tutorial and documentation demo application “Tour of Heroes” as developed in an [example repository](https://github.com/johnpapa/angular-tour-of-heroes) by **John Papa**: *Principle Developer Advocate Lead* for Microsoft, *Google Developer Expert* for Angular, author/presenter of many Angular tutorials on *Pluralsight* and elsewhere, and a widely recognized source of best practices, file structures, and architecture guidelines for Angular development.

The repository is a simple Angular app with one module and two routes, and is a minor variation on the “Tour of Heroes” example John Papa wrote for the [official Angular documentation](https://angular.io/tutorial).

## STEP-ONE: Install command-line dependancies that are fundamental prerequisites for Angular development, if necessary:
* Install [**git**](https://git-scm.com/download/win) for Windows [or whatever other OS you may have](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* Install [Node.js](https://nodejs.org/en/download/), preferably 64-bit (if possible) — then confirm successful installation on the command-line: `node -v`
* Install the latest version of [NPM](https://www.npmjs.com/get-npm) (Node Package Manager) on the command-line `npm install npm@latest -g` — then confirm successful installation on the command-line: `npm -v`
Install the [Angular CLI](https://cli.angular.io/): `npm install -g @angular/cli` using **npm** — then confirm successful installation of the Angular Command-Line-Interface on the command-line: `ng v` — the Angular CLI is a command-line tool to generate new Angular applications and conveniently scaffold components|directives|pipes|services|classes|modules etc.

## STEP-TWO: Clone down the Code to your local machine
* To access our full notes and commentary for this workshop and these instructions, you may wish to fork or clone it directly: `git clone https://github.com/BFGriffith/angular-tour-of-heroes.git toh` or you may prefer to fork [John Papa's repository](https://github.com/johnpapa/angular-tour-of-heroes) to your own GitHub account to create a sandbox for practicing and storing Angular templates and basic CRUD development examples, or you may wish to simply clone it for local practice: `git clone https://github.com/johnpapa/angular-tour-of-heroes.git toh`.
* Once you have a local repository cloned down and ready to go, you will want to navigate into it on the command-line and use **npm** to install all its dependency libraries necessary for it to work that are not kept in source-control:
```
cd toh
npm install
```

## STEP-THREE: Build and Run the Angular development-server in your repository
* Run `ng serve` for a dev server on the command-line in the root directory of your Angular application. Then navigate to `http://localhost:4200/` in a browser. The app will automatically reload if you change any of the source files (live reloading).

---

## Code-scaffolding:
* In the directory where you wish to generate new Angular architecture on the command-line: `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module` to conveniently scaffold more parts to your Angular application.

## Build:
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit-tests:
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests:
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests, make sure you are serving the app via `ng serve`.

## Further help:
* To get more help using the Angular CLI use the `ng help` command or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Next steps for further learning:
* For another similar demo application from John Papa using Angular similarly to the official documentation and tutorials, check out his [“**Heroes and Villains**” example](https://github.com/johnpapa/heroes-angular): [live demo here](https://papa-heroes-angular.azurewebsites.net/heroes) — `git clone https://github.com/johnpapa/heroes-angular.git` — this repository has comparable versions to assess similarities and differences in component-based architecture and basic CRUD between Angular versus React, Vue, and Svelte, as well as providing useful demonstrations of using **Cypress** tests in an Angular application (which run quickly in the same loop as the application being tested and have similar syntax to jQuery, making them easier for some front-end developers compared to the test-driven-development approach of Jasmine and Karma, which don't require the DOM)
* I would also recommend checking out some of John Papa's excellent Angular tutorials on Pluralsight or elsewhere, as well as other highly rated Angular tutorials on popular coding-instructional websites such as Udemy or LinkedIn learning which Deloitte provides subscriptions to.
