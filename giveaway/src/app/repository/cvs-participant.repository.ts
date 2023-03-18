import { Participant } from './../entities/participant.entity';
import { ParticipantRepository } from './../usecase/port/participant.repository';
import * as Papa from 'papaparse';

export class CsvParticipantRepository implements ParticipantRepository {

  participants: Array<Participant> = [
    { name: "Gabriela", email: "a@a.com", score: 8 },
    { name: "Maria", email: "a@a.com", score: 6 },
    { name: "Ana", email: "a@a.com", score: 7 },
    { name: "Diego", email: "a@a.com", score: 5 },
    { name: "Rodrigo", email: "a@a.com", score: 6 },
    { name: "Igor", email: "a@a.com", score: 9 },
  ];

  constructor() {

    this.findAllParticipants();
  }

  findAllParticipants(): Participant[] {

    return this.participants;
  }

}
