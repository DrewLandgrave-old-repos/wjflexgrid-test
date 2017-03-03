# Mockups

## Getting Started

### Pre-reqs
Download [Node.js](https://nodejs.org/en/) which also comes with NPM

*I've never installed node on windows so I'm not 100% sure what happens next. I believe you can just open a command prompt and use it*

Check to make sure node is working by opening a command prompt and running `node -v` which should tell you want node version you are running.
If all is well run `npm install -g angular-cli`

I have been using [Visual Studio Code](http://code.visualstudio.com/) to write the mockups. It comes with an [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

You'll also want to make sure you have [git](https://www.atlassian.com/git/tutorials/install-git#windows) installed.

### Getting the project locally
Once all the prerequisits are installed. Clone the project from the [repo](https://bitbucket.org/dlandgrave/glassworks-mockups) or if you are using git from command line run `git clone git@bitbucket.org:dlandgrave/glassworks-mockups.git` in the directory you want to clone the project into.

Next, from the command line, navigate to your project directory and run `npm install` to install all the dependencies.

Once that is done you can run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.