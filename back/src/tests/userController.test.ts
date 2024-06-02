import request from 'supertest';
import { app } from '../index';
import sequelize from '../models';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('User API', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        nome: "João da Silva",
        idade: 30,
        cpf: "123.456.789-10",
        rg: "45.678.901-2",
        data_nasc: "1990-01-01",
        sexo: "Masculino",
        signo: "Áries",
        mae: "Maria da Silva",
        pai: "José da Silva",
        email: "joao.silva@example.com",
        senha: "SecurePass123",
        cep: "12345-678",
        endereco: "Rua Principal",
        numero: 100,
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        telefone_fixo: "(11) 1234-5678",
        celular: "(11) 91234-5678",
        altura: "1.75",
        peso: 80,
        tipo_sanguineo: "O+",
        cor: "azul"
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all users', async () => {
    const res = await request(app).get('/api/users');

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('should update an existing user', async () => {

    const createUserRes = await request(app)
      .post('/api/users')
      .send({
        nome: "Maria da Silva",
        idade: 25,
        cpf: "987.654.321-00",
        rg: "21.098.765-4",
        data_nasc: "1995-05-05",
        sexo: "Feminino",
        signo: "Touro",
        mae: "Ana da Silva",
        pai: "José da Silva",
        email: "maria.silva@example.com",
        senha: "StrongPass789",
        cep: "54321-678",
        endereco: "Avenida Principal",
        numero: 200,
        bairro: "Centro",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        telefone_fixo: "(21) 9876-5432",
        celular: "(21) 99876-5432",
        altura: "1.65",
        peso: 60,
        tipo_sanguineo: "A-",
        cor: "vermelho"
      });
    const userId = createUserRes.body.id;
  

    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({
        nome: "Maria da Silva Updated",
        idade: 26,
        cidade: "São Paulo"
      });
      
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', userId);
    expect(res.body).toHaveProperty('nome', 'Maria da Silva Updated');
    expect(res.body).toHaveProperty('idade', 26);
    expect(res.body).toHaveProperty('cidade', 'São Paulo');
  });

});