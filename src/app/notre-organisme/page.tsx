import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Award, BookOpen, Users, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre organisme - Élu Formation",
  description:
    "Découvrez Élu Formation, organisme agréé par le Ministère de l'Intérieur pour la formation des élus locaux. Depuis 2020, des centaines d'élus accompagnés partout en France.",
};

export default function NotreOrganismePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight mb-6">
              Notre vocation : accompagner celles et ceux qui s&apos;engagent
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Être élu local, c&apos;est agir chaque jour pour son territoire, souvent face à des
              sujets nouveaux. Cela demande d&apos;apprendre en permanence : comprendre les règles,
              prendre des décisions éclairées et répondre aux attentes des habitants.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Depuis 2020, Élu Formation accompagne des centaines d&apos;élus et de collectivités
              partout en France avec des formations pratiques, pensées pour les réalités du mandat.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Agréé par le Ministère de l&apos;Intérieur, notre organisme vous aide à gagner en
              repères, à monter en compétence et à exercer votre rôle d&apos;élu avec confiance.
            </p>
          </div>
        </Container>
      </section>

      {/* Bandeau chiffres */}
      <section className="bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {[
              { num: "Depuis 2020", label: "au service des élus" },
              { num: "Des centaines", label: "d'élus accompagnés" },
              { num: "Agréé", label: "Ministère de l'Intérieur" },
            ].map((stat, i) => (
              <div key={i} className="py-6 text-center">
                <p className="text-xl md:text-2xl font-bold text-navy font-heading">{stat.num}</p>
                <p className="text-sm text-gray-text mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Le mot du fondateur */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading text-center mb-12">
            Les mots de l&apos;équipe dirigeante
          </h2>

         <div className="grid md:grid-cols-2 gap-10">
  {/* Alexandre */}
  <div className="bg-gray-warm rounded-2xl border border-gray-200 p-6">
    <div className="flex items-start gap-5">
      <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
        <Image
          src="/img/AHA.jpg"
          alt="Alexandre Huau-Armani"
          fill
          className="object-cover object-top"
        />
      </div>
      <div>
        <p className="font-bold text-navy">Alexandre Huau-Armani</p>
        <p className="text-sm text-gray-text mb-3">Fondateur et président, ancien maire adjoint</p>
      </div>
    </div>
    <blockquote className="text-gray-text leading-relaxed italic mt-4">
      &laquo; J&apos;ai créé Élu Formation avec une conviction : les élus locaux méritent
      d&apos;être accompagnés à la hauteur de leur engagement. Un mandat demande de
      maîtriser des sujets nombreux, parfois complexes, avec peu de temps pour se
      former. Notre rôle est de leur apporter des connaissances utiles et des outils
      pratiques pour agir efficacement au service de leur territoire. &raquo;
    </blockquote>
  </div>

  {/* Mickaël */}
  <div className="bg-gray-warm rounded-2xl border border-gray-200 p-6">
    <div className="flex items-start gap-5">
      <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
        <Image
          src="/img/MV.jpg"
          alt="Mickaël Vaillant"
          fill
          className="object-cover object-top"
        />
      </div>
      <div>
        <p className="font-bold text-navy">Mickaël Vaillant</p>
        <p className="text-sm text-gray-text mb-3">Responsable de formation, enseignant dans le supérieur</p>
      </div>
    </div>
    <blockquote className="text-gray-text leading-relaxed italic mt-4">
      &laquo; Une formation réussie doit partir de la réalité vécue par les élus.
      Nous construisons nos programmes avec des intervenants issus du terrain afin
      que chaque participant reparte avec des réponses concrètes, adaptées à son
      mandat et à sa collectivité. &raquo;
    </blockquote>
  </div>
</div>

        </Container>
      </section>

      {/* Notre méthode */}
      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading text-center mb-4">
            Notre méthode : des formations pensées pour être utiles
          </h2>
          <p className="text-gray-text text-center leading-relaxed mb-12">
            Nous partons des situations concrètes rencontrées par les élus locaux pour construire
            nos formations avec des intervenants qui connaissent le terrain.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: BookOpen,
                title: "Des contenus pratiques",
                text: "Des repères clairs, des exemples et des outils pour mieux exercer son mandat.",
              },
              {
                icon: Users,
                title: "Des intervenants expérimentés",
                text: "Des élus, anciens élus, cadres territoriaux et spécialistes qui connaissent les collectivités locales.",
              },
              {
                icon: CheckCircle,
                title: "Un accompagnement de proximité",
                text: "Un suivi simple pour choisir sa formation, organiser sa participation et mobiliser ses droits.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-200">
                <item.icon className="w-8 h-8 text-navy shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-text leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Agrément */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading text-center mb-8">
            Un organisme habilité pour accompagner les élus
          </h2>
          <p className="text-gray-text text-center leading-relaxed mb-4">
            La formation des élus locaux répond à un cadre réglementé. Élu Formation bénéficie
            du renouvellement de l&apos;agrément délivré par le Ministère de l&apos;Intérieur pour
            la formation des élus locaux.
          </p>
          <p className="text-gray-text text-center leading-relaxed mb-10">
            Cet agrément permet aux élus et aux collectivités de financer leurs formations
            dans le cadre des dispositifs prévus.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Agrément ministériel",
                text: "Organisme agréé par le Ministère de l'Intérieur pour la formation des élus locaux.",
              },
              {
                icon: Award,
                title: "Déclaration d'activité",
                text: "Organisme de formation enregistré sous le n° 32591105559 auprès du Préfet de Normandie.",
              },
              {
                icon: BookOpen,
                title: "Éligible DIFE",
                text: "Toutes nos formations sont finançables via Mon Compte Élu ou le budget de votre collectivité.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-warm rounded-xl p-6 text-center border border-gray-200">
                <item.icon className="w-10 h-10 text-navy mx-auto mb-4" />
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-text leading-relaxed">{item.text}</p>
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
            correspond à vos besoins.
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
