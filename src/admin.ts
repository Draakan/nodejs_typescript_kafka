import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "test-app",
  brokers: ["localhost:9092"],
});

const admin = kafka.admin();

const resetOffsets = async () => {
  await admin.connect();

  await admin.resetOffsets({
    topic: "test",
    groupId: "test-group",
    earliest: true,
  });

  await admin.disconnect();

  console.info("Offset has been successfully reset!")
};

resetOffsets().catch(console.error);
