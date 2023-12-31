import express from 'express';
import Feature from "../models/Feature";

// Add Features
const features_post = (req: express.Request, res: express.Response) => {
    const reqbody = req.body;
    
    Feature.create(reqbody)
    .then((newFeature) => res.status(200).json(newFeature))
    .catch(err => res.json(err));
};

// Edit Features
const features_put = (req: express.Request, res: express.Response) => {
    const id = req.params.id;
    const reqbody = req.body;
    Feature.findOneAndUpdate( { _id: id }, reqbody, { new: true })
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

// Retrieve all Features
const features_get = (req: express.Request, res: express.Response) => {
    Feature.find({isFeatured: true})
    .then(result => res.status(200).json(result))
    .catch(err => res.json(err));
};

// Retrieve Specific Feature
const specificFeature_get = (req: express.Request, res: express.Response) => {

    const route = req.params.route;

    Feature.find({route})
    .then(result => {
        const title = result[0].title
        const description = result[0].description
        res.status(200).json({ title, description })
    })
    .catch(err => res.json(err));
};


export {
    features_post,
    features_put,
    features_get,
    specificFeature_get
};