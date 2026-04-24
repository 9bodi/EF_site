"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: intégrer webhook / API newsletter
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Merci ! Vous recevrez votre guide sous 24h.");
  };

  return (
    <section className="py-16 md:py-20 bg-navy">
      <Container className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
          Recevez le Guide du Nouvel Élu 2026 — Gratuit
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Vos droits à la formation, les dates de sessions, les actualités du
          mandat — directement dans votre boîte mail.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-navy bg-white border-0 focus:ring-2 focus:ring-red outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-red text-white font-semibold hover:bg-red-hover transition-colors cursor-pointer shrink-0"
          >
            Je reçois mon guide
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-400">
          Vos données restent confidentielles. Désinscription en un clic.
        </p>
      </Container>
    </section>
  );
}

