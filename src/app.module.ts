import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { User } from './typeorm/entities/user';
import { Product } from './typeorm/entities/product';
import { DataSource } from 'typeorm';


@Module({
  imports: [
    // to expose static web page -- npm install --save @nestjs/serve-static
    ServeStaticModule.forRoot({ 
      rootPath: join(__dirname,'..', 'View'),
      exclude:['/api/(.*)'],
    }),

    // to connet mysql database -- npm install --save @nestjs/typeorm typeorm mysql2
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username : 'root',
      password: 'admin',
      entities: [User,Product],
      synchronize: true, // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      retryAttempts: 1, //default 10, Number of attempts to connect to the database
      retryDelay: 1000, //default 3000 , Delay between connection retry attempts (ms) 
      autoLoadEntities: false // default false , If true, entities will be loaded automatically
    }),

    ProductModule,
    UserModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource) {
  }
}
