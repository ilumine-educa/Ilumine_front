import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import PaperArt, { type ArtKind } from "./paperArt";

type Props = { title: string; description: string; href: string; art: ArtKind };

export default function ActivityCard({ title, description, href, art }: Props) {
  return <Link href={href} className="group flex flex-col rounded-3xl border border-border bg-surface p-3 shadow-sm hover:border-primary focus-visible:outline-offset-4 motion-safe:transition-shadow hover:shadow-md">
    <PaperArt kind={art} />
    <div className="flex flex-1 items-start justify-between gap-3 px-2 py-4 sm:px-4 sm:py-6">
      <div>
        <h2 className="font-heading text-2xl sm:text-3xl">{title}</h2>
        <p className="mt-1 leading-relaxed text-text-primary">{description}</p>
      </div>
      <IconArrowRight aria-hidden className="mt-2 shrink-0 text-primary" />
    </div>
  </Link>;
}
