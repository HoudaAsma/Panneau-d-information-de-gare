import React from 'react';
import { Train as TrainIcon } from 'lucide-react';
import { Train } from '../types/Train';
import { TrainRow } from './TrainRow';
import { sortTrainsByTime } from '../utils/trainUtils';

interface TrainTableProps {
  trains: Train[];
  type: 'arrivals' | 'departures';
}

export const TrainTable: React.FC<TrainTableProps> = ({ trains, type }) => {
  const sortedTrains = sortTrainsByTime(trains);
  const isArrivals = type === 'arrivals';
  const delayedCount = trains.filter(train => train.retard > 0).length;
  
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between">
          <div className="d-flex align-items-center mb-2 mb-sm-0">
            <TrainIcon 
              className={`me-2 ${isArrivals ? 'text-primary' : 'text-success'}`} 
              size={20} 
            />
            <h2 className="h5 fw-semibold mb-0 me-2">
              {isArrivals ? 'Arrivées' : 'Départs'}
            </h2>
            <span className="text-muted small">
              ({sortedTrains.length} trains)
            </span>
          </div>
          
          {delayedCount > 0 && (
            <span className="badge bg-danger">
              {delayedCount} train{delayedCount > 1 ? 's' : ''} en retard
            </span>
          )}
        </div>
      </div>
      
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light d-none d-sm-table-header-group">
              <tr>
                <th className="fw-medium text-uppercase small text-muted">
                  Train
                </th>
                <th className="fw-medium text-uppercase small text-muted">
                  {isArrivals ? 'Provenance' : 'Destination'}
                </th>
                <th className="fw-medium text-uppercase small text-muted">
                  Heure
                </th>
                <th className="fw-medium text-uppercase small text-muted">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTrains.map((train) => (
                <TrainRow key={train.numero} train={train} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};