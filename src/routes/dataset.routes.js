import { Router } from 'express';
import * as ctrl from '../controllers/dataset.controller.js';

export const datasetsRouter = Router();

datasetsRouter
  .get('/', ctrl.getAll)
  .get('/:id', ctrl.getOne)
  .post('/', ctrl.create)
  .put('/:id', ctrl.update)
  .delete('/:id', ctrl.remove);
