# Census Database Visualizer
View this app live at: https://census-database-visualizer.herokuapp.com/

## Abstract
The following app allows you to select a census variable and view a table of unique values, the count, and the average age of people for the selected variable. 

Node + Express is used to serve the app. React, Rebass, + Styled Components powers the front end UI. Redux + Thunk is used for state management and asynchronous side effects. 

The root directory contains a Node app that serves both the front end client from `client/` & back end api in `server.js`. I investigated what the data looks like in `Data Peek.ipynb`. 

## Setup
Run the following commands in the root directory to get a version running locally.

**1) Setup environment variables**

Make sure to have a .env file in the root directory with the following variables defined: `DB_PASS`, `DB_HOST`, `DB_USER`, `DB_NAME`, `DB_TABLE`. 

**2) Install dependencies**

```bash
$ yarn install
$ yarn run dev
```
The database visualizer should now be live at `localhost:3000` 🚀

## Testing
 
Run `cd client && yarn test` to run tests. Currently, tests are around whether App renders correctly and snapshot tests around the `SummaryTable` component. Ideally, we should also have tests for the backend api that serves us data for a given variable. 

## Deployment

To deploy to heroku, follow the parts of the setup below that you need:

```bash
$ brew install heroku/brew/heroku
$ heroku login
$ heroku create
$ heroku git:remote -a your-remote-app-uri
$ git push heroku master
```
