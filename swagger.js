const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GPS Tracking API',
      version: '1.0.0',
      description: 'API pour suivre les positions des véhicules en RDC'
    },
    servers: [
      {
        url: 'https://backend-ojdz.onrender.com/api',
        description: 'Serveur local'
      }
    ]
  },
  apis: ['./routes/*.js'], // pour lire les commentaires dans les routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
