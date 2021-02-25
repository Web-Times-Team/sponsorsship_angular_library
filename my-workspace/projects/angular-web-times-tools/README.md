# Angular web times tools

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Code scaffolding

Run `ng generate component component-name --project angular-web-times-tools` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project angular-web-times-tools`.
> Note: Don't forget to add `--project angular-web-times-tools` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build angular-web-times-tools` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build angular-web-times-tools`, go to the dist folder `cd dist/angular-web-times-tools` and run `npm publish`.

## Running unit tests

Run `ng test angular-web-times-tools` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Module login
To use it import the `LoginModule` module <br>
in the view  <wtt-login> <wtt-login>  <br>
in the component provide the values of  <br>
 `mediaButInfTypes`:the ways of login available  (facebook, google, linkedin) <br>
  `usernameField`: specifies whether to log in with a username or an email <br>
   event `loginValue` event allows you to receive login credentials ;
## Module menu-bar
To use it import the  `MenuBarModule` module <br>
in the view  <wtt-menu-bar> <wtt-menu-bar>  <br>
in the component provide the values of  <br>
 `menuBarDatas: MenuBarDatas`: menu bar infos 