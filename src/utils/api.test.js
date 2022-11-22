import { getInitialData } from "./api";
import { users, questions } from "./_DATA";
describe("api", () => {
  it("Shourd return users and questions in the format of {users, questions}", async () => {
    const result = await getInitialData();

    expect(result).toHaveProperty("users");
    expect(result).toHaveProperty("questions");
  });
  it("Should match initial data when requested", async () => {
    const result = await getInitialData();
    expect(result).toEqual({ users, questions });
  });
});
