"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const roles = [
  "Maire",
  "Adjoint(e)",
  "Conseiller(e) municipal(e)",
  "DGS",
  "Secrétaire de mairie",
  "Autre",
];

const demandes = [
  "Formation individuelle",
  "Formation pour ma commune",
  "Financement DIFE",
  "Assurance élu",
  "Recrutement",
  "Conseil",
  "Autre",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    role: "",
    demande: "",
    message: "",
    rgpd: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    alert(
      "Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24h."
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight max-w-3xl">
            Nous sommes là pour vous accompagner
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Une question sur le financement DIFE ? Un projet de formation pour
            votre commune ? Besoin d&apos;un conseil sur votre mandat ? Notre
            équipe vous répond sous 24h du lundi au vendredi.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Formulaire (2 cols) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy font-heading mb-2">
                Envoyez-nous votre demande
              </h2>
              <p className="text-gray-text mb-8">
                Nous vous répondons sous 24h ouvrées.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Vous êtes
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none bg-white"
                    >
                      <option value="">Sélectionnez</option>
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Votre demande
                    </label>
                    <select
                      name="demande"
                      value={formData.demande}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none bg-white"
                    >
                      <option value="">Sélectionnez</option>
                      {demandes.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Votre message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red focus:border-red outline-none resize-y"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="rgpd"
                    required
                    checked={formData.rgpd}
                    onChange={handleChange}
                    className="mt-1 accent-red"
                  />
                  <label className="text-xs text-gray-text">
                    J&apos;accepte que mes données soient traitées par Élu
                    Formation dans le cadre de ma demande. Vos données restent
                    confidentielles et ne seront jamais revendues.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-red text-white font-semibold hover:bg-red-hover transition-colors cursor-pointer text-lg"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Sidebar contact */}
            <div className="space-y-8">
              {/* Prendre RDV — mailto */}
              <div className="bg-gray-light rounded-xl p-6 border border-rose-light">
                <h3 className="font-bold text-navy text-lg mb-3">
                  Prendre rendez-vous avec un conseiller
                </h3>
                <p className="text-sm text-gray-text mb-4 leading-relaxed">
                  Un entretien de 15 à 30 minutes suffit pour vérifier votre
                  solde DIFE, identifier la bonne formation et lancer les
                  démarches.
                </p>
                <a
                  href="mailto:contact@eluformation.fr?subject=Demande de rendez-vous conseiller formation"
                  className="inline-flex flex-col items-center justify-center w-full px-6 py-3 rounded-lg bg-red text-white font-semibold hover:bg-red-hover transition-colors text-center"
                >
                  <span>Prendre rendez-vous</span>
                  <span className="text-xs font-normal opacity-80 mt-0.5">
                    15 min — Gratuit — Sans engagement
                  </span>
                </a>
              </div>

              {/* Coordonnées */}
              <div className="space-y-4">
                <h3 className="font-bold text-navy text-lg">
                  Nous contacter directement
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Phone,
                      text: `${SITE.phone[0]} — ${SITE.phone[1]}`,
                    },
                    { icon: Mail, text: SITE.email },
                    { icon: MapPin, text: SITE.address },
                    { icon: Clock, text: SITE.hours },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-text"
                    >
                      <item.icon className="w-4 h-4 text-red shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-red hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
