import { Train, TrainArrival, TrainDeparture } from '../types/Train';

export const sortTrainsByTime = <T extends Train>(trains: T[]): T[] => {
  return [...trains].sort((a, b) => {
    const timeA = a.heure.split(':').map(Number);
    const timeB = b.heure.split(':').map(Number);
    
    const minutesA = timeA[0] * 60 + timeA[1];
    const minutesB = timeB[0] * 60 + timeB[1];
    
    return minutesA - minutesB;
  });
};

export const formatDelayTime = (scheduledTime: string, delayMinutes: number): string => {
  if (delayMinutes === 0) return scheduledTime;
  
  const [hours, minutes] = scheduledTime.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + delayMinutes;
  
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  
  return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
};

export const isArrival = (train: Train): train is TrainArrival => {
  return 'provenance' in train;
};

export const isDeparture = (train: Train): train is TrainDeparture => {
  return 'destination' in train;
};