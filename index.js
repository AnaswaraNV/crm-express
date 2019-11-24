import express from 'express';
import routes from "./src/routes/crmRoute";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);
//import static images
app.use(express.static('public/images'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running at ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running at ${PORT}`)
);