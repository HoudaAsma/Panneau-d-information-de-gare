import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center px-3">
      <div className="text-center">
        <AlertCircle className="text-danger mb-3" size={48} />
        <h2 className="h4 fw-semibold text-dark mb-2">
          Erreur de chargement
        </h2>
        <p className="text-muted">{message}</p>
      </div>
    </div>
  );
};