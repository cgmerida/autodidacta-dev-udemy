import Team from "./Team";

describe("Team Model", () => {
  it("should allow to add position", () => {
    const team = new Team();
    const position = {
      name: "Goalkeeper",
      t_shirt: 1,
      skills: ["Kick Hard", "Run Fast", "Jump High"],
    };

    expect(
      team.position(position.name, position.t_shirt, position.skills)
    ).toEqual([position.name, position.t_shirt, position.skills]);
  });

  it("should add a second position", () => {
    const team = new Team();
    const position = {
      name: "Center Midfield",
      t_shirt: 2,
      skills: ["Kick Hard", "Run Fast"],
    };

    expect(
      team.position(position.name, position.t_shirt, position.skills)
    ).toEqual([position.name, position.t_shirt, position.skills]);
  });

  it("should have a Soccer Play", () => {
    const soccerPlay = new Team();
    expect(soccerPlay.attacker("test")).toBe("test");
  });
});
