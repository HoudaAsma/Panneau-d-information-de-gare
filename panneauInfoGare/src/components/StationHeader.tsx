import React from 'react';
import { Train, Clock } from 'lucide-react';

export const StationHeader: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <header className="bg-white shadow-sm border-bottom sticky-top">
      <div className="container-fluid py-3 py-md-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-8">
            <div className="d-flex align-items-center">
              <Train className="text-primary me-2 me-md-3" size={32} />
              <div>
                <h1 className="h3 h2-md fw-bold text-dark mb-1">
                  Panneau d'Information
                </h1>
                <p className="text-muted small mb-0">
                  Gare Centrale - Informations en temps réel
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-4 mt-3 mt-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end bg-light bg-md-transparent rounded px-3 py-2 p-md-0">
              <Clock className="text-muted me-2" size={16} />
              <span className="font-mono fw-medium">
                {currentTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};