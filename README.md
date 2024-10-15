YALA - Yet Another Lunch App

## Getting Started

Prerequisites:

- [Node JS v22](https://nodejs.org/en)
- Postgres

You can install node using [nvm](https://github.com/nvm-sh/nvm) or for example with [homebrew](https://formulae.brew.sh/formula/node).

If you installed node with nvm, run `nvm use` before installing or running project.

After installing node, run `npm install` to install project dependencies.

Then create a local environment file `.env.local` and copy the contents of `.env` into it.
Populate the file with your own values. To acquire the required variables,
create an application to Auth0 and get the values from there. Remember to also set
the callback url in the Auth0 dashboard since without it,
the authentication will fail. The default callback URL is `http://localhost:3000/api/auth/callback`
for local development.

Run project locally with `npm run dev`

## Postgres

Local postgres database is required for running the project. Running it in Docker is the easiest way usually.

```bash
docker run --name yala-postgres -e POSTGRES_PASSWORD=yala -p 5432:5432 -d postgres
```

## Datamodel

[Datamodel](docs/datamodel.md)

## Swagger

Swagger is available at `/swagger-ui`.

Swagger documentation is updated in post-install, so run `npm install` to update the documentation.

## E2E tests with Playwright

Playwright end to end tests are run on pull requests.

Check how install and run Playwright locally: https://playwright.dev/docs/intro
