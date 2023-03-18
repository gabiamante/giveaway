import { Giveaway } from '../entities/giveaway.entity'
import { Participant } from '../entities/participant.entity'

export class DrawWinnersFromGiveaway {

  giveaway: Giveaway;

  constructor (giveaway: Giveaway) {

    this.giveaway = giveaway;
  }

  drawWinners (num: number): Participant[] {

    var winners: Participant[] = [];

    for (let i = 0; i < num; i++) {

      winners.push(this.giveaway.draw());
    }

    return winners;
  }
}
