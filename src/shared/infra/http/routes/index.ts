import { Router } from 'express';

const routes = Router();

routes.use('/', (req, res) => res.json({ OKAY: true }));

export default routes;
