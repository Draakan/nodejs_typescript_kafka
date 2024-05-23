import reader from "readline-sync";
import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
  clientId: "test-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({
  maxInFlightRequests: 1,
  idempotent: true,
  transactionalId: "uniqueProducerId",
  createPartitioner: Partitioners.LegacyPartitioner,
});

async function sendPayload(input: string) {
  try {
    await producer.send({
      topic: "test",
      messages: [{ key: "test", value: input }],
    });

    console.info("Data has been successfully sent!")
  } catch (e) {
    console.error("Caught Error while sending:", e);
  }
}

async function main() {
  await producer.connect();

  while (true) {
    let input = await reader.question("Data: ");

    if (input === "exit") {
      process.exit(0);
    }
    try {
      await sendPayload(input);
    } catch (e) {
      console.error(e);
    }
  }
}

main();
