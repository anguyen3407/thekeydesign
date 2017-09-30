module.exports = {
    getProductBasic:(req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.get_basic([params.id])
        .then( products => res.status(200).send(products[0]))
        .catch( (err) => {
            res.status(500).send(err);
        })
    },

    getProductStandard:(req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.get_standard([params.id])
        .then( products => res.status(200).send(products[1]))
        .catch( (err) => {
            res.status(500).send(err);
        })
    },

    getProductTwilight:(req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.get_twilight([params.id])
        .then( products => res.status(200).send(products[2]))
        .catch( (err) => {
            res.status(500).send(err);
        })
    },

    getProductDrone:(req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.get_drone([params.id])
        .then( products => res.status(200).send(products[3]))
        .catch( (err) => {
            res.status(500).send(err);
        })
    },

    getProductHouseCleaning:(req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.get_houseCleaning([params.id])
        .then( products => res.status(200).send(products[3]))
        .catch( (err) => {
            res.status(500).send(err);
        })
    }
    }
