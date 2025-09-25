import React from "react";
import { StationHeader } from "./components/stationHeader";
import { TrainTable } from "./components/TrainTable";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage";
import { useTrainData } from "./hooks/useTrainData";

function App() {
  const { trainData, loading, error } = useTrainData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!trainData) {
    return <ErrorMessage message="Aucune donnée disponible" />;
  }

  return (
    <div className="min-vh-100">
      <StationHeader />

      <main className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-12 col-xl-6">
            <TrainTable trains={trainData.arrivees} type="arrivals" />
          </div>

          <div className="col-12 col-xl-6">
            <TrainTable trains={trainData.depart} type="departures" />
          </div>
        </div>
      </main>

      <footer className="bg-white border-top py-3 mt-5">
        <div className="container-fluid">
          <p className="text-center text-muted small mb-0">
            Informations mises à jour automatiquement -{" "}
            {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
