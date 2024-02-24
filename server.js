const express = require('express');
const app = express();
const DAL = require('./DAL');
const config = require('./config');


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

//app.use(middlewareCode);

app.get('/login', (req, res) => {
 //   res.send("Meow");
// res.redirect("/users");
res.render("index");
})

app.post('/login', async (req, res) => {
       let result = await config.testServer(req.body.user, req.body.password, req.body.server, req.body.database);
     if(result === true){
    res.redirect("/users");
   } else if(result === false){
    res.redirect("/login");
   } 
})

app.get('/users', async (req, res) => {
    let customersList = await DAL.getCustomerTable();
    let ordersList = await DAL.getOrdersTable();
    let employeesList = await DAL.getEmployeeTable();
    /*
    getCustomerTable().then(res =>{
      //  console.log(res);
    })*/
    
    res.render("dbData", {customerObject: customersList, ordersObject: ordersList, employeeObject: employeesList});
    
})
/*app.get('/users', userAccess, (req, res) => {
   // res.send("Moo");
    res.render("dbData");
})*/




/*
function middlewareCode(req, res, next){
    console.log("Inside middleware");
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
    next();
}
function userAccess(req, res, next){
    console.log("AUthorization user access");
    next();
}
*/




app.listen(4000);
