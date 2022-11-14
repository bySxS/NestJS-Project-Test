import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from "./products/model/product.model";
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { RolesUsersModule } from './roles_users/roles_users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver
    }),
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qgn0k.mongodb.net/`+
        `${process.env.MONGO_DB}?retryWrites=true&w=majority`),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      logging: true,
      models: [Product],
    }),
    UsersModule,
    RolesModule,
    RolesUsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
