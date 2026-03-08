"use client";

export function AuroraBackground({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ position: "relative" }}>
            {/* Fixed aurora — stays behind entire page while you scroll */}
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
                overflow: "hidden",
                background: "linear-gradient(135deg, #f0f9ff 0%, #e8f4fd 50%, #f0fdf4 100%)",
            }}>
                <div className="aurora-orb aurora-orb-1" />
                <div className="aurora-orb aurora-orb-2" />
                <div className="aurora-orb aurora-orb-3" />
            </div>

            {/* Content sits above */}
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}