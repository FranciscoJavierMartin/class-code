export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('error', (error, { event }) => {
    if (error) {
      handleError(event, error);
    }
  });
});
