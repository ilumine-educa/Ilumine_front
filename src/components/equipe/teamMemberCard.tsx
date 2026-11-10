import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import type { TeamMember } from "./teamData";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <article className="flex h-full min-h-52 flex-col gap-5 rounded-3xl border border-border bg-surface p-5 shadow-sm motion-safe:transition-[transform,box-shadow,border-color] motion-safe:duration-200 motion-safe:hover:-translate-y-1 hover:border-primary-light hover:shadow-md sm:flex-row sm:p-6">
      <div className="relative flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-surface-secondary sm:size-32">
        {member.photo ? (
          <Image
            src={member.photo.src}
            alt={member.photo.alt}
            fill
            sizes="(min-width: 640px) 128px, 112px"
            className="object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`Foto de ${member.name} ainda não disponível`}
            className="relative isolate flex size-full items-center justify-center bg-primary-light/40"
          >
            <span aria-hidden="true" className="absolute -bottom-6 -right-6 -z-10 size-20 rounded-full bg-secondary-light" />
            <span aria-hidden="true" className="font-heading text-4xl font-medium tracking-wide text-text-primary">
              {initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start">
        <h3 className="break-words font-heading text-2xl leading-tight text-text-primary">
          {member.name}
        </h3>
        <ul aria-label="Funções no projeto" className="mt-3 flex flex-wrap gap-2">
          {member.roles.map((role) => (
            <li key={role} className="rounded-lg bg-primary-light/25 px-3 py-1.5 text-xs font-medium leading-relaxed text-text-primary">
              {role}
            </li>
          ))}
        </ul>
        {member.description && (
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {member.description}
          </p>
        )}

        {(member.github || member.linkedin) && (
          <div className="mt-auto flex gap-2 pt-4">
            {member.github && (
              <a
                href={member.github}
                aria-label={`GitHub de ${member.name}`}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-text-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-safe:transition-colors"
              >
                <IconBrandGithub size={21} aria-hidden="true" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                aria-label={`LinkedIn de ${member.name}`}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-text-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-safe:transition-colors"
              >
                <IconBrandLinkedin size={21} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
