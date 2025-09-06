import { PulsarClient, PulsarConsumer } from '@jobber/pulsar';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Message } from 'pulsar-client';

@Injectable()
export class FibinacciConsumer extends PulsarConsumer implements OnModuleInit {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient, 'Fibonacci');
  }

  protected async onMessage(message: Message) {
    this.acknowledge(message);
    console.log('FibinacciConsumer.onMessage(): message consume successfully');
  }
}
