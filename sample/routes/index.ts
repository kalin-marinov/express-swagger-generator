import * as express from 'express';
import { IPerson, SamplePerson } from '../@types/api/IPerson';
import { IAddress, SampleAddress } from '../@types/api/IAddress';
import { AddressType } from '../@types/api/AddressType';

var router = express.Router();

/**
 * This method returns all people
 * @route GET /api/people
 * @group People - Information about them people
 * @returns {IPerson[]} 200 - An array of all the people
 * @returns {object} 500 - Unexpected error
 */
router.get('/api/people', function (req, res, next) {
  let name = req.query.name
  res.json([SamplePerson, SamplePerson]);
});

/**
 * This method gives information about specific person
 * @route GET /api/people/{name}
 * @group People - Information about them people
 * @param {string} name.path.required - Name of the person
 * @returns {IPerson} 200 - Person data
 * @returns {object} 500 - Unexpected error
 */
router.get('/api/people/:name', function (req, res, next) {
  let name = req.params.name
  res.json({ firstname: name, lastname: "doe", born: new Date() } as IPerson);
});


/**
 * This function comment is parsed by doctrine
 * @route GET /api/people/{name}/addresses
 * @group People Addresses - For the addresses of the people
 * @param {string} name.path.required - Name of the person
 * @returns {IAddress} 200 - Gets specific address of a person
 * @returns {object} 500 - Unexpected error
 */
router.get('/api/people/:name/addresses', function (req, res, next) {
  let addressType = req.params.addressType;
  res.json([SampleAddress]);
});

/**
 * Gets the address of a given person by given type
 * @route GET /api/people/{name}/addresses/{addressType}
 * @group People Addresses - For the addresses of the people
 * @param {string} name.path.required - Name of the person
 * @param {AddressType} addressType.path.required - Address type
 * @returns {IAddress[]} 200 - Gets specific address of a person
 * @returns {object} 500 - Unexpected error
 * @security Bearer
 */
router.get('/api/people/:name/addresses/:addressType', function (req, res, next) {
  let addressType = req.params.addressType;
  res.json([{ number: 10, street: "random str", type: addressType } as IAddress]);
});


/**
 * This function comment is parsed by doctrine
 * @route POST /api/people
 * @group People - Information about them people
 * @param {IPerson} person.body.required - Information for the person
 * @returns {IPerson} 201 - An array of user info
 * @returns {object} 500 - Unexpected error
 */
router.post('/api/people', function (req, res, next) {
  let personData = req.body as IPerson;
  res.status(201).json(personData);
});


/**
 * Override all people
 * @route PUT /api/people
 * @group People - Information about them people
 * @param {IPerson[]} people.body.required - Information for the person
 * @returns {IMessageResponse} 200 - An array of people
 * @returns {object} 500 - Unexpected error
 */
router.put('/api/people', function (req, res, next) {
  let people = req.body as IPerson[];
  res.json({ message: `Created ${people.length} entries` });
});

/**
 * This function comment is parsed by doctrine
 * @route DELETE /api/people/{name}
 * @group People - Information about them people
 * @param {string} name.path.required - Name of the person
 * @returns {} 204 - Sucess
 * @returns {Error} 500 - Unexpected error
 */
router.delete('/api/people/:name', function (req, res, next) {
  res.status(204).end();
});



export default router;
