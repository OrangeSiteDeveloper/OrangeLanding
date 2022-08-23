import Redis from 'ioredis'
let redis = new Redis();


export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  await redis.hset("students", "201903010116", JSON.stringify(body));
  return 'Data is set'
})