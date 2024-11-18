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



