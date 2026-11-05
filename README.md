# CACBO Badminton

Site de la section badminton du Club Athlétique CarbonBlanais Omnisports (CACBO), à Carbon-Blanc (33).

- **Maquette** : [Figma — CACBO BAD | Website](https://www.figma.com/design/lHQT4szd4197T0RBNTDP5R/CACBO-BAD-%7C-Website?node-id=0-1) (page « Maquette » pour les écrans mobiles, page « Composants » pour les boutons et icônes). Le Figma fait référence, y compris la liste « Patch ».
- **Stack** : Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript, Biome
- **Hébergement** : Vercel (Node 24.x)

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
npm run lint
```

## Structure

| Dossier | Contenu |
|---|---|
| `src/app/` | Une route par page (`adherer`, `bureau`, `contact`, …), `layout.tsx` pour les metadata, `globals.css` pour les tokens |
| `src/components/` | Composants partagés et `UI/` (navbar, menu). Textes : `Text` (`variant` h1–h4, corps, secondaire, cta · `color` · `as`), `textStyles()` pour les classes seules. Variants via `class-variance-authority` |
| `src/constantes/` | Données partagées : `club.ts` (coordonnées, créneaux), `socials.tsx` (réseaux), liens navbar/footer |
| `public/` | Images et PDF, rangés par page |

---

## Roadmap : écarts entre le code et le Figma mobile

Ordre conseillé : chaque étape prépare la suivante. Les tokens et le footer passent avant le responsive pour ne pas les refaire deux fois.

### 1. Bloquants

- [x] **Footer** : refaire `src/components/Footer.tsx` et `src/constantes/footer.tsx` selon le Figma
  - fond blanc, bandeau rouge « Suivez-nous sur nos réseaux »
  - colonnes CLUB et RESSOURCES (supprimer « INFOS PRATIQUES »)
  - ligne de logos partenaires (Ville de Carbon-Blanc, Omnisports, SportArticle)
  - adresse avec 📍, bandeau rouge Mentions légales · Nous contacter · Politique de confidentialité · FAQ
  - copyright et « Section du Club Athlétique CarbonBlanais Omnisports (CACBO) depuis 2007 »
- [x] **Page `/respect`** : l'ajouter dans `src/constantes/navbar.tsx`, dans le footer (RESSOURCES) et dans `src/app/sitemap.ts`
- [x] **Metadata** : `title.template` dans le layout racine, `metadata` exporté par chaque page (layouts de routes supprimés, iframe boutique sortie dans `HelloAssoWidget`)
- [x] **Adhérer** : ajouter le bloc « Assurance & couverture » (RC Groupama) entre « 3 séances d'essai » et « Comment ? »

### 2. Tokens (`src/app/globals.css`, `src/constantes/theme.tsx`)

- [x] Variables Figma importées dans `@theme` avec les noms du Figma (`rouge`, `rouge-pale`, `noir`, `blanc`, `blanc-casse`, `text-h1` … `text-cta`, `shadow-ombre`) et classes renommées dans `src/`
- [x] NOIR : `#000000` → `#100C08` (couleur de texte par défaut sur `body`)
- [x] CTA : `font-normal` → Poppins Medium (500)
- [x] Texte secondaire : 14 px / 16 → 15 px / 15
- [x] Ombre : ajouter le spread −1
- [x] Supprimer les tokens absents du Figma (`--radius-ten`, `--text-paragraph`, `whitebroken`, …)
- [x] Patch : passer les `font-medium` des textes en `font-semibold`

### 3. Composants

- [x] `Button.tsx` : variants `cva` (`plein` par défaut, `contour`, `ghost`), prop `icon` (`external`, `send`, `mail`), `target="_blank"` auto pour les liens externes, typé `AnchorHTMLAttributes`
- [x] `Header.tsx` : « Bienvenue » et le sous-titre ne sont plus des titres `h2`/`h3`
- [x] `Bloc.tsx` : prop `subtitle` (ex-`subtitile`), variant `outline`
- [x] `List.tsx` : remplacer `gap-0` par l'espacement entre puces du Figma (Patch)
- [x] `Document.tsx` : remplacer le `useState` de survol par `group-hover` (repasser en composant serveur), `alt` propre à chaque document, `h5` → `p`
- [x] `Membre.tsx` : n'afficher l'icône info que s'il y a une description
- [x] `Partenaire.tsx` : `alt` = nom du partenaire (au lieu de « volant de badminton »)
- [x] `Register.tsx` : retirer la coche ✔️ quand les inscriptions sont fermées
- [x] `Caroussel.tsx` : `alt` descriptifs au lieu de « Image 1 »
- [x] `ImageLegend.tsx` : `aspect-ratio` au lieu de `h-115`, traiter le TODO
- [x] `Palmares.tsx`, `President.tsx` : ne plus utiliser `h2`/`h3` pour le style
- [x] Footer : lien « Maël THOMAS » en `href="#"` à remplacer ou retirer

### 4. Pages

- [x] **Contact**
  - [x] retirer l'emoji 👇 du titre (Patch)
  - [x] réduire l'interlignage du bloc téléphone / mail (Patch)
  - [x] créneaux en pastilles rouges (`<Creneaux variant="pastilles" />`)
  - [x] téléphone en `tel:`, mail en `mailto:`
  - [x] `alt` de la photo (copié d'Adhérer)
  - [x] `aria-label` et `target="_blank"` sur les réseaux (`SocialLinks`)
- [x] **Accueil**
  - [x] jours avec majuscule (`Creneaux`, données dans `constantes/club.ts`)
  - [x] carrousel : `caroussel2.png` affiché deux fois
  - [x] légendes : `ensemble.png` sans légende, comme dans le Figma
- [x] **Adhérer** : « Prêts à nous rejoindre ? » → « Prêt à nous rejoindre ? »
- [x] **Respect** : passer le numéro en constante et ajouter `tel:` (TODO `respect/page.tsx`)
- [x] **Boutique** : redirection (déjà corrigée)
- [x] **Contenus alignés sur le Figma** : politique de confidentialité (réécrite), mentions légales (SIREN, RNA, données & cookies), Respect (« Nos engagements », liens `tel:`), Bureau, Règles (comptage en 15 points), Histoire, Volant, 404, logos rouges du footer
- [x] **Histoire** : dates reprises du Figma (section « 2011-2013 », présidents « 2006-2011 » et « 2011-2013 »)
- [ ] **Respect** : fichiers manquants pour « Fiche de signalement (CDOS) » et « Associations en Gironde » (liens `/manque`)
- [x] **Politique / mentions** : texte du Figma conservé, y compris le « formulaire de contact » (absent du site : à ajouter ou à retirer du texte)
- [x] Arrondir les cartes de `/contact` et `/adherer` (Patch « Arrondir les bords »)

### 5. Assets et performance

- [x] `public/bureau/volant.svg` (3,8 Mo, PNG 4096×2734 embarqué) : réexporter en vrai SVG ou petit WebP
- [x] Supprimer les doublons : `public/contact/map.png` = `public/adherer/map.png`, `public/faq/1.png` = `public/contact/1.png`
- [x] Images : vrais `width`/`height` (16 images en `2000`/`5000` carrés) et prop `sizes`

### 6. Version responsive

Proposition construite uniquement à partir des maquettes mobiles (les frames desktop masquées du Figma ne servent pas de référence).

**Principes**

- Le mobile reste la base : on ajoute des classes `md:` / `lg:`, on ne duplique aucun composant et on n'utilise pas de media query en JavaScript.
- On garde le langage visuel mobile : cartes blanches arrondies, ombre légère, rouge, mêmes CTA. Le desktop réorganise, il ne redessine pas.
- La plupart des changements se font dans les composants partagés (`PageLayout`, `Parent`, `Navbar`, `Footer`) pour couvrir toutes les pages d'un coup.

**Breakpoints et gabarit**

| Nom | Largeur | Rôle |
|---|---|---|
| (base) | < 768 px | maquette mobile telle quelle |
| `md` | ≥ 768 px | tablette : grilles à 2 colonnes |
| `lg` | ≥ 1024 px | desktop : navbar horizontale, mises en page en colonnes |
| `xl` | ≥ 1280 px | on plafonne la largeur, rien de nouveau |

- Conteneur centré dans `PageLayout` : `mx-auto w-full max-w-6xl` (1152 px), marges `px-5 md:px-8 lg:px-10`.
- Texte courant limité à ~70 caractères par ligne (`max-w-prose`) pour rester lisible.

**Typographie**

Les tailles de `textVariants` passent en variables CSS (`--text-h1`, `--text-h2`, …) redéfinies dans `globals.css` aux breakpoints. Les composants ne changent pas.

| Style | Mobile (Figma) | `md` | `lg` |
|---|---|---|---|
| H1 (Darker Grotesque) | 58 / 40 | 72 / 56 | 96 / 72 |
| H2 (Space Grotesk) | 25 / 20 | 28 / 24 | 32 / 28 |
| H3 (Space Grotesk) | 21 / 20 | 22 / 22 | 24 / 24 |
| Texte, H4, CTA, secondaire | inchangés | inchangés | +1 px max |

**Composants**

- [ ] **Navigation (source unique)** : les liens sont regroupés dans `constantes/navbar.tsx` et lus par la navbar, le footer et `sitemap.ts`.
  - Adhérer
  - Le club : Bureau, Histoire, Partenaires, Boutique
  - Le bad : Règles du jeu, Guide du volant, Guide de la raquette, Respect & prévention
  - FAQ
  - Nous contacter
- [ ] **Navbar** : même carte blanche que sur mobile.
  - À partir de `lg`, les liens s'affichent en ligne : Adhérer · Le club ▾ · Le bad ▾ · FAQ, puis le CTA « Nous contacter ».
  - Les menus déroulants réutilisent `NavbarLink` (icône, titre, description), comme dans le menu burger.
  - Le burger est masqué à partir de `lg`.
  - Les menus déroulants s'ouvrent au clic et au clavier, pas seulement au survol.
- [ ] **Header et bannière** :
  - Sur mobile, le texte est suivi d'une image pleine largeur, comme aujourd'hui.
  - À partir de `lg`, la mise en page passe en 2 colonnes : texte à gauche (Bienvenue, H1, sous-titre, CTA), image arrondie à droite (`rounded-xl`, hauteur max ~420 px).
- [ ] **`Parent` (titre + blocs)** :
  - À partir de `lg`, la grille fait 12 colonnes : le `SingleTitle` occupe 4 colonnes à gauche et reste visible au défilement (`sticky`), les blocs occupent les 8 colonnes de droite.
  - Couvre Adhérer, Règles, Volant, Raquette, Respect, FAQ, Mentions et Politique sans toucher aux pages.
- [ ] **Nouveau composant `Section`** pour l'accueil : il regroupe un `Bloc` et son `ImageLegend`.
  - Sur mobile, ils s'empilent dans l'ordre actuel.
  - À partir de `lg`, ils passent sur 2 colonnes, et la prop `reverse` fait alterner l'image à gauche ou à droite d'une section à l'autre (zigzag).
- [ ] **Grilles de cartes** : `Membre` (Bureau) et `Partenaire` passent en `md:grid-cols-2 lg:grid-cols-3`.
- [ ] **`Caroussel`** : il reste en défilement horizontal sur mobile et tablette, avec `scroll-snap`. À partir de `lg`, il devient une grille de 3 photos.
- [ ] **`ImageLegend`** : `aspect-[4/5]` sur mobile, `aspect-[4/3]` à partir de `lg`.
- [ ] **Footer** :
  - Sur mobile, on garde le Figma.
  - En `md`, CLUB et RESSOURCES passent côte à côte.
  - À partir de `lg`, tout tient sur une ligne en 4 colonnes : logo et coordonnées, CLUB, RESSOURCES, réseaux. Les logos partenaires et le bandeau légal passent chacun sur une seule ligne.
- [ ] **Images** : prop `sizes` partout, par exemple `(min-width: 1024px) 50vw, 100vw` pour les images en colonne.

**Pages particulières**

- [ ] **Contact** : à partir de `lg`, 2 colonnes. À gauche, « Vous pouvez nous joindre » et les réseaux. À droite, l'adresse, la carte et les créneaux.
- [ ] **Bureau** : le texte « Quésaco ? » s'affiche dans la mise en page `Parent`, les membres en grille, les documents en ligne.
- [ ] **Histoire** : mise en page `Parent`. Les photos sont en grille 2 colonnes en `md` et 3 colonnes en `lg`. Les blocs `President` sont en grille 2 colonnes.
- [ ] **Boutique** : l'iframe HelloAsso est centrée dans le conteneur et limitée à `max-w-4xl`.
- [ ] **404** : centrée, H1 agrandi par les variables.

**Ordre de mise en œuvre** (après les étapes 1 à 5)

1. Variables typo et conteneur dans `PageLayout`
2. Constante de navigation unique, puis navbar desktop
3. Header et bannière
4. `Parent` en 12 colonnes (vérifier toutes les pages de texte)
5. `Section` et zigzag de l'accueil
6. Grilles de cartes, carrousel, `ImageLegend`
7. Footer
8. Pages particulières (Contact, Bureau, Histoire, Boutique, 404)
9. Vérification en 393, 768, 1024, 1280 et 1440 px, navigation au clavier, Lighthouse

**À éviter**

- Une version desktop qui ne ressemble plus au mobile (nouvelles couleurs, nouveaux composants)
- Des composants « Desktop » en double
- Afficher ou masquer du contenu selon la taille d'écran (le même contenu partout, seule la disposition change)
