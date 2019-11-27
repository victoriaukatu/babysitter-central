const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

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

module.exports = router;