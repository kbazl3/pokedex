var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    port = 3000,
    mongoURI = 'mongodb://localhost:27017/DatabaseName';

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); // NOTE: tells it to host this static page for us Local through Nodemon.

// app.post('/model', modelCtrl.create);
//
// app.put('/model/:id', modelCtrl.update);
//
// app.delete('/model/:id', modelCtrl.delete);
//
// app.get('/models', modelCtrl.read);


//mongoDB connection
mongoose.set('debug', true);
// mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
    console.log('Connected to mongo at: ', mongoURI);
});

app.listen(port, function() {
    console.log('listening on port ', port);
});
