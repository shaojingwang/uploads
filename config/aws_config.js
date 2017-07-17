/*
  AWS S3 Configurations
  Exports to app.js
  Fill in id and key before testing uploads.
*/

exports.myConfig = { 
  bucket: '',
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-east-1',
  IdentityPoolId: '',
  ServerSideEncryption: 'AES256',
  acl: 'public-read',
  endPoint: '',
  maxFileSize: 10585760 // 10MB
};

exports.TestConfig = { 
  bucket: '',
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-west-2', // This region cannot make cognito, which is needed in browser of AWS.CognitoIdentityCredentials ...
  IdentityPoolId: '',
  ServerSideEncryption: 'AES256',
  acl: 'public-read',
  endPoint: '',
  maxFileSize: 10585760
};

exports.ProdConfig = { 
  bucket: '',
  accessKeyId: '',
  secretAccessKey: '',
  region: 'us-west-2',
  IdentityPoolId: '',
  ServerSideEncryption: '',
  acl: 'private', // Users would visit cdn, which has the permissions to request for S3, no need to public here.
  endPoint: '',
  maxFileSize: 10585760
};
