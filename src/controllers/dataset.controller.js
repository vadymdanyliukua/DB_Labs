import { DatasetsService } from '../services/dataset.service.js';

export const getAll = async (_req, res, next) => {
  try { res.json(await DatasetsService.findAll()); }
  catch (e) { next(e); }
};

export const getOne = async (req, res, next) => {
  try {
    const ds = await DatasetsService.findById(req.params.id);
    if (!ds) return res.status(404).json({ message: 'Not found' });
    res.json(ds);
  } catch (e) { next(e); }
};

export const create = async (req, res, next) => {
  try { res.status(201).json(await DatasetsService.create(req.body)); }
  catch (e) { next(e); }
};

export const update = async (req, res, next) => {
  try {
    const ds = await DatasetsService.update(req.params.id, req.body);
    if (!ds) return res.status(404).json({ message: 'Not found' });
    res.json(ds);
  } catch (e) { next(e); }
};

export const remove = async (req, res, next) => {
  try {
    const ok = await DatasetsService.remove(req.params.id);
    if (!ok) return res.status(404).json({ message: 'Not found' });
    res.status(204).end();
  } catch (e) { next(e); }
};
