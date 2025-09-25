import React from 'react';
import { Train } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Train className="text-primary animate-pulse mb-3" size={40} />
        <p className="text-muted">Chargement des informations...</p>
      </div>
    </div>
  );
};