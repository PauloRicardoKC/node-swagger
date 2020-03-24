const express = require('express');
const router = express.Router();
const controller = require('../controllers/car-controller')

/**
 * @swagger
 * /cars:
 *    get:
 *      tags: [Cars] 
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
 * /cars/{carId}:
  *    get:
 *      tags: [Cars]
 *      description: Car by Id.
 *      parameters:
 *        - name: carId
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
 * /cars:
 *    post:
 *      tags: [Cars]
 *      description: Car insertion.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              brand:
 *                type: string
 *              model:
 *                type: string
 *              color:
 *                type: string
 *              price:
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
 * /cars/{carId}:
 *    put:
 *      tags: [Cars]
 *      description: Car update.
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: carId
 *          in: path
 *          require: true
 *        - name: body
 *          in: body
 *          schema:
 *            type: object
 *            properties:
 *              model:
 *                type: string
 *              color:
 *                type: string
 *              price:
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
 * /cars:
 *    delete:
 *      tags: [Cars] 
 *      description: Car delete.
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