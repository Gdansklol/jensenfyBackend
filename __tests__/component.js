/**
 * @group component
 */
 const { expect } = require('chai');
 const chai = require('chai')
 const chaiHttp = require('chai-http');
 chai.use(chaiHttp);
 
 
 
 process.env.NODE_ENV = 'test'
 const BACKEND_HOST = process.env.BACKEND_HOST || "http://localhost:8080/api"
 
 
 
 
 
 describe('/GET user', () => {
     it ('it should GET all the users', (done) => {
         chai.request(BACKEND_HOST)
           .get('/users')
           .end((err, res) => {
             expect(res).to.have.status(200)
             expect(res.body).to.not.be.null.and.not.be.undefined;
             expect(res.body).to.be.an('array')
          // console.log(res.body)

           res.body.forEach(element => console.log(element.userName, element.id));
             let data =res.body
             for(let i = 0; i < data.length; i++) {
             console.log(data[0].userName, data[0].id)}

             done()
           }) 
     })
   })
           
          
            
     
  
