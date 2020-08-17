const sites = require('../sites').sites;

async function handleUnwanted(req, res) {
    if (req.method !== "GET") {
        await res.status(405).send(JSON.stringify({
            success: false,
            msg: "Unsupported method.",
        })
      );
      return true;
    };

    return false;
};

exports.default = async function (req, res) {
    const unwanted = await handleUnwanted(req, res);
    if (unwanted) return;

    await res.status(200).send(JSON.stringify({
        success: true, 
        sites: sites
    }));
};