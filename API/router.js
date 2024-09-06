const { Router } = require("express");
const sequelize = require('../functions/database');

sequelize.sync().then(() => console.log(`\n\t... Database is ready to use ...\n`));

const API = Router();

const GET = require("./routes/get");
const POST = require("./routes/post");
const PUT = require("./routes/put");
const DELETE = require("./routes/delete");


/**
 * POST AN APP
 */

API.post('/apps', POST)


/**
 * FIND ONE/ALL APP(S)
 */

API.get('/apps', GET.all);

API.get('/apps/:id', GET.one);

/**
 * UPDATE AN APP
 */

API.put('/apps/:id', PUT);

/**
 * DELETE AN APP
*/
API.delete('/apps/:id', DELETE);


module.exports = API;