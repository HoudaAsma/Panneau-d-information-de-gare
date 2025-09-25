import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Train } from '../types/Train';
import { formatDelayTime, isArrival } from '../utils/trainUtils';

interface TrainRowProps {
  train: Train;
}

export const TrainRow: React.FC<TrainRowProps> = ({ train }) => {
  const hasDelay = train.retard > 0;
  const actualTime = formatDelayTime(train.heure, train.retard);
  
  return (
    <>
      {/* Desktop version */}
      <tr className="d-none d-sm-table-row">
        <td className="py-3">
          <div className="font-mono fw-medium">
            {train.numero}
          </div>
        </td>
        
        <td className="py-3">
          <div className="d-flex align-items-center">
            <MapPin className="text-muted me-2 flex-shrink-0" size={16} />
            <span className="text-truncate">
              {isArrival(train) ? train.provenance : train.destination}
            </span>
          </div>
        </td>
        
        <td className="py-3">
          <div className="d-flex align-items-center">
            <Clock className="text-muted me-2 flex-shrink-0" size={16} />
            <div className="d-flex flex-column">
              <span className={`fw-medium ${hasDelay ? 'text-strikethrough text-muted' : ''}`}>
                {train.heure}
              </span>
              {hasDelay && (
                <span className="fw-medium text-danger">
                  {actualTime}
                </span>
              )}
            </div>
          </div>
        </td>
        
        <td className="py-3">
          {hasDelay ? (
            <span className="badge badge-delay">
              +{train.retard} min
            </span>
          ) : (
            <span className="badge badge-ontime">
              À l'heure
            </span>
          )}
        </td>
      </tr>

      {/* Mobile version */}
      <tr className="d-sm-none">
        <td colSpan={4} className="p-3">
          <div className="d-flex flex-column gap-3">
            {/* Train number and status */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="font-mono fw-bold h6 mb-0">
                {train.numero}
              </div>
              {hasDelay ? (
                <span className="badge badge-delay">
                  +{train.retard} min
                </span>
              ) : (
                <span className="badge badge-ontime">
                  À l'heure
                </span>
              )}
            </div>
            
            {/* Destination/Origin */}
            <div className="d-flex align-items-center">
              <MapPin className="text-muted me-2 flex-shrink-0" size={16} />
              <span className="fw-medium">
                {isArrival(train) ? train.provenance : train.destination}
              </span>
            </div>
            
            {/* Time */}
            <div className="d-flex align-items-center">
              <Clock className="text-muted me-2 flex-shrink-0" size={16} />
              <div className="d-flex align-items-center">
                <span className={`fw-medium ${hasDelay ? 'text-strikethrough text-muted' : ''}`}>
                  {train.heure}
                </span>
                {hasDelay && (
                  <>
                    <span className="text-muted mx-2">→</span>
                    <span className="fw-medium text-danger">
                      {actualTime}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};