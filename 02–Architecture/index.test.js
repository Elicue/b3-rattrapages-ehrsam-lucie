import { getHarryPotterCharacter } from "./index.js";

describe("getHarryPotterCharacter()", () => {
  it("should return a character if no search criteria is provided", async () => {
    const response = await getHarryPotterCharacter();
    expect(response.error).toBeFalsy();
    expect(response.message).toBe("");
    expect(response.data).toHaveProperty("name");
  });

  it("should return no character if search criteria lead to empty result", async () => {
    const response = await getHarryPotterCharacter({
      gender: "female",
      species: "dog",
    });
    expect(response.error).toBeFalsy();
    expect(response.message).toBe("No character matches your search criteria");
    expect(response.data).toBeNull;
  });

  it("should return character corresponding to search criteria when possible", async () => {
    const response = await getHarryPotterCharacter({
      gender: "male",
      species: "human",
      wizard: true,
    });
    expect(response.error).toBeFalsy();
    expect(response.message).toBe("");
    expect(response.data).toHaveProperty("gender", "male");
    expect(response.data).toHaveProperty("species", "human");
    expect(response.data).toHaveProperty("wizard", true);
  });

  it("should return character corresponding to search criteria when possible", async () => {
    const response = await getHarryPotterCharacter({
      gender: "male",
      species: "human",
      wizard: true,
      house: "Gryffindor",
    });
    expect(response.error).toBeFalsy();
    expect(response.message).toBe("");
    expect(response.data).toHaveProperty("gender", "male");
    expect(response.data).toHaveProperty("species", "human");
    expect(response.data).toHaveProperty("wizard", true);
    expect(response.data).toHaveProperty("house", "Gryffindor");
  });
});
