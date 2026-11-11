
export default function ContactDecorations() {
  return (
    <>
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-40 -top-20
          -z-10 h-96 w-96 rounded-full
          bg-primary-light/50 blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-40 bottom-10
          -z-10 h-96 w-96 rounded-full
          bg-secondary-light/40 blur-[110px]
        "
      />
    </>
  );
}
