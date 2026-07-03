import { skillGroups } from "@/lib/data";

const techs = skillGroups.flatMap((g) => g.skills);

export default function TechMarquee() {
  const row = [...techs, ...techs];
  return (
    <div className="group relative overflow-hidden border-y border-line/5 bg-line/[0.015] py-5 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
        {row.map((s, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}.svg`}
              alt={s.name}
              className={`h-7 w-7${s.mono ? " brightness-0 invert" : ""}`}
              loading="lazy"
            />
            <span className="whitespace-nowrap text-sm font-medium text-muted">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
