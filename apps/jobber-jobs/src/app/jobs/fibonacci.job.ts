import { JobDecorator } from '../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@JobDecorator({
  name: 'Fibonacci Job',
  description: 'Calculates Fibonacci numbers',
})
export class FibonacciJob extends AbstractJob {}
