const config = require('./config');
const sql = require('mssql');


const testConfig = {
    user: 'matt',
    password: '12345',
    server: 'LOCALHOST\\SQLEXPRESS',
    port: 1433,
    database: 'Northwind',
    options: {
        trustServerCertificate: true
    }
} 


const getCustomerTable = async() => {
try {
       let dbConnect = await sql.connect(config);
             let customerList = dbConnect.request().query('SELECT c.ContactName, c.ContactTitle, c.City FROM customers AS c');
             return (await customerList).recordset;

    } catch(err){
        console.log("Does not have access to the Customer Table");
        return "Does not have access to the Customer Table";
    }
    
}

const getOrdersTable = async() => {
    try{
        let dbConnect = await sql.connect(config);
        let ordersList = dbConnect.request().query('SELECT o.OrderID, o.CustomerID, o.ShipAddress FROM orders AS o;');
        return(await ordersList).recordset;
    }catch(err){
        console.log("Does not have access to the Orders table");
        return "Does not have access to the Orders table";
    }

}

const getEmployeeTable = async() => {
    try {
        let dbConnect = await sql.connect(config);
        let employeeList = dbConnect.request().query('SELECT e.FirstName, e.LastName, e.Title,e.City FROM Employees as e;');
        return (await employeeList).recordset;
    } catch(err){
       console.log("Does not have access to the Employees table");
        return "Does not have access to the Employees table";
    }
}



module.exports = {getCustomerTable, getOrdersTable, getEmployeeTable};