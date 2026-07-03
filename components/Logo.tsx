/**
 * MV Tech Studio logo — the original brand monogram (chrome-blue "MV"),
 * background removed for use on the dark theme. Set height via className.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/mv-logo.png"
      alt="MV Tech Studio"
      className={className}
      draggable={false}
    />
  );
}
