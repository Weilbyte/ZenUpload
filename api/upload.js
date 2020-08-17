const fs = require('fs');
const os = require('os');
const path = require('path');
const Busboy = require('busboy');

async function handleUnwanted(req, res) {
    if (req.method !== "POST") {
      res.statusCode = 405
      await res.send(
        JSON.stringify({
          success: false,
          msg: "Unsupported method.",
        })
      )
      return true
    }

    if (req.headers['content-type'] === undefined || !req.headers["content-type"].includes("multipart/form-data;")) {
        res.statusCode = 400
        await res.send(
          JSON.stringify({
            success: false,
            msg: "Unsupported Content-Type.",
          })
        )
        return true
    }

    return false
};

async function checkData(data, res) {
    res.status(200).send(JSON.stringify({
        success: true, 
        data: data
    }));
};

exports.default = async function (req, res) {
    const data = {fields : {}, file: undefined, fileWrite: undefined}; 

    const unwanted = await handleUnwanted(req, res);
    if (unwanted) return;

    const busboy = new Busboy({ headers: req.headers });
    const tmpdir = os.tmpdir();

    busboy.on('field', (fieldname, val) => {
        data.fields[fieldname] = val;
    });

    busboy.on('file', (fieldname, file, filename) => {
        if (fieldname === 'image') {
            const filePath = path.join(tmpdir, filename);
            data.file = filePath;

            const wStream = fs.createWriteStream(filePath);
            file.pipe(wStream);

            const promise = new Promise((resolve, reject) => {
                file.on('end', () => {
                    wStream.end();
                });
                wStream.on('finish', resolve);
                wStream.on('error', reject);
            });
            data.fileWrite = promise;
        };
    });

    await checkData(data, res);
};