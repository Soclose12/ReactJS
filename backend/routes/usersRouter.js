import { express } from "express";

import {
   getUsers,
   Register,
   Login,
   Logout
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/Refresh.js";

const router = express.router();

router.get('/', verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken);

export default router;
