const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const userID = req.user.id; 
    const queryText = `SELECT * FROM summaries
                        WHERE "user_id" = $1`;
    pool.query(queryText, [userID])
      .then((result) => { res.send(result.rows); })
      .catch((error) => {
        console.log('Error completing the SELECT summaries query!', error);
        res.sendStatus(500);
      });
});

/**
 * POST route
 */
router.post('/newsummary', rejectUnauthenticated, (req, res) => {   
    // SQL query
        const query = `
            INSERT INTO "summaries" (date, summary, user_id)
            VALUES ($1, $2, $3);`;
    pool.query(query, [req.body.date, req.body.summary, req.user.id])
    .then((response) => {
        console.log('POST new summary information', response);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('new summary POST error', error);
        res.sendStatus(500);
    });
    })

/**
 * PUT route
 */

router.put('/newsummary', rejectUnauthenticated, (req, res) => {  
    // SQL query
    const query = `
        UPDATE "summaries" 
        SET date = $1, summary = $2, user_id = $3
        WHERE id = $4
    `;
    // update item in the database
    pool.query(query, [req.body.date, req.body.summary, req.user.id, req.body.id])
        .then((response) => {
            console.log( 'PUT response to update the database', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('There was an error with the PUT request', error);
            res.sendStatus(500);
        });
});

/**
 * DELETE route
 */

router.delete('/newsummary/:id', rejectUnauthenticated, (req, res) => {
    const query = `
        DELETE FROM "summaries"
        WHERE id = $1 AND user_id = $2;
    `;
    console.log('IN DELETE summaryId: ', req.params.id);
    console.log('IN DELETE user_id: ', req.user.id);

    pool.query(query, [req.params.id, req.user.id])
        .then((response) => {
            console.log('This is the summaries database DELETE response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('There is an error in DELETE', error);
            res.sendStatus(500);
        }); 
});


module.exports = router;