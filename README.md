


<p align="center">
  <img src="./libs/core/src/lib/assets/images/logo.png?raw=true" width="70" alt="Sublime's custom image">
</p>

 ✨ **Kh-admin template will save angular developers +20 working hours** ✨

[Watch the live demo video Ar version](https://youtu.be/LfXIjkOTwsQ)
[Watch the live demo video En version](https://youtu.be/AxZ6mqya47w)

## Features
1- Logging with the ability to controle the log level in production 

2- Localization multi language support

3- Support for RTL LTR 

4- Global assets shared between apps

5- Nebular components support that will be shared between apps

6- Global environment files shared between the apps

7- Awesome dashboard layout with multi them support  

8- Demo for dynamic model federation 

9- Angular matrial support

10- Graphs using D3 and Echarts with examples 

11- Scalable reactive forms with customs inputs support

12- Paginated table using ngx-easy-table

13- Google maps support 

14- Permission management for the entire application to protect route and hide or show page content based on the user permissions 

15- Chat bot 

16- Calender

17- Toast notification   

## Coming features
1- Authentication via Keycloak

2- backend tempalte using .Net 8

if you have any recommendation please share it with us

### There is a demo for 
1- (e-proc) app single app using the shared angualr libs 

2- (host) app that use the dynamic model federation the host app will call a remote service (whic is also angular app or could be react) on another domain also will be using the shared angualr libs 

this project covers common features related to angular Micro Frontends Architecture

## Start the app

To start the development server run `nx serve e-proc`. Open your browser and navigate to http://localhost:4200/. Happy coding!


## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

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

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

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

