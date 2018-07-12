//load environmnet variables

var port = process.env.PORT || 8080;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');

const app = new Koa();
app.use(bodyParser());
//router setting
const router = new Router();
router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, async () => {
    console.log(`Oraclize API server is listening to port ${port}`);
});     