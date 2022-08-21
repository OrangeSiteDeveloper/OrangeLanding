import Redis from 'ioredis'
let redis = new Redis();

export default defineEventHandler(async (event) => {
  const data = await redis.hget("students", "201903010116");
  return data
})