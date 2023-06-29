"use client"
import React, { createContext, useState } from 'react';

// Créer le contexte
const MonContexte = createContext();

// Composant fournisseur du contexte
const MonContexteFournisseur = ({ children }) => {
    const [valeur, setValeur] = useState('Valeur par défaut');

    // Fonction pour mettre à jour la valeur du contexte
    const mettreAJourValeur = (nouvelleValeur) => {
        setValeur(nouvelleValeur);
    };

    return (
        <MonContexte.Provider value={{ valeur, mettreAJourValeur }}>
            {children}
        </MonContexte.Provider>
    );
};

// Composant consommateur du contexte
const MonComposant = () => {
    return (
        <MonContexte.Consumer>
            {({ valeur, mettreAJourValeur }) => (
                <div>
                    <h1>Valeur du contexte : {valeur}</h1>
                    <button onClick={() => mettreAJourValeur('Nouvelle valeur')}>
                        Mettre à jour la valeur
                    </button>
                </div>
            )}
        </MonContexte.Consumer>
    );
};

// Composant racine de l'application
const App = () => {
    return (
        <MonContexteFournisseur>
            <MonComposant />
        </MonContexteFournisseur>
    );
};

export default App;