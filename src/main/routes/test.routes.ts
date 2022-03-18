import { Router } from 'express';

const router = Router();

router.post('/new', (req, res) => {
  res.status(200).json({
    message: 'new route',
  });
});

export default router;
