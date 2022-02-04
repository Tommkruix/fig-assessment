export enum EventType {
    none 		 = 'none',
    rock		 = 1,
    paper 	 = 2,
    scissors = 3,
    lizard 	 = 4,
    spock 	 = 5,
  }

export interface EventRequest {
    player: EventType;
  }