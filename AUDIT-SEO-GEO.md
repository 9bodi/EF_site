# Audit SEO + GEO — eluformation.fr

Date : 2 novembre 2026 · Branche : `seo-geo-audit` · Méthode : lecture du code source (Next.js 16, App Router, hébergement Netlify) et build de production local. Aucun outil payant, aucune clé API.

---

## 1. Résumé

Le site est techniquement propre (pages statiques, `lang="fr"`, titres uniques, JSON-LD Organisation et Course déjà présents) et son contenu blog vise les bonnes requêtes (DIFE, nouvel élu). Mais il était peu lisible pour les moteurs et les IA, et surtout **il se contredit sur les faits que les IA cherchent à citer**.

Les 3 problèmes les plus graves :

1. **Montants du DIFE contradictoires** d'une page à l'autre : « 800 €/an », « 400 €/an, plafond 800 € » et « 600 €/an, plafond 1 200 € ». Une IA ne cite pas une source qui se contredit, et le blog qualifie lui-même de « faux » le chiffre affiché sur la page d'accueil.
2. **Le fichier robots était mal nommé** (`src/app/robot.ts`) : `/robots.txt` n'était pas généré, donc le sitemap n'était pas déclaré aux robots. **Corrigé sur la branche.**
3. **Signaux de confiance invérifiables ou incohérents** : aucun numéro d'agrément ministériel affiché, « certifié Qualiopi » sans numéro de certificat, deux numéros de déclaration d'activité différents (footer et mentions légales), et aucune page de référence sur le « droit à la formation des élus ».

---

## 2. Constats classés par gravité

Légende : 🔴 critique · 🟠 important · 🟡 mineur · ✅ corrigé sur la branche

### 🔴 Critique

