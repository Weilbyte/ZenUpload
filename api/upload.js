exports.default = function (req, res) {
    res.status(200).send(`${req.method} on upload`);
};