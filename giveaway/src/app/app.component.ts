import { DrawWinnersFromGiveaway } from './usecase/draw-winners.usecase';
import { AddParticipantToGiveaway } from './usecase/add-participant-to-giveaway.usecase';
import { CsvParticipantRepository } from './repository/cvs-participant.repository';
import { CreateGiveaway } from './usecase/create-giveaway.usecase';
import { Component } from '@angular/core';
import { Participant } from './entities/participant.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  winners: Array<Participant> = [];
  participants: any = [];


  constructor() {

    this.main();
  }

  main(): void {

    const giveaway = new CreateGiveaway().createGiveaway(6);
    this.participants = new CsvParticipantRepository();

    debugger
    const addParticipants = new AddParticipantToGiveaway(giveaway, this.participants);
    addParticipants.addParticipantsToGiveaway();

    const drawWinners = new DrawWinnersFromGiveaway(giveaway);
    const winners = drawWinners.drawWinners(10);


    winners.forEach((element) => {

      this.winners.push(element);
    });

  }

}
