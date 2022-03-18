import { Router } from 'express';
import { readdir } from 'fs';

const router = Router();

readdir(`${__dirname}/../routes/`, (err, files) => {
  if (err) throw new Error('No Files');

  files.forEach((file) => {
    import(`../routes/${file}`).then((module) => {
      router.use(`/${file.split('.')[0]}`, module.default);
    });
  });
});

export default router;
