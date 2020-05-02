const request = require('supertest'); 
const server = require('../api/server');
const router = require('./auth-router'); 
const json = "application/json";
describe('server.js', () => {
 
  describe('Get Test', () => {
    it('Testing get/home should Return 200 status', () => {
       return request(server).get('/api/auth/')
       .then(res=>{
           expect(res.status).toEqual(200)
       })
    });
  });
});

describe('server.js', () => {
 
    describe('login test', () => {
      it('Testing expected to fail with no login data, return 500 error', () => {
         return request(server).post('/api/auth/login')
         .then(res=>{
             expect(res.type).toBe(json),
             expect(res.status).toBe(500),
             expect(res.body).toEqual({message:"try again"})
         })
      });
    });
  });

  describe('server.js', () => {
 
    describe('register test', () => {
      it('Testing expected to fail with no registern data, return 500 error', () => {
         return request(server).post('/api/auth/register')
         .then(res=>{
             expect(res.status).toBe(500)
             expect(res.body).toEqual({message:"nothing registered"})
         })
      });
    });
  });

