import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Play,
  BookOpen,
  CheckCircle,
  Clock,
  Monitor,
  GraduationCap,
  Target,
  Video,
  PenTool,
  HelpCircle,
  ArrowRight,
  Smartphone,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "E-learning : Bien gérer son image et sa communication d'élu local",
  description:
    "Formation e-learning : 11 modules + introduction. Maîtrisez votre image et votre communication d'élu local. Vidéos, activités interactives, quiz. À votre rythme. 100% en ligne. Éligible DIFE.",
};

interface Module {
  number: number;
  title: string;
  isIntro?: boolean;
  description: string;
  points: string[];
}

const modules: Module[] = [
  {
    number: 0,
    title: "Introduction générale",
    isIntro: true,
    description:
      "Bienvenue dans cette formation en ligne pour apprendre à bien gérer son image et sa communication d'élu(e) local(e). Découvrez la structure du parcours, les objectifs et ce que vous allez apprendre.",
    points: [
      "Comprendre les objectifs de la formation",
      "Découvrir la structure en 11 modules",
      "Identifier les compétences que vous allez acquérir",
      "Prendre en main votre espace e-learning",
    ],
  },
  {
    number: 1,
    title: "Enjeux fondamentaux de la communication politique et publique",
    description:
      "Découvrez les notions fondamentales de la communication publique et politique. Comprenez pourquoi une communication maîtrisée est un allié puissant de l'action de l'élu local.",
    points: [
      "Distinguer communication publique et communication politique",
      "Identifier les enjeux spécifiques de la communication des élus locaux",
      "Comprendre la fonction tribunitienne de l'élu",
      "Appréhender les situations de prise de parole essentielles",
    ],
  },
  {
    number: 2,
    title: "Réputation, image et communication de soi",
    description:
      "Maîtrisez votre image publique et apprenez à gérer votre réputation en tant qu'élu. Découvrez les techniques pour une communication personnelle authentique et efficace.",
    points: [
      "Comprendre les composantes de l'image publique",
      "Gérer votre e-réputation et votre présence en ligne",
      "Construire un storytelling personnel cohérent",
      "Anticiper et gérer les atteintes à votre réputation",
    ],
  },
  {
    number: 3,
    title: "Définir les objectifs et les cibles de votre stratégie de communication",
    description:
      "Posez les bases d'une stratégie de communication solide en identifiant clairement vos objectifs et vos publics prioritaires.",
    points: [
      "Formuler des objectifs de communication SMART",
      "Cartographier vos parties prenantes",
      "Hiérarchiser vos cibles de communication",
      "Adapter vos messages à chaque audience",
    ],
  },
  {
    number: 4,
    title: "Le plan de communication",
    description:
      "Structurez votre communication avec un plan d'action concret, des outils adaptés et un calendrier réaliste.",
    points: [
      "Élaborer un plan de communication structuré",
      "Définir un calendrier éditorial",
      "Allouer les ressources et le budget",
      "Mesurer l'efficacité de vos actions",
    ],
  },
  {
    number: 5,
    title: "Les outils et techniques au service de votre stratégie de communication",
    description:
      "Découvrez les outils traditionnels et numériques à votre disposition pour diffuser efficacement vos messages.",
    points: [
      "Maîtriser les supports de communication print et digital",
      "Utiliser les outils de création de contenu",
      "Optimiser la diffusion de vos messages",
      "Choisir les bons canaux selon vos objectifs",
    ],
  },
  {
    number: 6,
    title: "Faire des discours et rédiger des messages impactants",
    description:
      "Perfectionnez vos compétences oratoires et rédactionnelles pour marquer les esprits lors de vos prises de parole.",
    points: [
      "Structurer un discours percutant",
      "Maîtriser les techniques de prise de parole en public",
      "Rédiger des communiqués et messages clairs",
      "Adapter votre ton et votre registre à chaque contexte",
    ],
  },
  {
    number: 7,
    title: "Quels moyens mobiliser pour votre communication d'élu local",
    description:
      "Identifiez les ressources humaines, financières et techniques à mobiliser pour une communication efficace à l'échelle locale.",
    points: [
      "Évaluer les ressources disponibles",
      "Constituer et animer une équipe de communication",
      "Optimiser votre budget communication",
      "S'appuyer sur les partenaires locaux",
    ],
  },
  {
    number: 8,
    title: "Bien communiquer sur les réseaux sociaux en tant qu'élu",
    description:
      "Maîtrisez les codes des réseaux sociaux pour développer votre présence en ligne et interagir efficacement avec vos administrés.",
    points: [
      "Choisir les bons réseaux sociaux selon vos objectifs",
      "Créer du contenu engageant et adapté",
      "Gérer les interactions et les commentaires",
      "Éviter les pièges et les bad buzz",
    ],
  },
  {
    number: 9,
    title: "Les relations presse et médias",
    description:
      "Apprenez à travailler avec les journalistes, préparer vos interventions médiatiques et tirer parti de la couverture presse.",
    points: [
      "Construire des relations durables avec les journalistes",
      "Rédiger des communiqués et dossiers de presse efficaces",
      "Préparer et réussir vos interviews",
      "Gérer les sollicitations médiatiques",
    ],
  },
  {
    number: 10,
    title: "Trois situations de communication particulières",
    description:
      "Apprenez à adapter votre communication dans des contextes spécifiques qui requièrent une approche sur mesure.",
    points: [
      "Communiquer en période électorale",
      "Gérer la communication intercommunale",
      "Communiquer sur des projets sensibles ou controversés",
      "Adapter votre posture selon le contexte",
    ],
  },
  {
    number: 11,
    title: "Communiquer en situation de crise",
    description:
      "Préparez-vous à faire face aux situations d'urgence et de crise. Apprenez à communiquer rapidement, efficacement et avec transparence.",
    points: [
      "Anticiper et préparer un plan de communication de crise",
      "Réagir rapidement et de manière structurée",
      "Gérer la pression médiatique en situation de crise",
      "Communiquer avec transparence et rassurer les citoyens",
    ],
  },
];

