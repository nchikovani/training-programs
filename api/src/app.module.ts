import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ExerciseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
