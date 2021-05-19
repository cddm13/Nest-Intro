import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { ModulesModule } from './modules/modules.module';
import { TopicsModule } from './topics/topics.module';

import config from './config';

@Module({
  imports: [
    DatabaseModule,
    CoursesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [config],
    }),
    ModulesModule,
    TopicsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