const methode = [
  {
    icon: Video,
    title: "Vidéo d'introduction",
    text: "Chaque module démarre par une vidéo qui pose le contexte, les enjeux et les concepts clés.",
  },
  {
    icon: BookOpen,
    title: "Points clés à retenir",
    text: "Une synthèse structurée des théories, concepts et bonnes pratiques à maîtriser.",
  },
  {
    icon: PenTool,
    title: "Activités interactives",
    text: "Des exercices pratiques et des mises en situation pour ancrer les apprentissages.",
  },
  {
    icon: HelpCircle,
    title: "Quiz de validation",
    text: "Un quiz à chaque fin de module pour valider vos acquis et débloquer le suivant.",
  },
];

const outcomes = [
  "Saisir les spécificités de la communication politique des élus locaux",
  "Construire une stratégie de communication performante",
  "Maîtriser votre image publique et votre e-réputation",
  "Mobiliser les bons outils et les techniques adaptées",
  "Prendre la parole pour défendre vos projets avec assurance",
  "Rédiger des messages et discours impactants",
  "Communiquer efficacement sur les réseaux sociaux",
  "Gérer les relations presse et les interviews",
  "Communiquer en situation de crise",
  "Répondre aux attaques de manière constructive",
];

export default function ElearningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="dife">DIFE éligible</Badge>
                <Badge variant="highlight">E-learning</Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
                Bien gérer son image et sa communication d&apos;élu(e) local(e)
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Entre défiance vis-à-vis des élus et des médias, diversité des
                sources d&apos;information, influence des réseaux sociaux…
                apprendre à gérer son image et à communiquer au quotidien quand
                on est élu est essentiel.
              </p>

              <p className="mt-4 text-rose leading-relaxed">
                Nul besoin d&apos;être un orateur né pour savoir communiquer en
                public. Avec de la méthode, les bons outils et de
                l&apos;entraînement, vous pourrez gérer votre image et
                communiquer en toutes circonstances.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Monitor, label: "100% en ligne", sub: "À votre rythme" },
                  { icon: Clock, label: "11 modules + intro", sub: "~3h au total" },
                  { icon: Smartphone, label: "24h/24", sub: "PC, tablette, mobile" },
                  { icon: Award, label: "Attestation", sub: "Fin de parcours" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 rounded-xl p-3 border border-white/10 text-center"
                  >
                    <item.icon className="w-5 h-5 text-red mx-auto mb-1" />
                    <p className="text-xs font-semibold">{item.label}</p>
                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  href="/contact?formation=e-learning-communication"
                  variant="primary"
                  size="lg"
                  subtitle="Prise en charge à 100 % via le DIFE"
                >
                  Je m&apos;inscris à cette formation
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  subtitle="Réponse sous 24h - Gratuit"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Être rappelé par un conseiller
                </Button>
              </div>
            </div>

            {/* Preview campus */}
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl border border-white/20 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-red flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold">Votre espace e-learning</p>
                    <p className="text-xs text-gray-400">
                      campus.eluformation.fr
                    </p>
                  </div>
                </div>

                {modules.slice(0, 7).map((m) => (
                  <div
                    key={m.number}
                    className="flex items-center gap-3 py-2.5 border-b border-white/10 last:border-0"
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold ${
                        m.isIntro
                          ? "bg-white/20 text-[9px] text-gray-300"
                          : "bg-white/10 text-xs text-red"
                      }`}
                    >
                      {m.isIntro ? "Intro" : m.number}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-medium truncate">
                        {m.title}
                      </p>
                      <div className="mt-1 h-1 bg-white/10 rounded-full">
                        <div
                          className="h-1 bg-red rounded-full"
                          style={{
                            width: m.isIntro
                              ? "100%"
                              : m.number === 1
                                ? "60%"
                                : "0%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-400 text-center pt-3">
                  + {modules.length - 7} modules supplémentaires
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Méthode pédagogique */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            title="Chaque module suit la même structure"
            subtitle="Une pédagogie interactive en 4 étapes pour un apprentissage progressif et efficace"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methode.map((m, i) => (
              <Card key={m.title} className="text-center relative">
                {i < methode.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-rose z-10" />
                )}
                <div className="w-14 h-14 rounded-2xl bg-gray-light flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2">{m.title}</h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {m.text}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Programme - Introduction + 11 modules */}
      <section className="py-16 md:py-24 bg-gray-light">
        <Container>
          <SectionTitle title="Programme complet - Introduction + 11 modules" />
          <div className="space-y-4 max-w-4xl mx-auto">
            {modules.map((m) => (
              <div
                key={m.number}
                className={`bg-white rounded-2xl p-6 md:p-8 border shadow-sm ${
                  m.isIntro ? "border-rose-light" : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className={`w-10 h-10 rounded-full font-bold flex items-center justify-center shrink-0 ${
                      m.isIntro
                        ? "bg-navy text-white text-[10px]"
                        : "bg-red text-white text-lg"
                    }`}
                  >
                    {m.isIntro ? "Intro" : m.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy font-heading">
                      {m.isIntro ? m.title : `Module ${m.number} - ${m.title}`}
                    </h3>
                    <p className="mt-2 text-gray-text leading-relaxed text-sm">
                      {m.description}
                    </p>
                  </div>
                </div>

                <div className="ml-14 grid sm:grid-cols-2 gap-2">
                  {m.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-dife shrink-0 mt-0.5" />
                      <span className="text-gray-text">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Acquis */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <SectionTitle title="À l'issue de cette formation, vous saurez" />
          <div className="grid md:grid-cols-2 gap-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gray-light rounded-xl p-4"
              >
                <CheckCircle className="w-5 h-5 text-red shrink-0 mt-0.5" />
                <p className="text-sm text-navy font-medium">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Infos pratiques */}
      <section className="py-16 md:py-24 bg-gray-light">
        <Container className="max-w-3xl">
          <SectionTitle title="Informations pratiques" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Monitor,
                title: "Format",
                text: "100 % en ligne (e-learning). Accessible 24h/24 depuis votre ordinateur, tablette ou smartphone.",
              },
              {
                icon: Clock,
                title: "Durée",
                text: "1 introduction + 11 modules - environ 3 heures au total. Avancez à votre rythme, sans contrainte de date.",
              },
              {
                icon: GraduationCap,
                title: "Évaluation & attestation",
                text: "Quiz de validation à la fin de chaque module. Attestation de réussite délivrée à l'issue du parcours complet.",
              },
              {
                icon: Target,
                title: "Financement",
                text: "Éligible DIFE - prise en charge à 100 % via Mon Compte Élu. Notre équipe vous accompagne dans les démarches.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <item.icon className="w-6 h-6 text-red mb-3" />
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-navy mb-3">
              Détails complémentaires
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-text">
              <div>
                <p className="font-medium text-navy mb-1">Public concerné</p>
                <p>Élus locaux (maires, adjoints, conseillers municipaux)</p>
              </div>
              <div>
                <p className="font-medium text-navy mb-1">Prérequis</p>
                <p>Aucun - formation accessible à tous les niveaux</p>
              </div>
              <div>
                <p className="font-medium text-navy mb-1">
                  Modalités d&apos;accès
                </p>
                <p>
                  Inscription via Élu Formation. Accès sous 7 jours après
                  validation.
                </p>
              </div>
              <div>
                <p className="font-medium text-navy mb-1">Accessibilité</p>
                <p>
                  Formation accessible aux personnes en situation de handicap
                  (adaptations possibles).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy text-center">
        <Container className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
            Prêt(e) à maîtriser votre communication d&apos;élu ?
          </h2>
          <p className="text-gray-300 mb-3">
            Commencez la formation dès aujourd&apos;hui - 11 modules +
            introduction, à votre rythme, 100 % en ligne.
          </p>
          <p className="text-rose mb-8">
            Prise en charge à 100 % via le DIFE - aucun reste à charge dans la
            majorité des cas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact?formation=e-learning-communication"
              variant="primary"
              size="lg"
              subtitle="Prise en charge DIFE - Confirmation immédiate"
            >
              Je m&apos;inscris à cette formation
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              subtitle="Réponse sous 24h - Gratuit"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Être rappelé par un conseiller
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
