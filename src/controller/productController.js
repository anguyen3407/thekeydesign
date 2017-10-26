module.exports = {

    scheduleOrder: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const {firstName, lastName, email_address, billing_address, phone_number,basic_staging_package, standard_photography, twilight_photography, drone_photography, house_cleaning, city, state, zip, street_address} = req.body;
        dbInstance.schedule_Order([firstName, lastName, email_address, billing_address, phone_number,basic_staging_package, standard_photography, twilight_photography, drone_photography, house_cleaning, city, state, zip, street_address])
        .then(products => res.status(200).send(products[0]))
                .catch( (err) => {
                    console.log('schedule' ,err)
                    res.status(500).send(err);
        })
    },

  
    removeItem: (req,res,next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
            dbInstance.deleteOrder([id]).then(() => {
            dbInstance.get_invoice().then(invoices=> {
                res.status(200).send(invoices);
              }).catch((err) => (console.log(err)))




        })
    }

    }


