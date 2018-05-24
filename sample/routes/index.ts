import * as express from 'express';
import { IHelloResponse } from '../@types/api/IHelloResponse';
import { IPerson } from '../@types/api/IPerson';

var router = express.Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /api/hello
 * @group test - Testing query params
 * @param {string} name.query.required - Name of the user
 * @returns {IHelloResponse} 200 - Succesfull response with a message
 * @returns {object} 500 - Unexpected error
 */
router.get('/api/hello', function (req, res, next) {
  let name = req.query.name
  res.json({ message: `hello ${name}` } as IHelloResponse);
});

/**
 * This function comment is parsed by doctrine
 * @route GET /api/hello/{name}
 * @group test - Testing query params
 * @param {string} name.path.required - Name of the user
 * @returns {object} 200 - Successfull respose with a message
 * @returns {object} 500 - Unexpected error
 */
router.get('/api/hello/:name', function (req, res, next) {
  let name = req.params.name
  res.json({ message: `hello ${name} (from route)` });
});



/**
 * This function comment is parsed by doctrine
 * @route POST /api/people
 * @group test - Testing request body
 * @param {IPerson} person.body.required - Information for the person
 * @returns {IHelloResponse} 201 - An array of user info
 * @returns {object} 500 - Unexpected error
 */
router.post('/api/people', function (req, res, next) {
  let personData = req.body as IPerson;
  res.status(201).json({ message: `created person ${personData.firstname} ${personData.lastname}` } as IHelloResponse);
});


/**
 * This function comment is parsed by doctrine
 * @route GET /api/people
 * @group test - Testing request body
 * @returns {IPerson[]} 200 - An array of people
 * @returns {object} 500 - Unexpected error
 */
router.get('/api/people', function (req, res, next) {
  let personData = req.body as IPerson;
  res.json([{ firstname: 'name', lastname: 'some name', born: new Date(), addresses: [] }] as IPerson[]);
});

/**
 * This function comment is parsed by doctrine
 * @route PUT /api/people
 * @group test - Testing request body
 * @param {IPerson[]} people.body.required  All the people
 * @returns {IHelloResponse} 200 - Sucess
 * @returns {object} 500 - Unexpected error
 */
router.put('/api/people', function (req, res, next) {
  let people = req.body as IPerson[];
  res.status(201).json({ message: `you have added ${people.length} people` } as IHelloResponse);
});



export default router;
