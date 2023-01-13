import { Controller, Get } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  getAll(): Promise<Exercise[]> {
    return this.exerciseService.getAll();
  }
}
