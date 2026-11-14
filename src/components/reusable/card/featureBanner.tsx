import Image from "next/image";
import { IconStar } from "@tabler/icons-react";
import type { ReactNode } from "react";

interface FeatureBannerProps {
  title: string;
  description: string;

  image: string;
  imageAlt: string;

  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;

  decorationColor?: string;
  decoration?: ReactNode;

  imageClassName?: string;
  contentClassName?: string;

  minHeight?: string;
}

export default function FeatureBanner({
  title,
  description,

  image,
  imageAlt,

  backgroundColor = "bg-surface",
  titleColor = "text-text-primary",
  descriptionColor = "text-text-secondary/85",

  decorationColor = "text-decoration-blue/10",
  decoration,

  imageClassName = "",
  contentClassName = "",

  minHeight = "min-h-80",
}: FeatureBannerProps) {
  return (
    <article
      className={`
        relative isolate flex flex-col
        overflow-hidden rounded-4xl
        p-8
        ${backgroundColor}
        ${minHeight}
      `}
    >
      {/* Decoração */}
      {decoration ?? (
        <IconStar
          size={500}
          stroke={1.5}
          className={`
            pointer-events-none absolute
            -right-50 -top-50 rotate-45
            ${decorationColor}
          `}
        />
      )}

      {/* Conteúdo */}
      <div className={`relative z-10 max-w-64 ${contentClassName}`}>
        <h3
          className={`
            mt-4 font-heading text-5xl
            font-bold leading-tight
            ${titleColor}
          `}
        >
          {title}
        </h3>

        <p
          className={`
            mt-4 text-sm leading-relaxed
            ${descriptionColor}
          `}
        >
          {description}
        </p>
      </div>

      {/* Imagem */}
      <div
        className={`
          absolute bottom-0 right-5
          hidden w-92 sm:block
          sm:h-96
          ${imageClassName}
        `}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-contain object-bottom"
          sizes="(min-width: 1921px) min(19.167vw, 491px), (max-width: 1024px) 280px, 368px"
        />
      </div>
    </article>
  );
}
