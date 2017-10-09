module.exports = {
//     getProductBasic:(req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { params } = req;
//         dbInstance.get_basic([params.id])
//         .then( products => res.status(200).send(products[0]))
//         .catch( (err) => {
//             res.status(500).send(err);
//         })
//     },

//     getProductStandard:(req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { params } = req;
//         dbInstance.get_standard([params.id])
//         .then( products => res.status(200).send(products[1]))
//         .catch( (err) => {
//             res.status(500).send(err);
//         })
//     },

//     getProductTwilight:(req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { params } = req;
//         dbInstance.get_twilight([params.id])
//         .then( products => res.status(200).send(products[2]))
//         .catch( (err) => {
//             res.status(500).send(err);
//         })
//     },

//     getProductDrone:(req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { params } = req;
//         dbInstance.get_drone([params.id])
//         .then( products => res.status(200).send(products[3]))
//         .catch( (err) => {
//             res.status(500).send(err);
//         })
//     },

//     getProductHouseCleaning:(req, res, next) => {
//         const dbInstance = req.app.get('db');
//         const { params } = req;
//         dbInstance.get_houseCleaning([params.id])
//         .then( products => res.status(200).send(products[3]))
//         .catch( (err) => {
//             res.status(500).send(err);
//         })
//     },
// //database calls always returns an array
//     addProducts:(req,res,next) => {
//         const dbInstance = req.app.get('db');
//         const {user_id, product_id} = req.body;
//         dbInstance.getOrderCart([user_id])
//         .then(order => {
//             if(order[0]){
//                 dbInstance.check_dups([product_id,order[0].id]).then(duplicate => {
//                     if (duplicate[0]){
//                         dbInstance.get_cart([order[0].id]).then(cart => {
//                             res.status(200).send(cart);
//                         })
//                     }
//                     else {
//                         dbInstance.addToCart([product_id, order[0].id]).then(() => {
//                             dbInstance.get_cart([order[0].id]).then(cart => {
//                                 res.status(200).send(cart);
//                             })
//                         })
//                     }
//                 })
//             }
//             else {
//                 dbI
//             }
//         })
//     },


    scheduleOrder: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {basic_staging_package, standard_photography, twilight_photography, drone_photography, house_cleaning, city, state, zip, street_address} = req.body;
        dbInstance.schedule_Order([basic_staging_package, standard_photography, twilight_photography, drone_photography, house_cleaning, city, state, zip, street_address])
        .then(products => res.status(200).send(products[0]))
                .catch( (err) => {
                    res.status(500).send(err);
            
            // if(order[0]){
            //     dbInstance.check_dups([product_id,order[0].id]).then(duplicate => {
            //         if (duplicate[0]){
            //             dbInstance.get_cart([order[0].id]).then(cart => {
            //                 res.status(200).send(cart);
            //             })
            //         }
            //         else {
            //             dbInstance.addToCart([product_id, order[0].id]).then(() => {
            //                 dbInstance.get_cart([order[0].id]).then(cart => {
            //                     res.status(200).send(cart);
            //                 })
            //             })
            //         }
            //     })
            // }
            // else {
            // }
        })
    }

    }


