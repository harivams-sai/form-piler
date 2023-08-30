import { Queue, Worker } from 'bullmq';
import ModGenerate from './generate';

const QUEUE_NAME = 'default';

if (!process.env.REDIS_URL) console.warn('REDIS_URL is not defined');
const connection = {
  host: process.env.REDIS_URL,
};

export const queue = new Queue(QUEUE_NAME, { connection });

const worker = new Worker(
  QUEUE_NAME,
  async (job) => {
    // Will print { foo: 'bar'} for the first job
    // and { qux: 'baz' } for the second.
    if (job.name === 'generateSubmissions') {
      const submission = await ModGenerate.submission();
      console.log(submission);
    }
  },
  { connection }
);

type JobName = 'generateSubmissions';

export const enqueue = async (job: JobName, data?: any) => {
  await queue.add(job, data);
};
