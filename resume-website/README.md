# ResumeWebsite

This project is a dynamic and interactive resume website built using [Angular](https://angular.io/) version 19.0.7. It showcases personal and professional details in a clean and responsive layout, leveraging Angular's component-based architecture.

## Development Server

To start the local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Features

- **Interactive Sections**: Includes sections for About Me, Skills, Projects, and Contact.
- **Dynamic Content**: Content is dynamically loaded using Angular components and services.
- **Smooth Animations**: Hover and click animations enhance user interactivity.
- **Responsive Design**: Optimized for viewing on desktops, tablets, and mobile devices.

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building the Project

To build the project, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Note: Angular CLI does not include an end-to-end testing framework by default. You can integrate a testing framework such as [Cypress](https://www.cypress.io/) or [Protractor](https://www.protractortest.org/).

## Project Structure

The project structure is organized as follows:

```
src/
|-- app/
    |-- components/  # Contains all Angular components
    |-- services/    # Services for managing data and logic
    |-- models/      # Data models used across the app (optional)
|-- assets/          # Static assets like images and fonts
|-- environments/    # Environment configurations
```

## Deployment

To deploy the project, build it for production using:

```bash
ng build --prod
```

The optimized build files will be available in the `dist/` directory. You can deploy these files to any web server or hosting platform, such as:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [AWS S3](https://aws.amazon.com/s3/)

## Additional Resources

For more information on using Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

