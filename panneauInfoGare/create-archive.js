const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Créer une archive ZIP du projet
try {
  console.log('Création de l\'archive du projet...');
  
  // Utiliser tar pour créer l'archive (disponible dans WebContainer)
  execSync('tar -czf panneau-gare.tar.gz --exclude=node_modules --exclude=.git --exclude=dist --exclude=create-archive.js .', {
    stdio: 'inherit'
  });
  
  console.log('✅ Archive créée avec succès : panneau-gare.tar.gz');
  console.log('Vous pouvez maintenant télécharger le fichier panneau-gare.tar.gz');
  
} catch (error) {
  console.error('❌ Erreur lors de la création de l\'archive:', error.message);
}