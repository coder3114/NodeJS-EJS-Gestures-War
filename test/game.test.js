const chai = require("chai"),
  expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app.js");

const TESTPATH = "/game";

chai.use(chaiHttp);

let res;

describe("Game route", () => {
  beforeEach(() => {
    res = null;
  });

  describe("POST /", () => {
    it("should redirect to /game", async () => {
      const testData = {
        player: "John Smith",
      };
      res = await chai
        .request(app)
        .post(TESTPATH)
        .set("content-type", "application/x-www-form-urlencoded")
        .send(testData);
      expect(res).to.redirect;
    });
  });

  describe("GET /", () => {
    it("should have a 200 status code and sends back the rendered HTML string", async () => {
      res = await chai
        .request(app)
        .get(TESTPATH)
        .set("content-type", "application/x-www-form-urlencoded");
      expect(res).to.have.status(200);
      expect(res).to.be.html;
    });

    it("should render the game view with player's name", async () => {
      res = await chai
        .request(app)
        .get(TESTPATH)
        .set("content-type", "application/x-www-form-urlencoded");
      expect(res.text).to.contain("<h3>Hi John Smith!</h3>");
      expect(res.text).to.contain("Please provide your choice:");
    });
  });
});
