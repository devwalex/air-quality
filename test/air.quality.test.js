import request from "supertest";
import app from "../server";

describe("Air Quality", () => {
  it("should return air quality information successfully", async () => {
    const response = await request(app)
      .get("/air-quality?longitude=3.35901&latitude=6.4483")
      .send();

    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("result");
  });

  it("should fail to return air quality information if the location is not found", async () => {
    const response = await request(app)
      .get("/air-quality?longitude=3.35901&latitude=60.4483")
      .send();
      
    expect(response.statusCode).toEqual(400);
    expect(response.body).toHaveProperty("status");
  });

  it("should return datetime where paris zone is the most polluted", async () => {
    const response = await request(app)
      .get("/air-quality/most-polluted")
      .send();
      
    expect(response.statusCode).toEqual(200);
  });
});
