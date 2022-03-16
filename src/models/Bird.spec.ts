import Bird from "./Bird";
import Eagle from "./Eagle";
import Penguin from "./Penguin";

describe("Bird", () => {
  it("should fly", () => {
    const data = {
      name: "Eagle",
      age: 30,
      origin: "North America",
    };
    const eagle = new Bird(data);

    expect(eagle.fly()).toBe(data.name);
  });

  it("eagle class should fly", () => {
    const data = {
      name: "Eagle",
      age: 30,
      origin: "North America",
    };
    const eagle = new Eagle(data);

    expect(eagle.fly()).toBe("Eagle");
  });

  it("penguin class should not fly", () => {
    const data = {
      name: "Penguin",
      age: 30,
      origin: "North America",
    };
    const penguin = new Penguin(data);

    expect(() => {
      penguin.fly();
    }).toThrowError("I cannot fly");
  });

  it("penguin should walk and swim", () => {
    const data = {
      name: "Penguin",
      age: 30,
      origin: "North America",
    };
    const penguin = new Penguin(data);
    expect(penguin.swim()).toBe("I can swim");
  });
});
