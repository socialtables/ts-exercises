import AJV from "ajv";
const ajv = new AJV();

const userSchema = {
    type: 'object',
    additionalProperties: false,
    required: ['firstName', 'lastName'],
    properties: {
      firstName: {
          type: 'string',
          minLength: 1
      },
      lastName: {
        type: 'string',
        minLength: 1,
      },
    },
  };

export const userValidator = ajv.compile(userSchema);
