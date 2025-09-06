import { Module } from '@nestjs/common';
import { FibinacciConsumer } from './fibonacci/fibonacci.consumer';
import { PulsarModule } from '@jobber/pulsar';

@Module({
  imports: [PulsarModule],
  providers: [FibinacciConsumer],
})
export class JobsModule {}
