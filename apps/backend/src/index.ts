import express from 'express';
import morgan from 'morgan';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import schema from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';

const app = express();
app.use(morgan('dev')); // logger

interface MyContext {
  token?: string;
}

const startServer = async () => {
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  const port = Number(process.env.PORT ?? 8080);

  await new Promise<void>((resolve) =>
    httpServer.listen({ host: '0.0.0.0', port }, resolve),
  );
  console.log(`🚀 Server ready at http://localhost:${port}`);
};

startServer();
