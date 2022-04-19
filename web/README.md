## Web project documentation

- <div align="justify">
    Web project developed using <b>NextJS, ES2022 and Firebase</b> technology, this will provide us with an api, the server is deployed using <a href="https://www.heroku.com">Heroku</a> and the database is hosted using <a href="https://console.firebase.google.com/">Firebase</a>.    
  </div>

  <br>

- <div align="justify">
    Within the scripts written within the project, it has some that are quite useful when it comes to executing the entire project, whether it is building and caching a Docker container or rebuilding said container from scratch until starting a container directly for production deployment, these scripts would be seen inside the <b>package.json</b> file.
  </div>

```json
"dev:up": "docker-compose -f docker-compose.yml -f docker-compose.dev.yml up",
"dev:up:build": "npm run dev:up -- --build",
"prod:up": "docker-compose -f docker-compose.yml -f docker-compose.prod.yml up"
```

## Environment variables

- <div align="justify">
    Within this project we must create a <b>.env</b> file where different environment variables will be used that will serve us both for the port where said server will be executed or the credentials of our database.
  </div>

```bash
PORT=YOUR_PORT # Port where the server will be executed, exmaple: PORT=3000
FIREBASE_API_KEY: "...",
FIREBASE_AUTH_DOMAIN: "...",
FIREBASE_PROJECT_ID: "...",
FIREBASE_STORAGE_BUCKET: "...",
FIREBASE_MESSAGING_SENDER_ID: "..."
FIREBASE_APP_ID: "..."
FIREBASE_MEASUREMENT_ID: "..."
```

## Installation for development with docker-compose (Recommended)

```bash
git clone git@github.com:DerianCordobaPerez/Thesis.git
cd Thesis/web

# Start Docker container, in case it is the first time to build it
npm run dev:up

# Start Docker container but build the image at the same time
npm run dev:up:build

# Start Docker container with the intention of deploying it in production mode
npm run prod:up
```

## Installation (Manually)

```bash
git clone git@github.com:DerianCordobaPerez/Thesis.git
cd Thesis/web
npm install
npm run build
npm start
```

<div align="justify">
  Now you can visit: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
</div>
