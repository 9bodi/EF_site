import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { Award, BookOpen, Users, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre organisme — Élu Formation",
  description:
    "Découvrez Élu Formation, organisme agréé par le Ministère de l'Intérieur pour la formation des élus locaux. Notre mission : mieux accompagner ceux qui s'engagent.",
};

const dirigeants = [
  {
    name: "Alexandre Huau-Armani",
    role: "Président & co-fondateur",
    photo: "/img/AHA.jpg",
    bio: "Diplômé de Sciences Po Paris et de l'IAE Paris-Sorbonne (MBA), Alexandre est entrepreneur et co-fondateur d'une dizaine de sociétés à impact. Ancien maire adjoint de Vernon en charge de la Culture, du Tourisme et de la Ville numérique, et ancien collaborateur parlementaire à l'Assemblée nationale, il connaît de l'intérieur les réalités du mandat local. Directeur de l'École Supérieure de la CCI Portes de Normandie (ESCCI) pendant quatre ans, il met son expertise en ingénierie pédagogique et en pilotage d'organisations au service d'Élu Formation. Formateur à l'IAE de Caen et à l'IAE de Lille, il enseigne l'entrepreneuriat et l'innovation.",
  },
  {
    name: "Mickaël Vaillant",
    role: "Directeur du développement et de la formation",
    photo: "/img/MV.jpg",
    bio: "Spécialiste des politiques publiques territoriales, Mickaël a exercé en tant que Conseiller Économie, Enseignement supérieur, Recherche et Numérique auprès de Régions de France. Fort de son expérience au carrefour des collectivités, de l'enseignement supérieur et du numérique, il apporte à Élu Formation sa connaissance fine des enjeux des territoires et de leurs élus. Il pilote la stratégie pédagogique, le développement de l'offre de formation et les partenariats institutionnels.",
  },
];

export default function NotreOrganismePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              Mieux accompagner ceux qui s&apos;engagent
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Élu Formation est un organisme de formation agréé par le Ministère
              de l&apos;Intérieur, dédié aux élus locaux. Depuis 2020, nous
              accompagnons des centaines d&apos;élus et de collectivités partout en
              France avec des formations concrètes, efficaces et adaptées aux
              réalités du mandat.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophie */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Notre philosophie"
              centered
            />
            <div className="mt-8 space-y-5 text-gray-text leading-relaxed">
              <p>
                Dans notre société, dans notre République, les élus locaux sont en
                première ligne. Leur action, leur bilan et même leur personne sont
                soumis au jugement des concitoyens. Mais ces femmes et ces hommes,
                passionnés, engagés au service de leur territoire pour le bien
                commun, peuvent avoir le sentiment d&apos;être livrés à eux-mêmes.
              </p>
              <p>
                Alors que tout s&apos;accélère, que la charge mentale de chacun
                s&apos;accroît et que la flexibilité devient un modèle, les élus locaux
                doivent pouvoir bénéficier des meilleurs outils de formation. Des
                outils souples, efficaces, simples et rapides qui répondent à leurs
                attentes et aux exigences de leur fonction.
              </p>
              <p>
                Élu Formation est cet espace d&apos;échange et d&apos;apprentissage novateur
                et adapté aux besoins de chaque élu. Nous proposons des formats
                synthétiques de cours qui font appel à des principes pédagogiques
                permettant d&apos;assimiler rapidement un savoir et une compétence à
                partir de mises en situations concrètes.
              </p>
              <p className="font-medium text-navy text-lg">
                L&apos;engagement électif local est la force vive de notre démocratie.
                Élu Formation est le lieu d&apos;échange, de soutien et d&apos;apprentissage
                au service de cette force.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container>
          <SectionTitle
            title="Nos agréments et garanties"
            subtitle="Un cadre de qualité reconnu par l'État"
            centered
          />
          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Agrément ministériel",
                text: "Organisme agréé par le Ministère de l'Intérieur pour la formation des élus locaux (CNFEL).",
              },
              {
                icon: Award,
                title: "Certification Qualiopi",
                text: "Certification qualité au titre des actions de formation, gage de sérieux et de conformité.",
              },
              {
                icon: BookOpen,
                title: "Éligible DIFE",
                text: "Toutes nos formations sont finançables par le Droit Individuel à la Formation des Élus via Mon Compte Élu.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center border border-gray-200"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-navy font-heading text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dirigeants */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionTitle
            title="L'équipe Elu Formation"
            subtitle="Une équipe au service des élus locaux"
            centered
          />
          <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {dirigeants.map((person, i) => (
              <div
                key={i}
                className="bg-gray-warm rounded-2xl overflow-hidden border border-gray-200"
              >
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy font-heading">
                    {person.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">
                    {person.role}
                  </p>
                  <p className="text-sm text-gray-text leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Méthode */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container>
          <SectionTitle
            title="Notre méthode"
            subtitle="Des formations pensées pour le quotidien des élus"
            centered
          />
          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Des formations utiles et efficaces",
                text: "Des formats courts et denses, conçus pour des élus qui ont peu de temps. Chaque formation mêle apports théoriques, cas concrets et mises en situation.",
              },
              {
                icon: Users,
                title: "Des formateurs experts",
                text: "Juristes, financiers, communicants, médiateurs — tous spécialistes de l'action publique locale et pédagogues confirmés.",
              },
              {
                icon: Heart,
                title: "Un accompagnement de A à Z",
                text: "Votre conseiller formation vous guide dans le choix de la formation, le financement DIFE et le suivi post-formation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center border border-gray-200"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-navy font-heading text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <Container className="max-w-2xl">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Prêt à développer vos compétences d&apos;élu ?
          </h2>
          <p className="text-gray-300 mb-8">
            Prenez contact avec notre équipe pour identifier la formation qui
            correspond à vos besoins et vérifier vos droits au financement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Nous contacter
            </Button>
            <Button
              href="/formations"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Voir les formations
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
