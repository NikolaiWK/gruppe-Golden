const express = require('express')
const cors = require('cors');
const { Pool } = require('pg')

const app = express()
const port = 3000

app.use(cors({
  origin: '*'
}));

//Her opretter jeg en databasepool 
const pool = new Pool({
  user: 'jendnhkx',
  host: 'hattie.db.elephantsql.com',
  database: 'jendnhkx',
  password: 'kHD09PXFYEXafjytmgM5-s6fWQAMhqr5',
  port: 5432,
});

//Det her er en mappe hvor serveren finder nogle statiske filer
app.use(express.static(__dirname));

//Her henter vi dataen fra databasen og sender den som JSON
app.get('/alkohol', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM alkohol');
    const rows = result.rows;
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

// Maddatabasen
app.get('/madvarer', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM madvarer');
    const rows = result.rows;
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

// Streaming
app.get('/streaming', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM streaming');
    const rows = result.rows;
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});


// Transport
app.get('/transport', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM transport');
    const rows = result.rows;
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

// Gennemsnit
app.get('/gennemsnit', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM gennemsnit');
    const rows = result.rows;
    res.json(rows);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});


//Starter serveren i porten
app.listen(port, () => {
  console.log(`Appen kører på http://localhost:${port}`);
});
