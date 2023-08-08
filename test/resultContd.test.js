const chai = require("chai"),
  expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app.js");
const sinon = require("sinon");

const TESTPATH = `/turn`;

chai.use(chaiHttp);

describe("Turn route - additional test to reach 100% test coverage", async () => {
  let mathRandomStub;

  beforeEach(() => {
    mathRandomStub = sinon.stub(Math, "random").returns(0.5);
  });

  afterEach(() => {
    mathRandomStub.restore();
  });
  it("should render the right text when the computer wins", async () => {
    const req = {
      body: {
        choice: "Rock",
      },
    };

    const res = await chai
      .request(app)
      .post(TESTPATH)
      .set("content-type", "application/x-www-form-urlencoded")
      .send(req.body);

    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.contain("<h3>You chose Rock</h3>");
    expect(res.text).to.contain("<h3>Computer chose Paper</h3>");
    expect(res.text).to.contain("<h3>Better luck next time!</h3>");
  });
});
