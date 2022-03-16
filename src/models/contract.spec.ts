import Contract from "./contract";
import PrimeContract from "./PrimeContract";

describe("Contract Model", () => {
  let contractValues;

  beforeEach(() => {
    contractValues = {
      id: "#1",
      init_date: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthly_cost: 500,
    };
  });

  describe("Contact Creation", () => {
    it("should create the regular contract with the passed args", () => {
      const newContract = new Contract(contractValues);

      expect(newContract.id).toEqual(contractValues.id);
      expect(newContract.init_date).toEqual(contractValues.init_date);
      expect(newContract.expiration_date).toEqual(
        contractValues.expiration_date
      );
      expect(newContract.month).toEqual(contractValues.month);
      expect(newContract.monthly_cost).toEqual(contractValues.monthly_cost);
    });

    it("should create a prime contract", () => {
      const primeContract = new PrimeContract(contractValues);

      expect(primeContract.monthlyDiscount()).toBe(
        contractValues.monthly_cost * 0.1
      );
    });
  });
});
