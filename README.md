# Census Database Visualizer

## Setup
The root directory contains a Node app that serves both the front end client & back end api. Run the following commands in the root directory to get a version running locally.

**1) Setup environment variables**

Make sure to have a .env file in the root directory with the following variables defined: `DB_PASS`, `DB_HOST`, `DB_USER`, `DB_NAME`, `DB_TABLE`. 

**2) Install dependencies**

```bash
$ yarn install
$ yarn run dev
```
The database visualizer should now be live at `localhost:3000` 🚀

## Testing
 
Run `yarn test` to run tests 

## Deployment

To deploy to heroku, follow the parts of the setup below that you need:

```bash
$ brew install heroku/brew/heroku
$ heroku login
$ heroku create
$ heroku git:remote -a your-remote-app-uri
$ git push heroku master
```



