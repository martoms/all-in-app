import { Router } from "express";
import { features_post, features_put, features_get } from '../controllers/featuresController';

const router = Router();


// Retrieve All Features
router.get('/', features_get);
// Add Features
router.post('/', features_post);
// Edit Features
router.put('/:id', features_put);


// Module Export
export default router;