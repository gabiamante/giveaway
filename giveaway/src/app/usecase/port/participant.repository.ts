import { Participant } from '../../entities/participant.entity'

export interface ParticipantRepository {
  findAllParticipants (): Participant[]
}
