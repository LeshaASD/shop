const mongoose = require('mongoose');
const config = require('./config');

const Category = require('./models/Category');
const Product = require('./models/Product');
const User = require('./models/User');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
    try {
        await db.dropCollection('categories');
        await db.dropCollection('products');
        await db.dropCollection('users');
    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    const [cpuCategory, hddCategory] = await Category.create({
        title: 'CPUs',
        description: 'Central Processor Units'
    }, {
        title: 'HDDs',
        description: 'Hard Disk Drives'
    });

    await Product.create({
        title: 'Intel Core i7',
        price: 300,
        description: 'Very cool processor',
        category: cpuCategory._id,
        image: 'cpu.jpg'
    }, {
        title: 'Seagate 3TB',
        price: 110,
        description: 'Some kinda description',
        category: hddCategory._id,
        image: 'hdd.jpg'
    });

    await User.create({
        username: 'user',
        password: '123',
        role: 'user'
    }, {
        username: 'admin',
        password: 'admin123',
        role: 'admin'
    });

    db.close();
});