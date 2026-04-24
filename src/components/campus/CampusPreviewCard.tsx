import { campusFeatures } from "@/lib/campus";
import Card from "@/components/ui/Card";
import { Monitor, CheckCircle, Play } from "lucide-react";

export default function CampusPreviewCard() {
  return (
    <Card className="bg-gradient-to-br from-navy to-navy-light text-white border-0">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-red flex items-center justify-center">
          <Monitor className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold font-heading">Votre espace e-learning</h3>
          <p className="text-xs text-gray-400">campus.eluformation.fr</p>
        </div>
      </div>

      {/* Preview mockup */}
      <div className="bg-white/10 rounded-xl p-4 mb-4 border border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-red/20 flex items-center justify-center">
            <Play className="w-4 h-4 text-red" />
          </div>
          <div className="flex-1">
            <div className="h-2 bg-white/20 rounded-full">
              <div className="h-2 bg-red rounded-full w-1/3" />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {campusFeatures.moduleCount} modules ·{" "}
              {campusFeatures.totalDuration}
            </p>
          </div>
        </div>

        {/* Module list preview */}
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="flex items-center gap-2 py-1.5 text-xs text-gray-300"
          >
            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
              {n}
            </span>
            <div className="flex-1 h-1.5 bg-white/10 rounded-full" />
          </div>
        ))}
      </div>

      <ul className="space-y-2">
        {campusFeatures.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-gray-300"
          >
            <CheckCircle className="w-4 h-4 text-red shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}

