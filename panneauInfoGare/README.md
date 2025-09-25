# Panneau d'Information de Gare

Une application web moderne et minimaliste pour afficher les informations de trains en temps réel dans une gare.

## Langage et Technologies

- **React 18** avec TypeScript
- **Bootstrap 5** pour le design
- **Vite** comme bundler
- **Lucide React** pour les icônes

## Installation et Exécution

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>
cd panneau-gare

# Installer les dépendances
npm install
```

### Exécution en développement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build pour production
```bash
npm run build
```

Les fichiers buildés seront dans le dossier `dist/`

## Fonctionnalités Implémentées

### ✅ Fonctionnalités de base
- [x] Lecture du fichier `train.json`
- [x] Affichage de deux tableaux séparés (Arrivées/Départs)
- [x] Informations complètes : numéro, provenance/destination, heure, retard
- [x] Tri automatique par heure croissante
- [x] Mise en évidence des trains en retard

### ✅ Fonctionnalités bonus
- [x] Design responsive (mobile, tablette, desktop)
- [x] Interface minimaliste et épurée
- [x] Animations et transitions fluides
- [x] Gestion d'état avec hooks React
- [x] Composants modulaires et réutilisables
- [x] TypeScript pour la sécurité des types
- [x] Heure actuelle en temps réel
- [x] Compteur de trains en retard
- [x] Gestion des erreurs de chargement

## Structure du Projet

```
src/
├── components/          # Composants React
│   ├── StationHeader.tsx    # En-tête avec titre et heure
│   ├── TrainTable.tsx       # Tableau des trains
│   ├── TrainRow.tsx         # Ligne individuelle de train
│   ├── LoadingSpinner.tsx   # Indicateur de chargement
│   └── ErrorMessage.tsx     # Affichage des erreurs
├── hooks/              # Hooks personnalisés
│   └── useTrainData.ts     # Hook pour charger les données
├── types/              # Définitions TypeScript
│   └── Train.ts            # Types pour les trains
├── utils/              # Utilitaires
│   └── trainUtils.ts       # Fonctions de tri et formatage
└── App.tsx            # Composant principal
```

## Choix Techniques

### Architecture
- **Composants fonctionnels** : Utilisation des hooks React pour un code moderne
- **Séparation des responsabilités** : Chaque composant a une fonction précise
- **Custom hooks** : `useTrainData` pour encapsuler la logique de chargement

### Design
- **Design System cohérent** : Couleurs et espacements standardisés
- **Accessibilité** : Contrastes respectés, navigation au clavier
- **Mobile First** : Design responsive avec Bootstrap

### Gestion des données
- **Tri intelligent** : Conversion des heures en minutes pour un tri précis
- **Calcul des retards** : Affichage de l'heure réelle avec le retard
- **Type safety** : TypeScript pour éviter les erreurs de runtime

### Performance
- **Lazy loading** : Chargement asynchrone des données
- **Memoisation** : Optimisations React automatiques
- **Bundling optimisé** : Vite pour des builds rapides

## Données d'Entrée

Le fichier `public/train.json` qui a été fourni contient :
- **10 trains en arrivée** avec provenance
- **10 trains au départ** avec destination
- **Informations complètes** : numéro, heure, retard

## Interface Utilisateur

### Couleurs
- **Trains à l'heure** : Badge vert
- **Trains en retard** : Badge rouge avec temps réel
- **Arrivées** : Icône bleue
- **Départs** : Icône verte

### Responsive Design
- **Mobile** : Tableaux défilables horizontalement
- **Tablette/Desktop** : Affichage complet optimisé

## Tests et Qualité

- **ESLint** : Linting du code
- **TypeScript** : Vérification des types
- **Code modulaire** : Facilite les tests unitaires futurs

## Évolutions Possibles

- [ ] Actualisation automatique des données
- [ ] Filtres par type de train (TGV, TER, etc.)
- [ ] Notifications push pour les retards
- [ ] Mode sombre/clair
- [ ] Export des données (PDF, Excel)
- [ ] API temps réel avec WebSockets