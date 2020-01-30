const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/lista zwierząt', function(req,res){
    res.send("ok!");
})
app.delete('/owce/:id/:inneid', function(req,res){
    res.json(req.params);
})
app.post('/', function(req,res){
    const zwierze = {
    color: req.body.color,
    name: req.body.name,
    size: req.body.size,
    health: Sick
}

})

app.listen(2137, ()=>console.log('serwer jest gotowy: http://localhost:2137'));
