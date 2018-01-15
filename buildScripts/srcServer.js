import path from 'path';
import open from 'open';
import express from 'express';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.table(err);
    } else {
        open('http://localhost:' + port);
    }
});
