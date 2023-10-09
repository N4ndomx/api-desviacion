const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});

app.get('/dev-hours', (req, res, next) => {
	res.sendfile("assets/1a_dev_hours.json");
});

app.get('/proxy-size', (req, res, next) => {
	res.sendfile("assets/1a_proxy_size.json");
});

// app.get('/header', (req, res, next) => {
//   res.sendfile("assets/header.json");
// });

app.listen(port, () =>
	console.log('listening on port ' + port
	));
