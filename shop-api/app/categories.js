const express = require('express');
const Category = require('../models/Category');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const createRouter = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        Category.find()
            .then(categories => res.send(categories))
            .catch(() => res.sendStatus(500));
    });

    router.post('/', [auth, permit('admin')], (req, res) => {
        const category = new Category(req.body);

        category.save()
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    return router;
};

module.exports = createRouter;