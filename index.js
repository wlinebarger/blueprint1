const Express = require('express')
const Exphbs = require('express-handlebars');
const App = Express();

require('dotenv').config();

/*const fs = require('fs');tell
const requestBuilder = require('./middleware/commercetools').requestBuilder;
const client = require('./middleware/commercetools').client;
const await = require('asyncawait/await');
const async = require('asyncawait/async');
const bodyParser = require('body-parser');
const request = require('request');;
*/
const projectKey = process.env.PROJECT_KEY;
/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.helloWorld = (req, res) => {
  // Example input: {"message": "Hello!"}
  if (req.body.message === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('No message is defined!');
  } else {
    // Everything is okay.
    console.log(req.body.message);
    //res.status(200).send('Success: ' + req.body.message);
    res.status(200).send('Success2:' + projectKey);
  }
};
