const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");



const db = require('./config/connection');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "..", 'client/dist')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", 'client/dist/index.html'))
  })
}


db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});

