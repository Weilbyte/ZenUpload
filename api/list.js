const sites = require('../sites').sites;

function handleUnwanted(req, res) {
    if (req.method !== "GET") {
        res.status(405).send(
        JSON.stringify({
          success: false,
          msg: "Unsupported method.",
        })
      );
      return true;
    };

    return false;
};

exports.default = function (req, res) {
    const unwanted = handleUnwanted(req, res);
    if (unwanted) return;

    res.status(200).send(JSON.stringify({
        success: true, 
        sites: sites
    }));
};