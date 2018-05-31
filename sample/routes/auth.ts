import * as express from 'express';
import { IPerson, SamplePerson } from '../@types/api/IPerson';
import { IAddress, SampleAddress } from '../@types/api/IAddress';
import { AddressType } from '../@types/api/AddressType';

var router = express.Router();


/**
 * @typedef AuthorizationResponse
 * @property {string} message.required
 * @property {string} user.required
 */


/**
 * This method tests working with headers
 * @route GET /api/authorization
 * @group Authorization
 * @param {string} authorization.header.required - Name of the user
 * @returns {AuthorizationResponse} 200 - Succesfull response
 * @returns {object} 401 - Unauthorized error
 */
router.get('/api/authorization', function (req, res, next) {
  let name = req.headers.authorization;
  res.json({ message: `You are authorized as ${name}`, user: name });
});


/**
 * This method description of error responses
 * @route GET /api/authorization/error
 * @group Authorization
 * @param {string} authorization.header.required - Name of the user
 * @returns {IMessageResponse} 200 - Succesfull response
 * @returns {IMessageResponse} 401- Unauthorized error
 */
router.get('/api/authorization/error', function (req, res, next) {
  let name = req.headers.authorization;
  throw new Error(`user ${name} unauthorized`);
});


export default router;
