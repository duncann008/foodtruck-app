const express = require('express');
const pool = require('../modules/pool');
const contactRouter = express.Router();

/**
 * GET route template
 */
contactRouter.get('/:id', (req, res) => {
    const query = `SELECT * FROM "contact_info" WHERE "user_id" = $1`;
    const values = req.params.id;

    pool.query(query, [values])
        .then( result => {
        res.send(result.rows);
        })
        .catch(err => {
        console.log('ERROR: GET Contact Info', err);
        res.sendStatus(500)
        })

});

/**
 * POST route template
 */
contactRouter.post('/', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "contact_info" ("first_name", "last_name", "phone_number", "email")
  VALUES ($1, $2, $3, $4)
  RETURNING "id";`

  const sqlValues = [
      req.body.first_name, req.body.last_name, req.body.phone_number, req.body.email
  ]

  pool.query(sqlText, sqlValues)
  .then(result => {
    console.log('Contact Info Added:', result.rows[0].id);
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});


module.exports = contactRouter;