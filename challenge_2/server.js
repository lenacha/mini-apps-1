var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/upload_text', (req, res) => {
  var data = req.body.filePicker;
  var data1 = JSON.parse(data);
  var csv = parsing(data1) +'\n'+ parsingNested(data1);
  res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(csv);
}); 

app.post('/upload_file', upload.single('filePicker'), function (req, res, next) {
  var data = req.file.buffer;
  data = String(data);
  var parsedData = JSON.parse(data);
  var csv = parsing(parsedData) +'\n'+ parsingNested(parsedData);
  res.setHeader('Content-disposition', 'attachment; filename=testing.csv');
  res.set('Content-Type', 'text/csv');
  res.status(200).send(csv);
})

var parsing = (data) => {
  var tagStr = '';
  for(var key in data) {
    if(key === 'children') {
      break;
    }
    if(key === 'firstName') {
      tagStr += key;
    } else {
      tagStr += ',' + key;
    }
  }
  return tagStr;
};

var parsingNested = (datas) => {
  var result = [];
  var func = (data) => {
    var str = '';
    for(var key in data) {
      if(key === 'children') {
        break;
      }
      if(key === 'firstName') {
        str += data[key];
      } else {
        str += ',' + data[key];
      }
    }
    result.push(str);
    for(var i = 0; i < data.children.length; i++) {
      func(data.children[i]);
    }
  }
  func(datas);
  return result.join('\n');
}


app.listen(port, () => {
  console.log(`Port ${port}: success`);
})