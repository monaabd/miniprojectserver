const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);    

app.set('view engine','pug');
app.set('views','./views');
app.use(express.static(__dirname+'/public'));


app.get('/',(req,res)=> {
   res.render('resultatraportering'); 
    });
app.get('/404',function(req,res){
     
    res.render('404')
   });
app.get('/resultat',function(req,res){
     
    res.render('resultat')
   });


io.on('connection', socket => {
   
    socket.on('vote update', vote => {
        console.log('kkk');
        io.emit('vote update',vote);
    });
});

http.listen(3001, () => {
    console.log ("Up and running at 3001");
});