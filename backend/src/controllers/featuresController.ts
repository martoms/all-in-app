import express from 'express';
import Feature from "../models/Feature";

// Add Features
const features_post = (req: express.Request, res: express.Response) => {
    const reqbody = req.body;
    
    Feature.create(reqbody)
    .then((newFeature) => res.status(200).json(newFeature))
    .catch(err => res.json(err));
};

// Retrieve all Features
const features_get = (req: express.Request, res: express.Response) => {
    Feature.find({isFeatured: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};


export { features_post, features_get };