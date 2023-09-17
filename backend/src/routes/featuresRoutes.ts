import { Router } from "express";
import { features_post, features_get } from '../controllers/featuresController';

const router = Router();


// Retrieve All Features
router.get('/', features_get);
// Add Features
router.post('/', features_post);


// Module Export
export default router;