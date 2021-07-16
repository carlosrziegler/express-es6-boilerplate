import app from './app';
import config from './config'

const { port = 8080 } = config;

app.listen(port, () => console.log(`Listening on port ${port}`));
