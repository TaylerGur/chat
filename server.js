var express = require('express');
var ejs = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var SessionStore = require('express-mysql-session');
var session = require('express-session');

const PORT = 80;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use('/dist', express.static('dist'));



var options_connect = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'chat'
}
var mysql = require('mysql').createConnection(options_connect);
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: new SessionStore(options_connect),
    resave: false
}));



app.post('/api/add_message', jsonParser, function(req, res){
    console.log(req.body);
    mysql.query("INSERT IGNORE INTO messages (dialog_id, author_id, text, date) VALUES('" + req.body.dialog_id + "', '" + req.body.author_id +  "', '" + req.body.text +  "', '" + req.body.date +  "')", function(err, result,field){
   
        if(err) {
            console.log('%%%%%%%%ADD_MESSAGE_ERROR%%%%%%%%%');
            
        }

        if(result) console.log('add message in database');
           res.send(true); 
                        
        
       
    
    });
    // res.send(false);
    
});
app.post('/api/get_dialog', jsonParser, function(req, res){
    mysql.query("SELECT m.text, m.date, m.author_id , u.nickName  FROM messages m INNER JOIN users u ON m.author_id = u.id WHERE dialog_id='" + req.body.id + "' ORDER BY m.date", function(err, result,field){
   
        if(err) {
            console.log('%%%%%%%%GET_DIALOG_ERROR%%%%%%%%%');
            
        }
        if(result && result.length > 0){
    
            res.send(result);
            
 
                        
        }
        else{
            console.log('Cообщений нет!');
            res.send('Cообщений нет!');  
        }
    });

});


app.post('/api/get_dialogs', jsonParser, function(req, res){
    mysql.query("SELECT * FROM dialogs", function(err, result,field){
   
        if(err) {
            console.log('%%%%%%%%GET_DIALOGS_ERROR%%%%%%%%%');
            
        }
        if(result.length > 0){
    
            res.send(result);
            
 
                        
        }
        else{
            console.log('Диалоггов нет!');
            res.send('Диалоггов нет!');  
        }
    });

});
app.get('/api/delete_session', jsonParser, function(req, res){
	req.session.destroy();
	// res.send("сессия удалена");
	res.redirect('/');
});
app.post('/api/get_session', jsonParser, function(req, res){
	if(req.session.user){
		res.send({nameUser: req.session.user.nickName, id: req.session.user.id});
	}
	else{
		res.send(false);
	}
});
app.post('/api/get_user', jsonParser, function(req, res){
	console.log(req.body);
	mysql.query("SELECT * FROM users WHERE nickName='" + req.body.nick + "' AND password='" + req.body.pass + "'", function(err, result,field){
   
        if(err) {
            console.log('%%%%%%%%GET_USER_ERROR%%%%%%%%%');
            
        }

        if(result.length > 0){
            console.log(result[0]);
            req.session.user = result[0];
            res.send({nameUser: req.session.user.nickName, idUser: req.session.user.id, auth: true });
            
 
			            
        }
        else{
        	res.send('Пользователь с таким логином и паролем не найден!');	
        }
    });
    
	// res.send(false);
	
});



app.post('/api/add_user', jsonParser, function(req, res){
	console.log(req.body);
	mysql.query("SELECT * FROM users WHERE nickName='" + req.body.nick + "'", function(err, result,field){
   
        if(err) {
            console.log('%%%%%%%%SAVE_ERROR%%%%%%%%%');
            
        }

        if(result.length > 0){
            console.log('In the database there is already such a nickname');
            console.log(result.length);
            
            res.send("Ник занят!");  
			            
        }
        else{
        	mysql.query("INSERT IGNORE INTO users (nickName, password) VALUES('" + req.body.nick + "','" + req.body.pass + "')", function(err, result,field){
   
		        if(err) {
		            console.log('%%%%%%%%SAVE ERROR%%%%%%%%%');
		        }

		        if(result){
		            
		            res.send('все ок!!');
		            
		        }else{
		            res.send('Что-то пошло не так;(');   
		        }  

		    });
        }
    });
    
	// res.send(false);
	
});

app.get('*', function (req, res) {
  res.render('index.ejs', {url:req.headers.host});
});

// app.get('/', function (req, res) {
//   res.render('index.ejs', {url:req.headers.host});
// });
// app.get('*', function (req, res) {
//   res.redirect('/');
// });
app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
