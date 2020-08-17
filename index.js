const sites = require('./sites');

const list = require('./api/list');
const upload = require('./api/upload');

exports.requestEntry = (req, res) => {
    switch (req.path) {
        case '/upload':
            upload(req, res);
            break;
        case '/list':
            list(req, res);
            break;
        default:
            res.status(404).send(JSON.stringify({
                success: false,
                msg: `${req.path} is not a valid endpoint.`
            }))
            break;
    };
};
  