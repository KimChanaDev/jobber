import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Client, Consumer, Message, Producer } from 'pulsar-client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PulsarClient implements OnModuleDestroy {
  private readonly client = new Client({
    serviceUrl: this.configService.getOrThrow<string>('PULSAR_SERVICE_URL'),
  });
  private readonly producers: Producer[] = [];
  private readonly consumers: Consumer[] = [];

  constructor(private readonly configService: ConfigService) {}

  async createProducer(topic: string): Promise<Producer> {
    const producer: Producer = await this.client.createProducer({
      topic,
    });
    this.producers.push(producer);
    return producer;
  }

  async createConsumer(
    topic: string,
    listener: (message: Message) => void
  ): Promise<Consumer> {
    const consumer: Consumer = await this.client.subscribe({
      topic,
      subscription: 'jobber',
      listener,
    });
    this.consumers.push(consumer);
    return consumer;
  }

  async onModuleDestroy() {
    for (const producer of this.producers) {
      await producer.close();
    }
    for (const consumer of this.consumers) {
      await consumer.close();
    }
    await this.client.close();
  }
}
