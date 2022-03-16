import IContract from "../interfaces/IContract";

export default class Contract {
  constructor(private readonly contract: IContract) {}

  get id(): string {
    return this.contract.id;
  }

  get init_date(): Date {
    return this.contract.init_date;
  }

  get expiration_date(): Date {
    return this.contract.expiration_date;
  }

  get month(): number {
    return this.contract.month;
  }

  get monthly_cost(): number {
    return this.contract.monthly_cost;
  }
}
