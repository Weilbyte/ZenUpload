const list = require('./api/list').default;
const upload = require('./api/upload').default;

exports.requestEntry = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    switch (req.path) {
        case '/upload':
            await upload(req, res);
            break;
        case '/list':
            await list(req, res);
            break;
        default:
            await res.status(404).send(JSON.stringify({
                success: false,
                msg: `${req.path} is not a valid endpoint.`
            }))
            break;
    };
};
  