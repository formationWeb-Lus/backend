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
        url: 'http://localhost:3000',
        description: 'Serveur local'
      }
    ],
    components: {
      schemas: {
        Position: {
          type: 'object',
          properties: {
            vehiculeId: {
              type: 'string',
              example: 'toyota'
            },
            latitude: {
              type: 'number',
              example: -4.325
            },
            longitude: {
              type: 'number',
              example: 15.322
            },
            vitesse: {
              type: 'number',
              example: 60.2
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
              example: '2025-06-28T08:00:00Z'
            }
          }
        },
        Historique: {
          type: 'object',
          properties: {
            vehicule: { type: 'string', example: 'toyota' },
            date: { type: 'string', example: '2025-06-28' },
            distance_km: { type: 'number', example: 32.6 },
            start_time: { type: 'string', format: 'date-time' },
            end_time: { type: 'string', format: 'date-time' },
            total_stops: { type: 'integer', example: 6 },
            total_stop_time: { type: 'string', example: '32 minutes' },
            stops: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  latitude: { type: 'number', example: -4.32 },
                  longitude: { type: 'number', example: 15.31 },
                  quartier: { type: 'string', example: 'Gombe' },
                  avenue: { type: 'string', example: 'Avenue du Commerce' },
                  duration_seconds: { type: 'number', example: 480 }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // assure-toi que le bon chemin est utilisé
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
