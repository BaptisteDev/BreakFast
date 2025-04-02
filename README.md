## 🏠 Airbed & Breakfast - EXERCICE EN TAILWIND

Aperçu disponible sur ce lien : <a href="https://airbedandbreakfast.netlify.app/" target="_blank" rel="noopener noreferrer">https://airbedandbreakfast.netlify.app/</a>


> Une application web moderne pour trouver et réserver des hébergements.

## 🏠 Aperçu

Airbed & Breakfast est une application web construite avec React et stylisée avec Tailwind CSS. Elle permet aux utilisateurs de parcourir les hébergements disponibles, de consulter les détails et de lire les avis. Ce projet présente un design épuré et réactif, ainsi qu'une interface conviviale, offrant une expérience fluide aux utilisateurs à la recherche de leur prochain séjour.

## ✨ Fonctionnalités

Voici les principales fonctionnalités de l'application Airbed & Breakfast :

### **Affichage et navigation des logements**

*   **Parcourir les logements:**
    *   Les utilisateurs peuvent visualiser une liste d'hébergements disponibles.
    *   Chaque logement affiche une image, un titre, la ville et le prix par nuit.
    *   Les logements sont affichés dans une liste défilante horizontalement.
*   **Filtrage par ville:**
    *   Un champ de recherche permet de filtrer les logements en fonction de la ville.
    *   Le filtrage est instantané et insensible à la casse.
    *   Le champ de recherche est dynamique et filtre les logements en temps réel.
*   **Navigation par Catégorie:**
    *   Un menu de navigation permet d'accéder à différentes catégories de logements (Maisons, Appartements, Villas).
    *   Le lien "Maisons" permet d'inverser l'ordre d'affichage des logements.
    *   L'ordre d'affichage est inversé à chaque clic sur le lien "Maisons".
* **Affichage des logements réservés aux utilisateurs connectés**
    * Les logements ne sont visibles que si l'utilisateur est connecté.
* **Affichage des logements en travaux**
    * Un bouton permet d'afficher les logements en travaux.
    * Les logements en travaux ne sont visibles que si l'utilisateur est connecté.

### **Gestion des favoris**

*   **Ajout/Suppression de favoris:**
    *   Chaque logement dispose d'un bouton "cœur" pour l'ajouter ou le retirer des favoris.
    *   Le cœur change de couleur (noir/rose) pour indiquer si le logement est en favori.
*   **Onglet favoris:**
    *   Un onglet "Favoris" apparaît dans le header lorsqu'au moins un logement est ajouté aux favoris.
    *   L'onglet "Favoris" affiche le nombre de logements ajoutés aux favoris.
    *   L'onglet "Favoris" permet d'accéder à la liste des logements favoris.

### **Authentification**

*   **Connexion/Déconnexion:**
    *   Un bouton "Connexion/Déconnexion" permet de simuler une connexion utilisateur.
    *   L'état de connexion est conservé lors de la navigation.
*   **Accès restreint:**
    *   Certaines fonctionnalités, comme la visualisation des logements, sont réservées aux utilisateurs connectés.

### **Autres fonctionnalités**

*   **Mode sombre:**
    *   Un bouton permet de basculer entre le mode clair et le mode sombre.
    *   Le mode sombre est appliqué à l'ensemble de l'application.
*   **Avis:**
    *   Une section "Avis" permet de visualiser des témoignages d'utilisateurs.
    *   Les avis sont affichés sous forme de liste.
*   **Responsive design:**
    *   L'application est conçue pour s'adapter à différentes tailles d'écran (ordinateurs, tablettes, smartphones).
    *   L'interface s'ajuste automatiquement en fonction de la taille de l'écran.

## 🛠️ Technologies utilisées

*   **React:** Pour la construction de l'interface utilisateur.
*   **Tailwind CSS:** Pour le style et la mise en page.
*   **React Icons:** Pour les icônes.
