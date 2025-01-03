import express, { Request, Response } from 'express';
import { NoDriveDay } from '../models/NoDriveDay';

const router = express.Router();

router.get('/candrive', (req: Request, res: Response) => {
  const { plate, date, time } = req.query;

  if (!plate || !date || !time) {
    return res.status(400).json({ error: 'Missing plate, date, or time' });
  }

  const result = NoDriveDay.canDrive(plate as string, date as string, time as string);
  res.json({ result });
});

export { router }; 
