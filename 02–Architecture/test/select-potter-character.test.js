const getHarryPotterCharacter = require("../src/select-potter-character");

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
});
