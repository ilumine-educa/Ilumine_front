import { IconAbacus, IconBook2, IconDeviceGamepad2, IconMap2, IconMessageCircleHeart } from "@tabler/icons-react";

const art = {
  chat: [IconMessageCircleHeart, "#b9dcff", "#226395", "#f7c14b"],
  quick: [IconDeviceGamepad2, "#ffddb4", "#92501d", "#fa9963"],
  trail: [IconMap2, "#b9e8d7", "#226752", "#ffce68"],
  portugues: [IconBook2, "#d4cff8", "#594c92", "#ffca61"],
  matematica: [IconAbacus, "#b9e8d7", "#226752", "#ffb775"],
} as const;
export type ArtKind = keyof typeof art;

// O mesmo recorte de papel identifica cada caminho nas telas de escolha.
export default function PaperArt({ kind }: { kind: ArtKind }) {
  const [Icon, sky, ink, accent] = art[kind];
  return <svg aria-hidden="true" viewBox="0 0 320 144" className="block w-full rounded-2xl" style={{ background: sky }}>
    <circle cx="255" cy="31" r="17" fill={accent} />
    <path d="M0 110 Q57 66 137 107 T320 88 V144 H0Z" fill="white" opacity=".36" />
    <path d="M0 129 Q95 93 179 125 T320 110 V144 H0Z" fill={ink} opacity=".13" />
    <g transform="rotate(-8 157 75)">
      <rect x="115" y="38" width="86" height="78" rx="19" fill={ink} opacity=".22" />
      <rect x="114" y="32" width="86" height="78" rx="19" fill="#fffaf0" />
      <Icon x="127" y="40" width="60" height="60" stroke={1.65} color={ink} />
    </g>
    <path d="m64 48 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill={ink} opacity=".52" />
  </svg>;
}
