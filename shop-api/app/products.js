const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const Product = require('../models/Product');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');

const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = () => {
    // Product index
    router.get('/', (req, res) => {
        Product.find().populate('category')
            .then(results => res.send(results))
            .catch(() => res.sendStatus(500));
    });

    // Product create
    router.post('/', [auth, permit('admin'), upload.single('image')], (req, res) => {
        const productData = req.body;

        if (req.file) {
            productData.image = req.file.filename;
        } else {
            productData.image = null;
        }

        const product = new Product(productData);

        product.save()
            .then(result => res.send(result))
            .catch(error => res.status(400).send(error));
    });

    // Product get by ID
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        db.collection('products')
            .findOne({_id: new ObjectId(req.params.id)})
            .then(result => {
                if (result) res.send(result);
                else res.sendStatus(404);
            })
            .catch(() => res.sendStatus(500));
    });

    return router;
};

module.exports = createRouter;