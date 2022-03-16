import ISoccerPlay from "../interfaces/ISoccerPlay";
import ITeam from "../interfaces/ITeam";

export default class Team implements ITeam, ISoccerPlay {
  attacker(name: string) {
    return name;
  }

  position(name: string, t_shirt: number, skills: any[]) {
    return [name, t_shirt, skills];
  }
}
