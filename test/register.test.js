const chai = require("chai"),
  expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app.js");

const TESTPATH = `/`;

chai.use(chaiHttp);

describe("Register/Index route / GET", () => {
  it(`should render the index view with a 200 status code and sends back the rendered HTML string`, async () => {
    await chai
      .request(app)
      .get(TESTPATH)
      .end((err, res) => {
        expect(res).to.be.html;
        expect(res).to.have.status(200);
        expect(res.text).to.contain(
          "Hi, welcome to the Rock Paper Scissors game!"
        );
      });
  });
});
