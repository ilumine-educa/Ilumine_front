
import { solutionSteps } from "../soluction.data";

export default function SolutionSteps() {
  return (
    <div className="mt-10 space-y-7">
      {solutionSteps.map((step) => (
        <div
          key={step.number}
          className="group flex items-start gap-4"
        >
          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl border-2 border-primary/30
              bg-primary-light/40
              text-xs font-bold text-primary
              transition-all duration-300
              group-hover:border-primary
              group-hover:bg-primary
              group-hover:text-white
            "
          >
            {step.number}
          </div>

          <div className="pt-0.5">
            <h3 className="font-bold text-text-primary">
              {step.title}
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
