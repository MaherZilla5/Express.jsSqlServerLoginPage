/*const config = {
    user: 'matt',
    password: '12345',
    server: 'LOCALHOST\\SQLEXPRESS',
    port: 1433,
    database: 'Northwind',
    options: {
        trustServerCertificate: true
    }
} */

const sql = require('mssql');


const config = {
    user: '',
    password: '',
    server: '',
    port: 1433,
    database: '',
    options: {
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS'
    }
}

async function testServer(username, password, server, database){
    config.user = username;
   config.password = password;
     config.server = server;
   config.database = database;
      try{
    let dbConnect = await sql.connect(config);
    console.log("Sql server connection success");
  
   
   return true;
 }catch(err){
    console.log(err);
    return false;
 }
    }

    

module.exports = {config, testServer};

