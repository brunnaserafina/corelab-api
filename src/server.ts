import app, { init } from './app';

const port = process.env.PORT || 3333;

init().then(() => {
  app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log('Running on port ' + port);
  });
});
