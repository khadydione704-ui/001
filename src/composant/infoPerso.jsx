/*   Depuis le dossier où le projet doit se trouver,lancer:
   npm create vite@latest 001 -- --template react
   `npm create vite@latest` lance le générateur Vite le plus récent, `001` donne son nom au dossier du projet, et `--template react` sélectionne React avec JavaScript.

  Entrer dans le dossier du projet
   cd 001

Installer les dépendances
   npm install
   Cette commande installe React, React DOM, Vite et les outils déclarés dans `package.json`. `package-lock.json` consigne les versions résolues.

Démarrer le serveur de développement
   npm run dev
*/

/* src contient le code de l’application.
  - App.jsx est le composant principal : c’est généralement là qu’on assemble l’interface.
  - main.jsx démarre React et affiche App dans la page.
  - App.css contient les styles de l’interface.
  - index.css contient les styles généraux du site, par exemple la police et les marges par défaut.
 public/ contient les fichiers statiques servis tels quels, comme une icône ou un fichier à télécharger. Ils ne sont pas importés depuis le code de la même façon que les images de src/assets/.
 index.html est la page HTML d’entrée. Elle contient l’élément dans lequel React affiche l’application et charge src/main.jsx.
 package.json décrit le projet, ses dépendances et ses commandes npm, comme npm run dev et npm run build.
 package-lock.json enregistre les versions précises des dépendances installées afin de pouvoir les réinstaller de façon cohérente.
 vite.config.js configure Vite et ses extensions. Le modèle React y active le support React.
node_modules/ contient les dépendances téléchargées par npm install. Ce dossier est généré automatiquement ; on ne le modifie généralement pas et on ne le partage pas dans Git.
*/

function InfoPerso() {
    return (
        <header>
            <h1>KHADY DIONE</h1>
            <p>Developpeuse Web</p>
            <p>Adresse: Hann Maristes</p>
            <p>Tel: 77-380-53-90</p>
            <p>Mail: khadydione704@gmail.com</p>
        </header>
    );
}
export default InfoPerso;