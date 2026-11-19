import type { Picture } from "@/src/lib/trilha/lessons";

const drawings = {
  casa: <><path d="M46 68h78v58H46z" fill="#ffe0a6"/><path d="m31 70 54-47 55 47-9 8-46-38-46 38z" fill="#de7858"/><path d="M78 89h23v37H78z" fill="#78acae"/><path d="M53 86h14v16H53z" fill="#abdafa"/></>,
  bola: <><circle cx="85" cy="77" r="50" fill="#fff4ce"/><path d="M72 57q20-4 32 13l-9 23-24-4-9-18z" fill="#df7a55"/><path d="m73 57-8-24m39 37 28-6m-37 29 9 30m-33-34-22 18" fill="none"/><path d="M36 75q6-5 12-18m53-25 14 9" fill="none"/></>,
  pato: <><path d="M34 86q18 12 43-1-6-34 16-46 25-12 37 8 9 17-7 33 14 36-20 45-48 12-69-39z" fill="#ffcf62"/><path d="m125 59 22 9-24 8" fill="#ee8951"/><circle cx="115" cy="54" r="3"/><path d="M64 98q16 17 34-2" fill="none"/></>,
  sapato: <><path d="M34 69q16 13 28 4l9-24 19 6q8 20 35 28 19 4 18 20H32z" fill="#8fbee3"/><path d="M31 103h112v13H31z" fill="#fff1d1"/><path d="m77 65 15-7m-7 17 14-8m-6 16 16-8" fill="none"/></>,
};

export default function WordPicture({ picture }: { picture: Picture }) {
  return <svg role="img" aria-label={`Figura: ${picture}`} viewBox="0 0 170 150" className="mx-auto h-32 sm:h-40">
    <g stroke="#344759" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">{drawings[picture]}</g>
  </svg>;
}
