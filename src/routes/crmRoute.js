import {
    addNewContact,
    getContacts,
    getContactWithId,
    removeContact,
    updateContact
} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        // .get((req, res, next) => {
        //middleware
        //     console.log(`Request from ${req.originalUrl}`);
        //     console.log(`Request from ${req.method}`);
        //     next();
        // },(req, res, next) => {
        //     res.send(`get request successful!`);
        // })
        .get((req, res, next) => {
            console.log(`Request from ${req.originalUrl}`);
            console.log(`Request from ${req.method}`);
            next();
        },getContacts)

        app.route('/contact/:contactId')
        .get(getContactWithId)

        // .post((req, res)=>
        // res.send(`post send successful`));

        //POST end point
        .post(addNewContact);

    app.route('/contact/:contactId')
        .put(updateContact)
        // .put((req, res) =>
        //     res.send(`PUT request successful!`)
        // )
        // .delete((req, res)=>
        //     res.send(`DELETE send successful`))

        .delete(removeContact)
};

export default routes;