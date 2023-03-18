import { Giveaway } from '../entities/giveaway.entity'
import { ParticipantRepository } from './port/participant.repository'
import { Participant } from '../entities/participant.entity'

export class AddParticipantToGiveaway {

  giveaway: Giveaway;
  participantRepo: ParticipantRepository;

  constructor (giveAway: Giveaway, participantRepo: ParticipantRepository) {

    this.giveaway = giveAway;
    this.participantRepo = participantRepo;
  }

  addParticipantsToGiveaway (): void {

    const plist: Participant[] = this.participantRepo.findAllParticipants();

    plist.forEach(element => {

      this.giveaway.addParticipant(element);
    })
  }
}
