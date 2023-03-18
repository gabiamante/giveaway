import { Giveaway } from '../entities/giveaway.entity'

export class CreateGiveaway {

  createGiveaway (minScore: number): Giveaway {

    return new Giveaway(minScore);
  }
}
