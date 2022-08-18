# Ensemble

Test task to assess Sergey Chernyshov's ability and skillset

Features implemented:

- using environment.*.ts to set API related data;
- Angular Material is used;
- components, services and interface were created;
- implemented automatic unsubscribe mechanism, see auto-unsubscribe.component.base.ts;
- used debounce to reduce requests to the API, see setSearch function in app.component.ts;
- used Observables throughout the project;
- used CSS to arrange search result on the page;
- the task requirement "... Clicking the button should do nothing but it should support displaying a label" was not clear so it was implemented as a button's title - tooltip. To see it just hover the mouse over the button "Click me"

What could be done to improve this app:

- result pagination could improve the user experience;
- better page fit by the results;
- better result card design.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

