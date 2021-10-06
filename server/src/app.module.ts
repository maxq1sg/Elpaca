import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import config from './../config/index';
import { User } from './users/user.model';

const configuration = config();
console.log(configuration.database);
@Module({
  imports: [
    UsersModule,
    SequelizeModule.forRoot({
      ...configuration.database,
      synchronize: true,
      autoLoadModels: true,
      logging: true,
      models: [User],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
