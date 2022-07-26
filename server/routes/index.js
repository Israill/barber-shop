import UserRoute from './users.routes.js';

import Router from 'express'

const router = new Router()

router.use(UserRoute);

export default router;