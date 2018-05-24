import * as express from 'express';

var router = express.Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /api/hello
 * @group test - Testing query params
 * @param {string} name.query.required - Name of the user
 * @returns {object} 200 - An array of user info
 * @returns {Error} 500 - Unexpected error
 */
router.get('/api/hello', function (req, res, next) {
  let name = req.query.name
  res.json({message: `hello ${name}`});
});

/**
 * This function comment is parsed by doctrine
 * @route GET /api/hello/{name}
 * @group test - Testing query params
 * @param {string} name.path.required - Name of the user
 * @returns {object} 200 - An array of user info
 * @returns {Error} 500 - Unexpected error
 */
router.get('/api/hello/:name', function (req, res, next) {
  let name = req.params.name
  res.json({message: `hello ${name} (from route)`});
});


export default router;