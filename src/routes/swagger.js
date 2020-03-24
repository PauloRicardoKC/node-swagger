const express = require('express');
const router = express.Router();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  apis: ['./src/routes/*.js'],
  swaggerDefinition: {
    info: {     
      swagger: '2.0',
      title: 'Cars API',
      description: 'Cars API with autogenerated swagger doc',
      version: '1.0.0',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }      
    },
  }, 
  tags: [
    {
      name: 'Brands',
      description: 'API for manage brands in the system'
    },
    {
      name: 'Cars',
      description: 'API for manage cars in the system'
    }
  ],    
};

const swaggerDocs = swaggerJsDoc(options);
console.log(swaggerDocs)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;