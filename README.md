# NodeJS + TypeScript  API template

This is a barebone NodeJS + TypeScript project for a remote API. Use it as a starting point to create services for your client apps.

Thanks to DigitalOcean for the inspiration :)

## Create the npm project

Initialize the npm project
```bash
npm init -y
```

Install the typescript package
```bash
npm install --save-dev typescript
```

Create the typescript config file
```bash
touch tsconfig.json
```

Paste contents to file
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

## Creating a minimal TypeScript Express Server

Install Express and the relative TypeScript types
```
npm install --save express@4.17.1
npm install -save-dev @types/express@4.17.1
```

Create a src folder in the root of your project directory. It will contain the original project data
```
mkdir src
```

Create the main api file
```
touch src/api.ts
```

Open the file and paste this basic code
```typescript
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    response: true,
    message: "Your API is up and working"
  })
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
```

The code above creates Node Server that listens on the port 3000 for requests. To run the app, you first need to compile it to JavaScript using the following command
```
npx tsc
```

This uses the configuration file we created in the previous step to determine how to compile the code and where to place the result. In our case, the JavaScript is output to the dist directory.

Run the JavaScript output with node
```
node dist/api.js
```
Now, you can visit http://localhost:3000 in your browser and you should see the message
```json
{
  "response": true,
  "message": "Your API is up and working"
}
```

## Configuring Typescript Linting with eslint

To check syntax of our project we're going to use eslint
```
npm install --save-dev eslint
```
Then, run eslint’s initialization command to interactively set up the project
```
npx eslint --init
```
This will ask you a series of questions. For this project we’ll answer the following:

- How would you like to use ESLint?: To check syntax and find problems

- What type of modules does your project use?: JavaScript modules (import/export)

- Which framework does your project use?: None of these

- Does your project use TypeScript?: Yes

- Where does your code run?: Node

- What format do you want your config file to be in?: JavaScript

Finally, you will be prompted to install some additioanl eslint libraries. Choose Yes and select npm to install those packages. The process will finish and you’ll be left with the following configuration file: eslintrc.js
```js
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
}
```
Run the linter to check all files with the .ts TypeScript extension:
```
npx eslint . --ext .ts
```
## Updating the package.json File

It can be useful to put your commonly run command line tasks into npm scripts. npm scripts are defined in your package.json file.

In this step you will add a start script that will transpile the TypeScript code then run the resulting .js application.

You will also add a lint script to run the eslint linter on your TypeScript files.

Open the `package.json` file and update it accordingly
```json
{
  "name": "node_project",
  "version": "1.0.0",
  "description": "",
  "main": "dist/api.js", // modify this
  "scripts": {
    "start": "tsc && node dist/app.js", // add this line
    "lint": "eslint . --ext .ts", // add this line too
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.1",
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "eslint": "^8.3.0",
    "typescript": "^4.5.2"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

Now your can run those new commands with:
```
npm run start
```
OR 
```
npm run lint
```

**Created by Max Leggieri for Vivendo Developers**