| # | Constat | Où | Statut |
|---|---|---|---|
| C1 | Montants DIFE contradictoires : « 800 € par an » (FAQ de toutes les fiches formation, page d'accueil, guide nouvel élu), « 400 €/an plafond 800 € » (article DIFE d'avril), « 600 €/an plafond 1 200 € » (simulateur, financement, article d'octobre). | `src/components/formations/FormationFAQ.tsx:17`, `src/components/sections/DifeBlock.tsx:33`, `src/components/sections/ElectionBanner.tsx:44`, `src/app/blog/guide-nouvel-elu-2026/page.tsx:58,119`, `src/app/blog/dife-elu-tout-comprendre-financer-formation/page.tsx:8,28-29,45-47,96-100` | TODO contenu : choisir le montant officiel en vigueur, le sourcer, puis l'harmoniser partout |
| C2 | `robot.ts` au lieu de `robots.ts` : `/robots.txt` absent du site. | `src/app/robot.ts` | ✅ renommé, robots IA autorisés explicitement |
| C3 | Agrément ministériel annoncé partout mais sans numéro, ni date, ni lien vers la liste officielle. | footer, `/notre-organisme`, JSON-LD | TODO : numéro et date d'agrément |
| C4 | Deux numéros de déclaration d'activité : `28 27 02957 27` (footer, via `SITE.legal.qualiopi`) et `32591105559` (mentions légales et `/notre-organisme`). Le préfixe « 32 » ne correspond normalement pas à la Normandie, qui est pourtant indiquée. | `src/lib/constants.ts:17`, `src/app/mentions-legales/page.tsx:53`, `src/app/notre-organisme/page.tsx:187` | TODO : numéro exact |
| C5 | « Certifié Qualiopi » affiché sans numéro de certificat, sans certificateur et sans lien. La constante `qualiopi` contient en fait un numéro de déclaration d'activité. | `src/components/sections/OrganismePreview.tsx:43` | TODO : certificat Qualiopi (ou retrait de la mention) |
| C6 | Il manque une page « Droit à la formation des élus », alors que c'est la requête phare de la catégorie et que les sources citées par les IA en ont une. | — | Brouillon prêt : `drafts/droit-formation-elus.md` |

### 🟠 Important

| # | Constat | Où | Statut |
|---|---|---|---|
| I1 | Titres de fiches formation avec le nom de marque en double (« … \| Élu Formation \| Élu Formation »), jusqu'à environ 117 caractères. | `src/data/formations.ts` + template du layout | ✅ suffixe supprimé, titres ramenés à ≤ 63 caractères |
| I2 | Aucune balise canonical. | toutes les pages | ✅ canonical par page |
| I3 | Aucune balise Open Graph (partages LinkedIn ou Facebook sans aperçu). | `src/app/layout.tsx` | ✅ OG global (site_name, locale, type, image). TODO : une vraie image 1200×630 |
| I4 | Page contact sans metadata propre (composant client) : elle reprenait le titre de l'accueil, d'où un titre dupliqué. | `src/app/contact/page.tsx` | ✅ `src/app/contact/layout.tsx` |
| I5 | Course JSON-LD avec `price: "0"`, ce qui est faux : la formation est payante, mais financée. Google peut considérer cela comme un balisage trompeur. | `src/components/formations/FormationPage.tsx` | ✅ offre retirée. TODO : tarif réel pour remettre un `Offer` |
| I6 | FAQ des fiches formation : les réponses ne sont pas dans le HTML tant que l'internaute n'a pas cliqué (rendu conditionnel). Moteurs et IA ne voient que les questions. | `src/components/formations/FormationFAQ.tsx:58` | À faire **après** correction de C1, sinon on rend crawlable le chiffre faux de 800 €/an |
| I7 | Placeholders visibles en production sur les 5 articles du blog : « [ Capture d'écran stylisée… ] », « [ Visuel article ] ». | `src/components/blog/ArticleLayout.tsx:49-53` | TODO : vraies images, ou masquer le bloc |
| I8 | Page `/formations/gestion-conflits` déclarée, mais formation absente des données : la page renvoie un 404. Une image de 2,3 Mo existe pourtant. | `src/app/formations/gestion-conflits/page.tsx` | TODO : contenu de la formation, ou suppression de la route |
| I9 | Page `/services/assurance-elu` orpheline (aucun lien interne) et absente du sitemap. `/notre-organisme/references` absente du sitemap. | `src/app/sitemap.ts` | ✅ ajoutées au sitemap. Lien interne vers assurance-élu : à décider |
| I10 | Entité floue sur la page d'accueil : le H1 (« Nouveaux élu.e.s : formez-vous… ») ne dit pas ce qu'est Élu Formation. Le mot « agréé » n'apparaît pas dans le premier écran. | `src/components/sections/Hero.tsx` | Proposition en §3 (contenu) |
| I11 | Description de l'organisme différente partout : « organisme de formation agréé, spécialisé… », « agréé par le Ministère de l'Intérieur », « agréé par l'État depuis 2020 », « Institut de formation agréé par l'État », « l'organisme de référence ». | layout, constants, footer, intra, preview | Phrase unique proposée en §3 |
| I12 | Images sources très lourdes : `organisme-preview.png` 18 Mo, une dizaine de PNG de plus de 2 Mo (hero, elections, intra, team-building, toutes les formations). `next/image` les redimensionne, mais la première transformation est lente et coûte de la bande passante Netlify. | `public/img/` | TODO : recompresser en WebP/AVIF (moins de 300 Ko). Squoosh est gratuit |
| I13 | Chiffres non sourcés et incohérents : « 95 % d'élus satisfaits », « + de 500 élus formés », « 200 collectivités », « des centaines d'élus ». | `src/lib/constants.ts:22-27`, `/notre-organisme`, `/notre-organisme/references` | TODO : source et date de chaque chiffre |
| I14 | Témoignages (prénom + initiale, commune anonymisée) : authenticité et consentement à confirmer. Le témoignage par défaut est réutilisé sur les fiches sans témoignage propre. | `src/data/testimonials.ts`, `FormationTestimonial.tsx:7` | TODO : confirmer qu'ils sont réels |

### 🟡 Mineur

| # | Constat | Statut |
|---|---|---|
| M1 | Redirections (`/services/conseil`, `/formations-pour-ma-commune/intra`, etc.) faites avec `redirect()` dans une page, ce qui donne une redirection temporaire. Mieux : `redirects()` permanentes dans `next.config.ts`. | À faire |
| M2 | Logos partenaires : alt « Partenaire 1…8 », balise `<img>` brute sans lazy-loading. | ✅ lazy-loading + TODO noms réels |
| M3 | JSON-LD sans échappement de `<` (recommandation Next.js). | ✅ |
| M4 | `duration` du Course (« 4h + 1h en tutorat ») n'est pas au format ISO 8601 (`PT5H`). | TODO : durée exacte |
| M5 | Pas de JSON-LD `Article` sur les billets de blog (dates uniquement en texte, « Avril 2026 »). | À faire (dates ISO nécessaires) |
| M6 | Titres longs (plus de 65 caractères avec suffixe) : séminaire intra, assurance, références, simulateur, la plupart des articles de blog. | À raccourcir (contenu) |
| M7 | Formulaire contact : les `<label>` ne sont pas reliés aux champs (`htmlFor`/`id` absents). | À faire (accessibilité) |
| M8 | `sitemap.lastModified` recalculé à chaque build (toutes les pages semblaient modifiées à chaque déploiement). | ✅ supprimé |
| M9 | Lint : 6 erreurs préexistantes (guillemets non échappés dans CGV et mentions légales), sans lien avec cet audit. | Info |
| M10 | Header en composant client et carrousel partenaires en framer-motion : JS supplémentaire au chargement. Impact modéré. | Info |

### Points positifs

- `lang="fr"`, favicon et apple-touch-icon présents, `metadataBase` défini.
- Toutes les pages sont pré-rendues en statique : HTML complet, bon pour les robots IA qui n'exécutent pas le JavaScript.
- Un seul H1 par page, hiérarchie H2/H3 globalement logique ; les articles utilisent déjà des H2 en forme de question.
- Alt présents sur toutes les images de contenu.
- Article « DIFE 2026 » bien structuré (tableau avant/après, questions). C'est le meilleur candidat à la citation, une fois les chiffres sourcés.

---

## 3. Plan d'action priorisé

Impact : ★★★ fort · Effort : S (moins d'une heure) / M (une demi-journée) / L (plus d'un jour)

| Priorité | Action | Impact | Effort | Qui |
|---|---|---|---|---|
| 1 | Fixer le montant officiel du DIFE (source + date), l'harmoniser dans les 8 emplacements de C1 et ajouter « Source : … , mis à jour le … » | ★★★ | S | Contenu (vous) puis code |
| 2 | Fusionner sur `main` et déployer les corrections techniques de la branche (robots, sitemap, meta, JSON-LD) | ★★★ | S | Code (après votre validation) |
| 3 | Afficher numéro et date d'agrément ministériel, numéro de déclaration d'activité unique, certificat Qualiopi (ou retirer la mention) | ★★★ | S | Vous (infos) puis code |
| 4 | Publier la page « Droit à la formation des élus » à partir du brouillon, après vérification de chaque TODO, avec FAQPage | ★★★ | M | Contenu puis code |
| 5 | Page d'accueil : H1 et premier paragraphe qui définissent l'entité (proposition ci-dessous) | ★★ | S | Contenu |
| 6 | Rendre les réponses de la FAQ formation présentes dans le HTML et ajouter FAQPage (après le point 1) | ★★ | S | Code |
| 7 | Inscription Search Console et Bing Webmaster, envoi du sitemap | ★★ | S | Vous |
| 8 | Actions hors-site du §4 (listes officielles, Google Business Profile, LinkedIn, Wikidata) | ★★★ | M | Vous |
| 9 | Remplacer les placeholders photo du blog ; ajouter JSON-LD `Article` avec dates ISO | ★★ | M | Contenu + code |
| 10 | Page formateurs (noms, parcours, mandats exercés), pour l'E-E-A-T et la citation | ★★ | M | Contenu |
| 11 | Recompresser les images lourdes (I12) | ★★ | S | Code |
| 12 | Gestion-conflits : publier ou supprimer ; lien interne vers assurance-élu | ★ | S | Contenu + code |
| 13 | Redirections permanentes dans `next.config.ts` ; labels du formulaire | ★ | S | Code |
| 14 | `llms.txt` (voir ci-dessous) | ★ (non prouvé) | S | Code |
| 15 | Nettoyage de l'écriture inclusive (§7) | ★ | S | Code, après votre accord |

**Phrase d'entité unique proposée**, à reprendre à l'identique sur l'accueil, le footer, les mentions légales, le JSON-LD, LinkedIn, Google Business Profile et Wikidata :

> Élu Formation est un organisme de formation des élus locaux agréé par le ministère de l'Intérieur (agrément n° `TODO`), basé à Vernon (Eure), qui forme les élus municipaux, intercommunaux, départementaux et régionaux en visioconférence et en présentiel, avec un financement possible par le DIFE ou par la collectivité.

**H1 d'accueil proposé** (exemple) : « Formation des élus locaux : organisme agréé, financement DIFE ». L'accroche actuelle passe alors en sous-titre.

**Brouillon `llms.txt`** (à placer dans `public/llms.txt`). L'effet de ce fichier sur les IA n'est pas prouvé à ce jour, mais il est gratuit et sans risque :

```
# Élu Formation

> Organisme de formation des élus locaux agréé par le ministère de l'Intérieur (agrément n° TODO), basé à Vernon (Eure). Formations en visioconférence, en présentiel et en e-learning, finançables par le DIFE (Mon Compte Élu) ou par le budget formation de la collectivité.

## Formations
- [Catalogue des formations](https://eluformation.fr/formations)
- [Fondamentaux du mandat](https://eluformation.fr/formations/fondamentaux-mandat)
- [Budget et finances locales](https://eluformation.fr/formations/budget-municipal)
- [Prise de parole en public](https://eluformation.fr/formations/prise-de-parole)
- [Séminaire intra-collectivité](https://eluformation.fr/formations-pour-ma-commune)

## Financement
- [Financer sa formation d'élu](https://eluformation.fr/financement-formation-elu)
- [DIFE 2026 : montants et mode d'emploi](https://eluformation.fr/blog/dife-2026-montant-calcul-mode-emploi)

## Organisme
- [Notre organisme et agrément](https://eluformation.fr/notre-organisme)
- [Mentions légales](https://eluformation.fr/mentions-legales)
```

---

## 4. Actions hors-site gratuites (à faire à la main)

| Action | Détail | Fait ? |
|---|---|---|
| Liste officielle des organismes agréés | Vérifier sur collectivites-locales.gouv.fr que « Élu Formation » ou « Place de la République » y figure avec le bon nom, la bonne adresse et la bonne date. Le nom affiché doit correspondre à celui du site. Faire un lien vers cette liste depuis `/notre-organisme`. | ☐ |
| Mon Compte Formation / Mon Compte Élu | Vérifier la fiche organisme et chaque formation sur moncompteformation.gouv.fr : intitulés identiques au site, descriptions complètes, lien vers eluformation.fr. | ☐ |
| formations-des-elus.fr | Vérifier ou créer la fiche organisme et les formations. | ☐ |
| Google Business Profile | Créer ou compléter la fiche (catégorie « Centre de formation »), avec la description d'entité unique, le site, le téléphone, les horaires et des photos. Demander des avis aux élus formés. | ☐ |
| Page LinkedIn | Vérifier que `linkedin.com/company/eluformation` existe et utilise la même description. Publier un résumé de chaque article de blog. | ☐ |
| Wikidata | Créer un élément « Élu Formation » (organisme de formation, pays France, siège Vernon, site officiel, identifiant SIREN 892385949, compte LinkedIn). C'est la source d'entité que lisent les IA. Respecter les règles de notabilité de Wikidata (des sources externes aident). | ☐ |
| Annuaires gratuits | Bing Places, Pages Jaunes, annuaire Qualiopi (si certifié). Même nom, adresse et téléphone partout. | ☐ |
| Presse territoriale | Proposer une tribune ou des chiffres sourcés sur le DIFE à La Gazette des communes, Maire info, Courrier des maires, et à la presse régionale (Eure/Normandie). | ☐ |
| Associations d'élus | Associations départementales des maires (AMF départementales) : proposer une intervention, un webinaire ou un guide DIFE gratuit, contre un lien depuis leur site. | ☐ |
| Search Console + Bing Webmaster | Envoyer `https://eluformation.fr/sitemap.xml` une fois la branche déployée. | ☐ |

---

## 5. Liste des TODO (informations que vous devez fournir)

1. **Montant officiel actuel du DIFE** : montant annuel, plafond, date d'entrée en vigueur, texte source (décret ou arrêté). Également à vérifier : le coût horaire maximal (80 € puis 100 € HT ?) et « l'arrêté du 28 août 2026 » cité dans le simulateur.
2. **Numéro et date de l'agrément ministériel** (formation des élus).
3. **Numéro de déclaration d'activité exact** : `32591105559` ou `28 27 02957 27` ? Et préfecture de région d'enregistrement.
4. **Certification Qualiopi** : numéro, certificateur, date de validité, ou confirmation qu'il faut retirer la mention.
5. **Sources des chiffres** : 95 % de satisfaction, 500+ élus formés, 200+ collectivités, « depuis 2020 » (date de création effective ?).
6. **Témoignages** : confirmation qu'ils sont réels et publiés avec consentement.
7. **Noms des 8 partenaires** (alt des logos) et accord pour afficher leurs logos.
8. **URL des réseaux sociaux** : la page LinkedIn existe-t-elle ? Facebook (présent dans `constants.ts` mais affiché nulle part) ?
9. **Tarifs réels** des formations, pour un `Offer` correct dans le JSON-LD.
10. **Durée exacte** de chaque formation (format ISO).
11. **Formateurs** : noms, parcours, mandats exercés.
12. **Image de partage** 1200×630 (logo + accroche).
13. **Photos du blog** (5 articles).
14. **Formation « Gestion des conflits »** : contenu à fournir, ou suppression.
15. **Brouillon « Droit à la formation »** : vérifier chaque `TODO: vérifier` dans `drafts/droit-formation-elus.md`.
16. **Formulaire contact** : changer « Adjoint(e) » en « Adjoint » modifie la valeur envoyée à eTarget. Vos segments ou filtres eTarget en dépendent-ils ?
17. **Emails transactionnels** : ils sont rédigés dans eTarget (pas dans le code). Le nettoyage de l'écriture inclusive y est à faire à la main.

---

## 6. Mesurer les progrès gratuitement

**Google Search Console** (gratuit) :
- Performances : requêtes « formation des élus », « DIFE élu », « droit à la formation des élus », « organisme agréé formation élus » (impressions, clics, position).
- Rapport sur l'IA générative / AI Overviews, s'il est disponible pour la propriété : impressions et clics issus des réponses IA.
- Pages : vérifier que les 27 URL du sitemap sont indexées.
- Améliorations : FAQ, fil d'Ariane et Course détectés sans erreur.
- Outils de test gratuits : search.google.com/test/rich-results et validator.schema.org.

**Bing Webmaster Tools** (gratuit) : Copilot et ChatGPT s'appuient en partie sur l'index Bing.

**Test manuel mensuel** : poser les mêmes questions, en navigation privée et sans être connecté si possible, le premier lundi de chaque mois.

Questions de référence :
1. Qu'est-ce que le droit à la formation des élus locaux ?
2. Combien vaut le DIFE d'un élu en 2026 ?
3. Comment utiliser Mon Compte Élu pour financer une formation ?
4. Quels organismes de formation des élus sont agréés ?
5. Quelle formation suivre quand on est nouvel élu municipal ?
6. Formation prise de parole pour élus locaux finançable par le DIFE ?

| Mois | Question | ChatGPT : cité ? (O/N) / lien ? | Claude | Gemini | Perplexity | Google AI Overview | Sources citées à la place | Remarques |
|---|---|---|---|---|---|---|---|---|
| 2026-11 | Q1 | | | | | | | |
| 2026-11 | Q2 | | | | | | | |
| 2026-11 | Q3 | | | | | | | |
| 2026-11 | Q4 | | | | | | | |
| 2026-11 | Q5 | | | | | | | |
| 2026-11 | Q6 | | | | | | | |

Point de départ (scan I AM RANK) : 0 citation sur les 5 IA.

---

## 7. Écriture inclusive — liste avant / après (NON appliquée, en attente de votre accord)

Recherche lancée sur `src/` (`.tsx`, `.ts`), hors `node_modules`, `.next`, `public`. Formes recherchées : point médian, point (`élu.e.s`), parenthèses (`élu(e)`, `(ère)`), barre oblique et doublets. Aucune occurrence dans `public/`, ni dans les routes API.

| # | Fichier:ligne | Avant | Après (proposé) |
|---|---|---|---|
| 1 | `src/components/sections/Hero.tsx:18` (H1 accueil) | Nouveaux élu.e.s : | Nouveaux élus : — *ou doublet assumé : « Nouvelles élues, nouveaux élus : »* ⚑ |
| 2 | `src/app/notre-organisme/page.tsx:22` (H1) | accompagner celles et ceux qui s'engagent | accompagner les élus qui s'engagent (ajoute le mot-clé « élus » dans le H1) — *ou garder ce doublet* ⚑ |
| 3 | `src/app/contact/page.tsx:10` | Adjoint(e) | Adjoint ⚠ valeur envoyée à eTarget |
| 4 | `src/app/contact/page.tsx:11` | Conseiller(e) municipal(e) | Conseiller municipal ⚠ valeur envoyée à eTarget |
| 5 | `src/app/financement-formation-elu/simulateur/page.tsx:9` | Conseiller(ère) municipal(e) | Conseiller municipal |
| 6 | `…/simulateur/page.tsx:11` | Adjoint(e) au maire | Adjoint au maire |
| 7 | `…/simulateur/page.tsx:12` | Conseiller(ère) départemental(e) | Conseiller départemental |
| 8 | `…/simulateur/page.tsx:13` | Conseiller(ère) régional(e) | Conseiller régional |
| 9 | `…/simulateur/page.tsx:17` | Élu(e) en mars 2026 | Élu en mars 2026 |
| 10 | `…/simulateur/page.tsx:18` | Réélu(e) en mars 2026 | Réélu en mars 2026 |
| 11 | `…/simulateur/page.tsx:19` | Non réélu(e) | Non réélu |
| 12 | `src/app/financement-formation-elu/page.tsx:175` | Vous êtes bloqué(e) ? | Un blocage ? (tournure neutre) |
| 13 | `src/app/blog/dife-elu-tout-comprendre-financer-formation/page.tsx:96` | Si vous avez été élu(e) en mars 2026 | Si vous avez été élu en mars 2026 |
| 14 | `…/dife-elu-tout-comprendre-financer-formation/page.tsx:98` | Si vous avez été réélu(e) | Si vous avez été réélu |
| 15 | `src/app/blog/prise-de-parole-en-public-elu-local/page.tsx:18` (placeholder visible) | Élu(e) en train de prendre la parole | Élu en train de prendre la parole |
| 16 | `src/app/blog/reseaux-sociaux-elus-par-ou-commencer/page.tsx:26` | Vous êtes élu(e) local(e) | Vous êtes élu local |
| 17 | `src/app/blog/guide-nouvel-elu-2026/page.tsx:8` (meta description) | Vous venez d'être élu(e) lors des municipales | Vous venez d'être élu lors des municipales |
| 18 | `…/guide-nouvel-elu-2026/page.tsx:26` | Vous avez été élu(e) en mars dernier | Vous avez été élu en mars dernier |
| 19 | `src/app/blog/dife-2026-montant-calcul-mode-emploi/page.tsx:25` | Vous avez été élu(e) ou réélu(e) | Vous avez été élu ou réélu |
| 20 | `…/dife-2026-montant-calcul-mode-emploi/page.tsx:84` | été élu(e) auparavant | été élu auparavant |
| 21 | `…/dife-2026-montant-calcul-mode-emploi/page.tsx:87` (H3) | Réélu(e) en mars 2026 | Réélu en mars 2026 |
| 22 | `…/dife-2026-montant-calcul-mode-emploi/page.tsx:101` (H3) | Non réélu(e) | Non réélu |
| 23 | `src/app/e-learning/page.tsx:44` | sa communication d'élu(e) local(e) | sa communication d'élu local |
| 24 | `src/app/e-learning/page.tsx:236` | sa communication d'élu(e) local(e) | sa communication d'élu local |
| 25 | `src/app/e-learning/page.tsx:520` | Prêt(e) à maîtriser | Prêt à maîtriser |
| 26 | `src/components/formations/FormationCTA.tsx:28` (toutes les fiches) | Prêt(e) à vous former ? | Prêt à vous former ? |
| 27 | `src/components/sections/ElectionBanner.tsx:25` (H2 accueil) | Vous avez été élu(e) en mars 2026 | Vous avez été élu en mars 2026 |
| 28 | `src/data/formations.ts:258` (meta description) | Vous venez d'être élu(e) en mars 2026. | Vous venez d'être élu en mars 2026. |
| 29 | `src/data/formations.ts:260` | Vous venez d'être élu(e) en mars 2026. | Vous venez d'être élu en mars 2026. |

⚑ = doublet possible dans une accroche forte : à vous de choisir (au maximum ces deux-là).
Accords : aucun adjectif, participe ou pronom ne dépend de ces termes ailleurs dans les phrases concernées. Vérifié ligne par ligne.

**Faux positifs écartés** :
- `src/app/cgv/page.tsx:41` « accompagné(e) le cas échéant » : accord grammatical avec « bulletin » (masculin) ou « convention » (féminin) dans un texte juridique. Ce n'est pas de l'écriture inclusive ; je n'y touche pas.
- `onChange={(e) => …}`, `.map((e) => …)` : code.
- Formes féminines réelles (« Adjointe aux finances », « 1ère adjointe » dans les témoignages) : conservées.
- **Emails transactionnels** : gérés dans eTarget, hors du code. À revoir à la main.

---

## Annexe — commits techniques sur la branche `seo-geo-audit`

1. `SEO : robots.ts …` : `robot.ts` renommé en `robots.ts` ; GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended et Applebot-Extended explicitement autorisés ; `/api/` toujours bloqué.
2. `SEO : sitemap …` : ajout de `/notre-organisme/references` et `/services/assurance-elu` ; suppression de `lastModified` recalculé à chaque build.
3. `SEO : meta …` : titres des formations sans double suffixe (≤ 63 caractères), canonical sur chaque page, Open Graph global, metadata dédiées à la page contact.
4. `GEO : JSON-LD …` : `@graph` Organization + WebSite avec `@id`, Course relié à l'organisation et sans prix fictif, BreadcrumbList sur les fiches formation, FAQPage sur `/financement-formation-elu`, échappement de `<`.
5. `SEO : logos partenaires …` : lazy-loading + TODO pour les noms réels.

Vérifié : `tsc --noEmit` sans erreur, `next build` OK, `/robots.txt` et `/sitemap.xml` (27 URL) générés, balises title, canonical et og vérifiées dans le HTML produit.
