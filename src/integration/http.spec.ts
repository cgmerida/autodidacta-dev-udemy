import UrlLogin from "../protocols/http";

describe("HTTP Protocol", () => {
  describe("Login", () => {
    const loginUrl = "http://localhost:3000/login";
    it("should be correct url", () => {
      const parsedUrl = UrlLogin.parseUrl(loginUrl);

      expect(parsedUrl.href).toBe(loginUrl);
      expect(parsedUrl.port).toBe("3000");
    });

    it("should return a response query", () => {
      const parsedUrl = UrlLogin.parseUrl(
        `${loginUrl}?user=user&pass=password`
      );

      const expectedAuth = {
        user: "user",
        pass: "password",
      };

      expect(parsedUrl.query).toEqual(expectedAuth);
    });

    it("should handle invalid URL", () => {
      expect(() => {
        UrlLogin.parseUrl("");
      }).toThrowError("Invalid Argument: ");
    });
  });
});
