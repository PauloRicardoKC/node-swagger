const express = require('express');
const router = express.Router();
const controller = require('../controllers/brand-controller')

/**
 * @swagger
 * /brands:
  *    get:
 *      tags: [Brands]
 *      description: List of the cars.
 *      responses:
 *        200:
 *          description: Successful response.
 *        500: 
 *          description: Failed to process your request.
 */
router.get('/', controller.get );

/**
 * @swagger
 * /brands/{brandId}:
  *    get:
 *      tags: [Brands]
 *      description: Brand by Id.
 *      parameters:
 *        - name: brandId
 *          in: path
 *          require: true
 *      responses:
 *        200:
 *          description: Successful response.
 *        500: 
 *          description: Failed to process your request.
 */
router.get('/:id', controller.getById );

/**
 * @swagger
 * /brands:
 *    post:
 *      tags: [Brands]
 *      description: Brand insertion.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              country:
 *                type: string
 *      responses:
 *        201:
 *          description: Successful response.
 *        500: 
 *          description: Failed to process your request.
 */
router.post('/', controller.post);

/**
 * @swagger
 * /brands/{brandId}:
 *    put:
 *      tags: [Brands]
 *      description: Brand update.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: brandId
 *          in: path
 *          require: true
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              country:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful response.
 *        500: 
 *          description: Failed to process your request.
 */
router.put('/:id', controller.put);

/**
 * @swagger
 * /brands:
 *    delete:
 *      tags: [Brands]
 *      description: Brand delete.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *      responses:
 *        200:
 *          description: Successful response.
 *        500: 
 *          description: Failed to process your request.
 */
router.delete('/', controller.delete);

module.exports = router;