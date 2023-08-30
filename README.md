# A Form Response Generator!
The Tech Stack 🌟

| Technology                                  | Description                               |
|---------------------------------------------|-------------------------------------------|
| [TypeScript](https://www.typescriptlang.org/download) | You know it!                            |
| [Docker](https://www.docker.com/)                 | Containerize it all!                   |
| [React](https://react.dev/)                       | The JS Frontend Library                 |
| [Node](https://nodejs.org/en)                     | Server-side JS runtime env              |
| [Express](https://expressjs.com/)                 | Server Side Framework for Node.js       |
| [Postgresql](https://www.postgresql.org/)         | The Big Elephant DB                    |
| [GraphQL](https://graphql.org/)                   | For querying into GraphQL APIs          |
| [Redis and BullMQ](https://github.com/taskforcesh/bullmq) | Message Broker for managing Task Queue |
| [Prisma](https://www.prisma.io/)                  | Node.js ORM for Postgres DB            |
| [Knex](https://knexjs.org/)                       | For SQL query building and DB Migrations|
| [Morgan](https://github.com/expressjs/morgan)     | Logger for HTTP requests               |
| [SWC](https://swc.rs/)                           | Fast Compiler                          |


![image](https://github.com/harivams-sai/form-piler/assets/88828522/9d50c6d5-d932-461e-bb39-cd540c740638)

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
