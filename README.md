# TypeScript KafkaJS 

## Simple Producer & Client example in KafkaJS

### How to run:

Step 1: To setup Kafka run `docker-compose -f ./docker-compose.kafka.yml up -d`

Step 2: Onc you have both the kafka-server and the kafka-zookeeper running, you can start the producer using `ts-node src/producer.ts`

Step 3: In a new terminal window, run `ts-node src/consumer.ts` to start the client. 

Step 4: Go back to the producer, and start typing your data. 
