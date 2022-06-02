## Web project documentation

- <div align="justify">
    Web project developed using <b>NextJS, ES2022, Prisma ORM and SQL Postgres</b> technology, this will provide us with an api, the server is deployed using <a href="https://www.heroku.com">Heroku</a> and the database will be Postgres using <a href="https://www.prisma.io/docs/getting-started/quickstart">Prisma as ORM</a>.    
  </div>

  <br>

- <div align="justify">
    Within the scripts written within the project, it has some that are quite useful when it comes to executing the entire project, whether it is building and caching a Docker container or rebuilding said container from scratch until starting a container directly for production deployment, these scripts would be seen inside the <b>package.json</b> file.
  </div>

```json
"dev:docker:up": "docker-compose -f docker-compose.yml -f docker-compose.dev.yml up",
"dev:docker:up:build": "npm run dev:up -- --build",
"prod:docker:up": "docker-compose -f docker-compose.yml -f docker-compose.prod.yml up",
"test:docker:up": "docker-compose -f docker-compose.test.yml up -d"
```

## Environment variables

- <div align="justify">
    Within this project we must create a <b>.env</b> file where different environment variables will be used that will serve us both for the port where said server will be executed or the credentials of our database.
  </div>

- <div align="justify">
    Within any NextJS project it is recommended to work through local .env files, two of the files necessary for this project are .env.development.local and .env.production.local, within the .env.development file we must put each variable name the prefix NEXT_DEVELOPMENT_ENV_ in the same way for the file .env.production we will put NEXT_PRODUCTION_ENV before.
  </div>

```bash
DATABASE_URL="driver://your_user:your_password@your_host:your_port/your_database_name"

NEXT_DEVELOPMENT_ENV_DATABASE_URL="driver://your_user:your_password@your_host:your_port/your_database_name"
```

## Database management and use of the ORM Prisma

- <div align="justify">
    We will have <a href="https://www.prisma.io/docs/getting-started/quickstart">Prisma</a> as the direct ORM of the project, with which we will be able to handle declarative and very flexible schemes in case of changing the connection driver (In our case we will use Postgres as connection driver), we have created a custom script to execute the prism migrations using the .env.development.local file instead of the .env directly, the command in question is the following.
  </div>

```json
"dev:migrate:postgres": "dotenv -e .env.development.local -- npx prisma migrate dev --name postgres-init"
```

- <div align="justify">
    The result of this command can be seen in the prisma directory followed by migrations located at the root of our project.
  </div>

## Installation for development with docker-compose (Recommended)

```bash
git clone git@github.com:DerianCordobaPerez/Thesis.git
cd Thesis/web

# Start Docker container, in case it is the first time to build it
npm run dev:docker:up

# Start Docker container but build the image at the same time
npm run dev:docker:up:build

# Start Docker container with the intention of deploying it in production mode
npm run prod:docker:up

# Start the Postgres Docker container with the intention of running the tests
npm run test:docker:up
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
