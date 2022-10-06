/**
 * @group integration
 */
process.env.NODE_ENV = 'test'




const { expect } = require('chai');
const chai = require('chai')
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

process.env.NODE_ENV = 'test'
const BACKEND_HOST = process.env.BACKEND_HOST || "http://localhost:8080/API-docs"



describe('/GET API-docs', () => {
    it('it should GET API-docs', (done) => {
        chai.request(BACKEND_HOST)
          .get('/')
          .end((err, res) => {
            expect(res).to.have.status(200)
            done()
          })
    })
})