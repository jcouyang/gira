var express = require("express");
var app = express();

/// Include the express body parser
app.configure(function () {
  app.use(express.bodyParser());
});

app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.use("/stylesheets", express.static(__dirname + '/stylesheets'));
app.use('/images',express.static(__dirname, '/images', '/images/spinners'));
app.use('/',express.static(__dirname, '/javascripts'));

var fs = require('fs');
var path = require('path');

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

app.get('/', function (req, res){
    res.render('index.html');
});

app.get('/uploads/images/:file', function (req, res){
    file = req.params.file;
    var img = fs.readFileSync(__dirname + "/uploads/images/" + file);
    res.writeHead(200, {'Content-Type': 'image/jpg', 'Access-Control-Allow-Origin': '*'});
    res.end(img, 'binary');

});

/// Post files
app.post('/upload', function(req, res) {

console.log(req);

    var internalImageName = createUUID();
    var extName = path.extname(req.files.pic.name).toLowerCase();

    var tempPath = req.files.pic.path,
        targetPath = path.resolve('./uploads/' + internalImageName + '.' +extName);
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            res.send(internalImageName, 200);
            console.log("Upload completed!");
        });

//    fs.readFile(req.files.pic.path, function (err, data) {
//
//        console.log(data);
//
//        var internalImageName = createUUID();
//
//        var newPath = __dirname + "/uploads/images/" + internalImageName;
//
//        fs.writeFile(newPath, data, function (err) {
//
//            res.write(internalImageName);
//            res.end();
//
//        });
//    });
});

app.listen(8080);
