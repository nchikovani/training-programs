import { Exercise } from './exercise.entity';
import { EXERCISE_REPOSITORY } from '../../constants';

export const exerciseProviders = [
  {
    provide: EXERCISE_REPOSITORY,
    useValue: Exercise,
  },
];
