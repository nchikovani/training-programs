import { Inject, Injectable } from '@nestjs/common';
import { Exercise } from './exercise.entity';
import { EXERCISE_REPOSITORY } from '../../constants';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject(EXERCISE_REPOSITORY)
    private catsRepository: typeof Exercise,
  ) {}

  getAll(): Promise<Exercise[]> {
    return this.catsRepository.findAll();
  }
}
