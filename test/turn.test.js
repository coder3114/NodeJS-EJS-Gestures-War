const chai = require("chai"),
  expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app.js");

const TESTPATH = `/turn`;

chai.use(chaiHttp);

const mockMath = Object.create(global.Math);
mockMath.random = () => 0;
global.Math = mockMath;

describe("Turn route / POST", async () => {
  it("should render the turn view and pass in the correct players choices", async () => {
    const req = {
      body: {
        choice: "Paper",
      },
    };

    const res = await chai
      .request(app)
      .post(TESTPATH)
      .set("content-type", "application/x-www-form-urlencoded")
      .send(req.body);

    expect(res).to.redirect;
    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.contain("<h3>You chose Paper</h3>");
    expect(res.text).to.contain("<h3>Computer chose Rock</h3>");
  });

  it("should render the right text when the computer wins", async () => {
    const req = {
      body: {
        choice: "Scissors",
      },
    };

    const res = await chai
      .request(app)
      .post(TESTPATH)
      .set("content-type", "application/x-www-form-urlencoded")
      .send(req.body);

    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.contain("<h3>You chose Scissors</h3>");
    expect(res.text).to.contain("<h3>Computer chose Rock</h3>");
    expect(res.text).to.contain("<h3>Better luck next time!</h3>");
  });

  it("should render the right text when the computer loses", async () => {
    const req = {
      body: {
        choice: "Paper",
      },
    };

    const res = await chai
      .request(app)
      .post(TESTPATH)
      .set("content-type", "application/x-www-form-urlencoded")
      .send(req.body);

    expect(res).to.have.status(200);
    expect(res).to.be.html;
    expect(res.text).to.contain("<h3>You chose Paper</h3>");
    expect(res.text).to.contain("<h3>Computer chose Rock</h3>");
    expect(res.text).to.contain("<h3>Congrats! You win!</h3>");
  });

  it("should render the right text when player and computer choose the same", async () => {
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
    expect(res.text).to.contain("<h3>Computer chose Rock</h3>");
    expect(res.text).to.contain("<h3>Alas, a tie!</h3>");
  });
});
