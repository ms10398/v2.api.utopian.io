import * as express from 'express';
import userRoutes from './user.route';
import socialLoginRoutes from './social_login.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.json({status:'OK'})
);

// mount user routes at /users
router.use('/users', userRoutes);
router.use('/auth', socialLoginRoutes);

export default router;
