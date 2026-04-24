import { Formation } from "@/data/formations";
import { Target, BookOpen, Info, CheckCircle } from "lucide-react";

export default function FormationProgram({ formation }: { formation: Formation }) {
  return (
    <div>
      {/* Pourquoi */}
      {formation.pourquoi && (
        <div className="mb-10 bg-gray-light rounded-xl p-6 border border-rose-light">
          <h2 className="text-lg font-bold text-navy font-heading mb-2">
            Pourquoi suivre cette formation ?
          </h2>
          <p className="text-gray-text leading-relaxed">{formation.pourquoi}</p>
        </div>
      )}

      {/* Objectifs */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gray-light flex items-center justify-center">
            <Target className="w-5 h-5 text-navy" />
          </div>
          <h2 className="text-2xl font-bold text-navy font-heading">
            Objectifs pédagogiques
          </h2>
        </div>

        <ul className="space-y-4">
          {formation.objectifs.map((objectif, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-red text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-gray-text leading-relaxed">{objectif}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Programme */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-gray-light flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-navy" />
          </div>
          <h2 className="text-2xl font-bold text-navy font-heading">
            Programme
          </h2>
        </div>

        <div className="space-y-3">
          {formation.programme.map((module, i) => (
            <div
              key={i}
              className="bg-gray-light rounded-xl p-4 border border-gray-200"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-red uppercase tracking-wide shrink-0 mt-1">
                    {i + 1}.
                  </span>
                  <p className="text-sm font-medium text-navy">
                    {module.title}
                  </p>
                </div>
                {module.duree && (
                  <span className="text-xs text-gray-text bg-white px-2 py-1 rounded-md shrink-0">
                    {module.duree}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infos pratiques */}
      {formation.infos && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gray-light flex items-center justify-center">
              <Info className="w-5 h-5 text-navy" />
            </div>
            <h2 className="text-2xl font-bold text-navy font-heading">
              Informations pratiques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-light rounded-xl p-4">
              <p className="text-xs font-bold text-red uppercase tracking-wide mb-1">Public</p>
              <p className="text-sm text-navy">{formation.infos.public}</p>
            </div>
            <div className="bg-gray-light rounded-xl p-4">
              <p className="text-xs font-bold text-red uppercase tracking-wide mb-1">Prérequis</p>
              <p className="text-sm text-navy">{formation.infos.prerequis}</p>
            </div>
            <div className="bg-gray-light rounded-xl p-4">
              <p className="text-xs font-bold text-red uppercase tracking-wide mb-1">Modalités d&apos;accès</p>
              <p className="text-sm text-navy">{formation.infos.modalites}</p>
            </div>
            <div className="bg-gray-light rounded-xl p-4">
              <p className="text-xs font-bold text-red uppercase tracking-wide mb-1">Accessibilité</p>
              <p className="text-sm text-navy">{formation.infos.accessibilite}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-light rounded-xl p-4">
              <p className="text-xs font-bold text-red uppercase tracking-wide mb-2">Méthodes pédagogiques</p>
              <div className="space-y-1">
                {formation.infos.methodes.map((m) => (
                  <div key={m} className="flex items-center gap-2 text-sm text-navy">
                    <CheckCircle className="w-3.5 h-3.5 text-green-dife" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-light rounded-xl p-4">
              <p className="text-xs font-bold text-red uppercase tracking-wide mb-2">Évaluation</p>
              <div className="space-y-1">
                {formation.infos.evaluation.map((e) => (
                  <div key={e} className="flex items-center gap-2 text-sm text-navy">
                    <CheckCircle className="w-3.5 h-3.5 text-green-dife" />
                    {e}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
