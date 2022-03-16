import Contract from "./contract";

export default class PrimeContract extends Contract {
  monthlyDiscount = (): number => this.monthly_cost * 0.1;
}
