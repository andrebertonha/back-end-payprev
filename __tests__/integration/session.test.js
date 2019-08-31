const request = require('supertest');

const app = require('../../src/app');

const User = require('../../src/models/User');

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {

    const user = User.create({
      email: "andrebertonhadev2@gmail.com",
      password: "andrebertonhadev",
      cpf: "33322211145",
      isadmin: true
    });

    const response = await request(app).post('/sessions')
      .send({
        email: "mastrufe@outlook.com",
        password: "mastrufe"
      })

    expect(response.status).toBe(200)
  });
})
