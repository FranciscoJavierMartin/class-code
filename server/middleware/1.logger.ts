export default defineEventHandler(async (event) => {
  logger.info(`${event.path} - ${event.method}`);
});
