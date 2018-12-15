// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBaBZz29irgstlDuTnUE3NzYka4PF94fgk",
    authDomain: "ng-econ.firebaseapp.com",
    databaseURL: "https://ng-econ.firebaseio.com",
    projectId: "ng-econ",
    storageBucket: "ng-econ.appspot.com",
    messagingSenderId: "341549345326"
  }
};
