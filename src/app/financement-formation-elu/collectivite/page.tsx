import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Financement par la collectivité - Budget formation des élus",
  description:
    "Votre commune peut financer la formation de ses élus via son budget formation. C'est une dépense obligatoire prévue par le CGCT. Découvrez comment.",
};

const faq = [
  {
    q: "Le budget formation des élus est-il obligatoire ?",
    a: "Oui. L'article L2123-12 du Code général des collectivités territoriales prévoit que chaque commune doit consacrer un montant minimal à la formation de ses élus. Ce montant ne peut être inférieur à 2 % du montant total des indemnités de fonction.",
  },
  {
    q: "Peut-on cumuler DIFE et financement communal ?",
    a: "Oui. Le DIFE (800 € par élu et par an) et le budget formation de la collectivité sont deux sources de financement distinctes et cumulables. C'est particulièrement utile pour les formations intra-collectivité dont le coût total dépasse le DIFE individuel.",
  },
  {
    q: "Qui décide de l'utilisation du budget formation ?",
    a: "Le conseil municipal délibère sur les orientations de formation en début de mandat. Chaque élu peut ensuite formuler des demandes de formation qui s'inscrivent dans ces orientations. Le maire valide les inscriptions.",
  },
  {
    q: "Quelles formations peut-on financer par le budget communal ?",
    a: "Toutes les formations dispensées par des organismes agréés par le Ministère de l'Intérieur, comme Élu Formation. Les formations doivent être en lien avec l'exercice du mandat.",
  },
];

export default function CollectivitePage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              Financement par la collectivité - Le budget formation de votre
              commune
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Au-delà du DIFE individuel, votre commune dispose d&apos;un budget
              dédié à la formation des élus. C&apos;est une dépense obligatoire
              prévue par la loi. Voici comment le mobiliser pour financer vos
              formations ou celles de votre équipe.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionTitle title="Ce que dit la loi" />
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              L&apos;article L2123-12 du Code général des collectivités
              territoriales impose à chaque commune de consacrer un budget à la
              formation de ses élus. Ce budget est voté en début de mandat par le
              conseil municipal.
            </p>
            <p>
              Le montant minimal est fixé à <strong className="text-navy">2 % du montant total des
              indemnités de fonction</strong> versées aux élus de la commune. Pour une
              commune de 5 000 habitants, cela représente généralement plusieurs
              milliers d&apos;euros par an.
            </p>
            <p>
              Ce budget est distinct du DIFE. Il peut financer des formations
              individuelles ou collectives (séminaires, formations intra). Les
              deux sources de financement sont cumulables.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gray-warm">
        <Container className="max-w-3xl">
          <SectionTitle title="Comment mobiliser le budget formation de votre commune" />
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Vérifiez que le budget a été voté",
                text: "Demandez à votre secrétaire de mairie ou DGS si le budget formation des élus a été inscrit au budget primitif de la commune. Si ce n'est pas le cas, une délibération peut le créer à tout moment.",
              },
              {
                step: "2",
                title: "Identifiez la formation souhaitée",
                text: "Choisissez une formation dans notre catalogue ou demandez un devis pour une formation intra. Nous vous fournissons le programme, le devis et la convention de formation.",
              },
              {
                step: "3",
                title: "Faites valider par le conseil",
                text: "Présentez la demande de formation en conseil municipal (ou par délégation au maire selon votre règlement). La délibération autorise l'inscription et la dépense.",
              },
              {
                step: "4",
                title: "Nous envoyons la convention",
                text: "Élu Formation vous transmet la convention de formation et la facture. La commune règle directement - aucun frais avancé par l'élu.",
              },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-5">
                <span className="w-10 h-10 rounded-full bg-red text-white font-bold flex items-center justify-center shrink-0 text-lg">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-1">{s.title}</h3>
                  <p className="text-gray-text leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container className="max-w-3xl">
          <SectionTitle title="Questions fréquentes" />
          <div className="space-y-6">
            {faq.map((item) => (
              <div key={item.q}>
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle className="w-5 h-5 text-red shrink-0 mt-0.5" />
                  <h3 className="font-bold text-navy">{item.q}</h3>
                </div>
                <p className="text-gray-text leading-relaxed ml-8">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 bg-navy text-center">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white font-heading mb-3">
            Besoin d&apos;aide pour monter le dossier de financement ?
          </h2>
          <p className="text-gray-300 mb-6">
            Nos conseillers connaissent les procédures et peuvent vous fournir
            tous les documents nécessaires (devis, convention, programme).
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            subtitle="Rappel sous 24h - Gratuit"
          >
            Parler à un conseiller financement
          </Button>
        </Container>
      </section>
    </>
  );
}

