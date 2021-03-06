# KnowledgeBaseApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

This app generated
`ng new knowledge-base-app`

Clarity design test :)
`ng add @clr/angular`

NgRx
https://ngrx.io/guide/schematics
`npm install @ngrx/schematics @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools`
`ng config cli.defaultCollection @ngrx/schematics`
`ng generate store State --root --statePath store --module app.module.ts`
`ng generate effect store/App --root --module app.module.ts --group`

Auth module and state
`ng generate module auth --route auth --module app.module.ts`
`ng generate feature auth/store/Auth --module auth/auth.module.ts --group`

Dashboard module and state
`ng generate module dashboard --route dashboard --module app.module.ts`
`ng generate feature dashboard/store/Dashboard --module dashboard/dashboard.module.ts --group`

Prettier
`npm install --save-dev prettier`

Capacitor for Electron
`npm install @capacitor/core @capacitor/cli`
`npx cap init`
update capacitor.config.json
`"webDir": "dist/knowledge-base-app",`
`npx cap add electron`
update index.html
`<base href="./" /> => add the .`
workflow:
`npm run build`
`npx cap copy`
`npx cap open`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
