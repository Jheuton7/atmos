const express = require('express');
const path = require('path');
const Mock = require('./mockAPI.js')


let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});


app.get('/info', async (req, res) => {
  let homes = await Mock.API.getHomePlans()
  let lots = await Mock.API.getLots()
  let combintations = await Mock.API.getCombinations()
  res.send({
    homePlans: homes,
    lots: lots,
    combintations: combintations
  })
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../dist/index.html'), function(err) {
     if (err) {
      res.status(500).send(err)
     }
   })
})