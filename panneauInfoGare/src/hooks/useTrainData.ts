import { useState, useEffect } from 'react';
import { TrainData } from '../types/Train';

export const useTrainData = () => {
  const [trainData, setTrainData] = useState<TrainData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTrainData = async () => {
      try {
        const response = await fetch('/trains.json');
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        const data: TrainData = await response.json();
        setTrainData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
      } finally {
        setLoading(false);
      }
    };

    loadTrainData();
  }, []);

  return { trainData, loading, error };
};