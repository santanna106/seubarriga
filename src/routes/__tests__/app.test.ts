import { app } from "../../app";
import request from "supertest"

test('should be respose in the port 3001', () => {
  // acessar a url http://localhost:3001
  return request(app).get('/')
        .then((res) => {
          expect(res.status).toBe(200);
         });
  // verificar que a resposta foi 200
});