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
app.get('/resultatraportering',(req,res)=> {
   res.render('resultatraportering'); 
    });

app.get('/resultat',function(req,res){
     
    res.render('resultat')
   });
app.get('*',function(req,res){
    
    res.render('404')
   });


io.on('connection', socket => {
   
    socket.on('vote update', vote => {
        console.log('vote'+vote);
        io.emit('vote update',vote);
    });
});

http.listen(3002, () => {
    console.log ("Up and running at 3002");
});