const express = require('express');
const axios = require('axios').default;
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb',
};

app.get('/', async (req, res) => {
  const name = await getPersonName();
  await insertPeopleName(name);
  const people = await getPeople();
  res.send(`<html><head><style>table { font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; } th, td { border: 1px solid #dddddd; text-align: left; padding: 8px; } tr:nth-child(even) { background-color: #dddddd; }</style></head><body><h1>Full Cycle Rocks!</h1>${people}</body></html>`);
});

app.listen(PORT, () => {
  console.log('Server started at port ' + PORT);
});

async function getPersonName() {
  const RANDOM = Math.floor(Math.random()*10);
  const response = await axios.get('https://swapi.dev/api/people');
  return response.data.results[RANDOM].name;
}

async function insertPeopleName(name) {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) VALUES ('${name}')`;

  connection.query(sql);
  connection.end();
}

async function getPeople() {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(config);
    const sql = `SELECT id, name FROM people`;

    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        let table = '<table>';
        table += '<tr><th>#</th><th>Name</th></tr>';
        results.forEach(people => {
          table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        });
        table += '</table>';
        connection.end();
        resolve(table);
      }
    });
  });
}
