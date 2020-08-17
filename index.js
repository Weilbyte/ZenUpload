const sites = require('./sites');

const list = require('./api/list');
const upload = require('./api/upload');


/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.requestEntry = (req, res) => {
    switch (req.path) {
        case '/upload':
            return upload(req, res);
            break;
        case '/list':
            return list(req, res);
            break;
        default:
            res.status(404).send(JSON.stringify({
                success: false,
                msg: `${req.path} is not a valid endpoint.`
            }))
            break;
    };
};
  