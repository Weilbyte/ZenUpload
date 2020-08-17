const IncomingForm = require('formidable').IncomingForm;

exports.default = async function (req, res) {
    res.status(200).send(`${req.method} on upload`);
};