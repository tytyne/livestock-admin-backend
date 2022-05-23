import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'RiseoNigeria Documentation',
      version: '1.0.0',
      description: 'Welcome to RiseoNigeria',
      servers: ['https://localhost:'],
    },
  },
  apis: ['docs/*.js','docs/controllers/*.js','docs/data/*.js','docs/data/*.yml','docs/controllers/*.yml'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;