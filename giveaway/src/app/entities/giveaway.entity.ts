import { Participant } from './participant.entity'

export class Giveaway {

  minscore: number = 0
  participants: Participant[] = []

  constructor(minscore: number) {

    this.minscore = minscore
  }

  addParticipant(participant: Participant): void {

    if (participant.score >= this.minscore) {

      this.participants.push(participant);
    }
  }

  draw(): Participant {

    const randomParticipant = Math.floor(Math.random() * this.participants.length);
    const selectedParticipant = this.participants[randomParticipant];

    this.participants.splice(randomParticipant, 1);

    return selectedParticipant;
  }
}
