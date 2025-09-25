export interface TrainArrival {
    numero: string;
    provenance: string;
    heure: string;
    retard: number;
  }

  export interface TrainDeparture {
    numero: string;
    destination: string;
    heure: string;
    retard: number;
  }

  export interface TrainData {
    arrivees: TrainArrival[];
    depart: TrainDeparture[];
  }
  
  export type Train = TrainArrival | TrainDeparture;