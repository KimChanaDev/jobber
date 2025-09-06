import { PulsarClient } from '@jobber/pulsar';
import { JobDecorator } from '../../decorators/job.decorator';
import { AbstractJob } from '../abstract.job';
import { FibonacciData } from './fibonacci-data.interface';

@JobDecorator({
  name: 'Fibonacci',
  description: 'Calculates Fibonacci numbers',
})
export class FibonacciJob extends AbstractJob<FibonacciData> {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
