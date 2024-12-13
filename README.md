<p align="center">
  <img src="./libs/core/src/lib/assets/images/logo.png?raw=true" width="70" alt="Sublime's custom image">
</p>

 ✨ **Kh-admin template will save angular developers +20 working hours** ✨

- [Watch the live demo (Arabic)](https://youtu.be/LfXIjkOTwsQ)
- [Watch the live demo (English)](https://youtu.be/AxZ6mqya47w)

---

## Table of Contents
- [Features](#features)
- [Coming Features](#coming-features)
- [Demo Overview](#demo-overview)
- [Getting Started](#getting-started)
- [How to Run the Application](#how-to-run-the-application)
- [Development Commands](#development-commands)
- [Nx Guide](#nx-guide)
  - [Generating Code](#generating-code)
  - [Running Tasks](#running-tasks)
  - [Editor Integration](#editor-integration)
  - [Building and Deployment](#building-and-deployment)
- [CI/CD Setup](#ci-cd-setup)
- [Commands for Libraries](#commands-for-libraries)
- [Version Information](#version-information)

---

## Features
1. **Logging**: Configure and control log levels for production.
2. **Localization**: Multi-language support for global applications.
3. **RTL/LTR Support**: Fully supports right-to-left and left-to-right layouts.
4. **Shared Global Assets**: Assets shared across all apps.
5. **Nebular Components**: Integrates shared Nebular components.
6. **Environment Files**: Centralized environment configuration.
7. **Dashboard Layout**: Multi-theme support with an advanced layout.
8. **Dynamic Module Federation**: Example provided for dynamically loading modules.
9. **Angular Material**: Full integration with Angular Material components.
10. **Graphs and Charts**: Example integrations using D3.js and ECharts.
11. **Reactive Forms**: Scalable forms with custom input support.
12. **Paginated Tables**: Using `ngx-easy-table` for advanced data table functionality.
13. **Google Maps**: Seamless integration with Google Maps.
14. **Permission Management**: Role-based route protection and content visibility.
15. **Chatbot**: Built-in chatbot functionality.
16. **Calendar**: Interactive and user-friendly calendar component.
17. **Toast Notifications**: Beautiful and customizable toast messages.

---

## Coming Features
- **Authentication**: Integration with Keycloak.
- **Backend Template**: A robust backend template using .NET 8.

Have recommendations? Share your feedback with us!

---

## Demo Overview

- **E-Proc App**: A single Angular application using shared libraries.
- **Host App**: Demonstrates dynamic module federation. It calls a remote service (Angular or React) on another domain and uses the shared Angular libraries.

This project explores common features and principles related to Angular Micro Frontends Architecture.

---

## Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **Nx CLI**: Install Nx CLI globally using `npm install -g nx`.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/khalifa005/e-proc.git
   cd e-proc
   nx serve e-proc 
   npx nx serve host --devRemotes=service1
   npx nx graph
   npx nx run host:build:production
   //Development Commands
   npx nx run host:build:production --skip-nx-cache
   npx nx g @nx/angular:lib <lib-name>
   npx nx g @nx/angular:lib <lib-name>
   ```


## Addtional commands for running the apps
npx nx serve e-proc

npx nx serve host --devRemotes=service1

npx nx graph

npx nx run host:build:production

npx nx run host:build:production --skip-nx-cache


## Commands for generating libs
npx nx g @nx/angular:lib dashboard

npx nx g @nx/angular:lib nebular

npx nx g @nx/angular:component header --project=nebular --export

npx nx g @nx/angular:lib core

npx nx g @nx/angular:service services/i18n --project=core --skip-tests

npx nx g @nx/angular:lib products --routing true --lazy true parent-module=apps/host/src/app/app.module.ts


## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```
## Coming features
1- Authentication via Keycloak

2- backend tempalte using .Net 8

if you have any recommendation please share it with us


## angular files 

# Angular and Nx Workspace Development Guide

## Table of Contents
1. Building and Configuration Commands
2. Nx Workspace Commands
3. Setup and Cleanup
4. Official Nx Documentation
5. To-Do and Pending Tasks
6. Debugging and Testing
7. Additional Notes
8. References

---

## Building and Configuration Commands

### Production Build
ng build --configuration=production --base-href=/FolderAppNameBasedOnIIS/  
ng build --configuration=production --base-href=/CrmPortalClient/  
npm run build:prod

### Staging and Testing
ng build --configuration=staging  
ng serve --configuration=production

### Uninstall Unused Packages
npm uninstall @rxweb/reactive-form-validators  
npm uninstall @angular/material

---

## Nx Workspace Commands

### Creating an Nx Workspace
npx create-nx-workspace amana --preset=angular  
npx create-nx-workspace workspace --cli=angular --preset=angular --appName=tiny-app --style=scss

### Managing Libraries and Components
- Generate a shared library:  
  npx nx g library assets --directory=shared --tags="scope:shared,type:assets" --style=css

- Clean up unnecessary files:  
  npx rimraf ./apps/tiny-app/src/assets ./libs/shared/assets/*.js ./libs/shared/assets/*.json ./libs/shared/assets/src/*.*  
  npx mkdirp ./libs/shared/assets/src/assets/fonts ./libs/shared/assets/src/assets/icons ./libs/shared/assets/src/assets/images

### Module and Component Generation
- Generate libraries:  
  npx nx g @nx/angular:lib core  
  npx nx g @nx/angular:lib material  
  npx nx g @nx/angular:lib nebular

- Generate components:  
  npx nx g @nx/angular:component components/header --project=nebular --export  
  npx nx g @nx/angular:component containers/login --project=auth --export

---

## Setup and Cleanup

### Node Version Management
nvm ls  
npx create-nx-workspace@latest

### Webpack Configuration
- Ensure shared configurations in webpack.config.ts:  
  - Use "singleton: true" for shared modules.  
  - Disable Hot Module Replacement if not needed.

---

## Official Nx Documentation

### Useful Commands
- Create a host:  
  npx nx g @angular:host dashboard

- Add remotes to a host:  
  npx nx g @angular:remote firstService --host=dashboard

### Debug Graph
npx nx graph

---

## To-Do and Pending Tasks

### E-Proc
- Import shared styles:  
  @import 'libs/nebular/src/lib/styles/themes';

### Permission-Based Authorization
- Demo link: https://www.youtube.com/watch?v=0HqI4uRKxZc

---

## Debugging and Testing

### Testing and Linting
npx nx test common-ui  
npx nx lint common-ui

### Running Applications
npx nx run admin:build:production  
npx nx run admin:serve --ssl=true  
npx nx serve e-proc --prod

### Live Reloading with Multiple Remotes
npx nx serve dashboard --devRemotes=service1,service2


npx create-nx-workspace@latest --preset=angular-monorepo --skipTests

npx create-nx-workspace workspace --cli=angular --preset=angular --appName=tiny-app --style=scss

nx generate library assets --directory=shared --tags="scope:shared,type:assets" --style=scss
npx rimraf ./apps/tiny-app/src/assets ./libs/shared/assets/*.js ./libs/shared/assets/*.json ./libs/shared/assets/src/*.* ./libs/shared/assets/src/lib





---

## Additional Notes

### Issues and Missing Files
- Nx Workspace JSON: https://nx.dev/deprecated/workspace-json  
- Nx and Angular Concepts: https://nx.dev/concepts/more-concepts/nx-and-angular  
- Storybook Configuration: https://nx.dev/packages/storybook/documents/angular-configuring-styles

---

## References

### Team Members Related to Angular
- Jay Bishtawi  
- Duncan Hunter



