import mongodbConnect from '../../infra/db/mongodb-connect';
import app from '../config/app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  mongodbConnect();
  console.log(`Server working on ${port}`);
});
