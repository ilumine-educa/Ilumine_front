
import {
  IconBrain,
  IconHeart,
  IconPuzzle,
  IconSchool,
  IconSparkles,
} from "@tabler/icons-react";

export default function AboutHeroVisual() {
  return (
    <div className="
      relative aspect-square w-full
      overflow-hidden rounded-[3rem]
      bg-primary-light/40
    ">
      {/* Brilhos de fundo */}
      <div className="
        absolute -left-[8%] top-[10%]
        h-40 w-40 rounded-full
        bg-secondary/30 blur-2xl
      " />

      <div className="
        absolute -right-[5%] top-[15%]
        h-48 w-48 rounded-full
        bg-primary/20 blur-2xl
      " />

      {/* Elemento central */}
      <div className="
        absolute left-1/2 top-1/2
        flex h-48 w-48 -translate-x-1/2
        -translate-y-1/2 rotate-[-6deg]
        items-center justify-center
        rounded-[3rem] bg-surface shadow-xl
        animate-[float_5s_ease-in-out_infinite]
      ">
        <div className="
          flex h-36 w-36 items-center
          justify-center rounded-[2.5rem]
          bg-primary-light text-primary
        ">
          <IconSchool size={76} stroke={1.4} />
        </div>
      </div>

      {/* Card superior */}
      <div className="
        absolute left-[7%] top-[15%]
        rotate-[-8deg] rounded-2xl
        bg-surface p-4 shadow-lg
      ">
        <IconBrain size={34} className="text-primary" />
      </div>

      {/* Card lateral */}
      <div className="
        absolute right-[6%] top-[42%]
        rotate-[8deg] rounded-2xl
        bg-surface p-4 shadow-lg
      ">
        <IconHeart size={32} className="text-secondary" />
      </div>

      {/* Card inferior */}
      <div className="
        absolute bottom-[12%] left-[17%]
        rotate-[6deg] rounded-2xl
        bg-surface p-4 shadow-lg
      ">
        <IconPuzzle size={32} className="text-primary" />
      </div>

      {/* Estrelas */}
      <IconSparkles
        className="absolute right-[20%] top-[12%] text-secondary"
        size={34}
      />

      <IconSparkles
        className="absolute bottom-[18%] right-[15%] text-primary"
        size={26}
      />
    </div>
  );
}
