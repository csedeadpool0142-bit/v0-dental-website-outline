export default function DynamicBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft animated gradient orbs */}
      <div className="dynamic-orb dynamic-orb-1" />
      <div className="dynamic-orb dynamic-orb-2" />
      <div className="dynamic-orb dynamic-orb-3" />
    </div>
  )
}
