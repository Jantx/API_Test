const express = require('express');
const cors = require('cors');

const app = express();


//Settings 
app.set('port', process.env.PORT || 3000); 

//middlewares

app.use(express.json());
app.use(cors());

//Routes
app.use(require('./routes/employees.js'));


// Starting Server
app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'));
})