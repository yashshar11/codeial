const express = require('express');
const app=express();

const port=8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets')); //to acess the assets
app.use(expressLayouts);//using the layout//

//extract style and scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//use express router

app.use('/',require('./routes'));

//set up view engine

app.set('view engine','ejs');
app.set('views','./views')



app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is runningon port : ${port}`);
});