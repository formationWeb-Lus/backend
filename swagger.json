{
  "openapi": "3.0.0",
  "info": {
    "title": "GPS Tracking API",
    "version": "1.0.0",
    "description": "API pour suivre les positions des véhicules en RDC"
  },
  "servers": [
    {
      "url": "https://backend-ojdz.onrender.com/api",
      "description": "Serveur Render"
    }
  ],
  "paths": {
    "/positions": {
      "post": {
        "summary": "Ajouter une nouvelle position GPS",
        "tags": ["Positions"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "vehiculeId": {
                    "type": "string",
                    "example": "mercedeces"
                  },
                  "latitude": {
                    "type": "number",
                    "example": 23.33
                  },
                  "longitude": {
                    "type": "number",
                    "example": 10.365
                  },
                  "vitesse": {
                    "type": "number",
                    "example": 60.6
                  }
                },
                "required": ["vehiculeId", "latitude", "longitude", "vitesse"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Position enregistrée avec succès"
          },
          "400": {
            "description": "Requête invalide"
          },
          "500": {
            "description": "Erreur serveur"
          }
        }
      },
      "get": {
        "summary": "Obtenir toutes les positions GPS",
        "tags": ["Positions"],
        "responses": {
          "200": {
            "description": "Liste des positions"
          },
          "500": {
            "description": "Erreur serveur"
          }
        }
      }
    }
  },
  "tags": [
    {
      "name": "Positions",
      "description": "Opérations liées aux positions des véhicules"
    }
  ]
}
