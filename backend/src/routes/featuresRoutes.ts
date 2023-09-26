import { Router } from "express";
import {
    features_post,
    features_put,
    features_get,
    specificFeature_get
} from '../controllers/featuresController.js';

const router = Router();


// Retrieve All Features
router.get('/', features_get);
// Retrieve specific Feature
router.get('/features/:route', specificFeature_get);
// Add Features
router.post('/', features_post);
// Edit Features
router.put('/:id', features_put);


// Module Export
export default router;