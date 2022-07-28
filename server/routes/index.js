import UserRoute from './users.route.js';
import PostRoute from './posts.route.js'

import Router from 'express'

const router = new Router()

router.use(UserRoute);
router.use(PostRoute)

export default router;