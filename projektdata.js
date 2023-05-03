const express = require('express')
const { Pool } = require('pg')

const app = express()
const port = 3000

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
    client.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

//Starter serveren i porten
app.listen(port, () => {
  console.log(`Appen kører på http://localhost:${port}`);
});
