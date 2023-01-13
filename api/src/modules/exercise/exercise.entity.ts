import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Exercise extends Model {
  @Column
  title: string;

  @Column
  multiplier: number;

  @Column
  muscle_group: number;

  @Column
  type: number;
}
