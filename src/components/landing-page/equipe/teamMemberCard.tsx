import Image from "next/image";
import type { TeamMember } from "./teamData";
import Link from "next/link";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface p-5 hover:border-primary-light hover:shadow-sm sm:flex-row sm:p-6">
      <div className="relative flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-surface-secondary sm:size-32">
        {member.photo && (
          <Image
            src={member.photo.src}
            alt={member.photo.alt}
            fill
            sizes="(min-width: 1921px) min(6.667vw, 171px), (min-width: 640px) 128px, 112px"
            className={`object-cover ${
              member.name === "Caio Lima"
                ? "object-[center_35%]"
                : member.name === "Cauã Gabriel" || member.name === "Ana Paula"
                  ? "object-[center_40%]"
                  : "object-top"
            }`}
          />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
        <div className="">
          <h3 className="break-words font-heading text-2xl leading-tight text-text-primary">
            {member.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {member.roles.join(" · ")}
          </p>
          {member.description && (
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {member.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {member.socialLinks?.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.label}
                href={social.href || "#"}
                target={social.href ? "_blank" : undefined}
                rel={social.href ? "noopener noreferrer" : undefined}
                aria-label={`${social.label} de ${member.name}`}
                aria-disabled={!social.href}
                tabIndex={social.href ? 0 : -1}
                onClick={!social.href ? (e) => e.preventDefault() : undefined}
                title={
                  !social.href
                    ? `${social.label} ainda não disponível`
                    : social.label
                }
                className={`
          inline-flex size-9 items-center justify-center
          rounded-lg border border-border
          ${
            social.href
              ? "text-text-primary hover:bg-surface-secondary"
              : "cursor-not-allowed text-text-muted opacity-50"
          }
          focus-visible:outline-2 focus-visible:outline-offset-4
          focus-visible:outline-primary motion-safe:transition-colors
        `}
              >
                <Icon size={18} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}
