import Image from "next/image";

// Exact frame + logo geometry from the Figma design (node 1:328, 393x852 frame).
const FRAME_WIDTH = 393;
const FRAME_HEIGHT = 852;
const LOGO_BOX = { left: -24.29, top: 258.9, width: 440.67, height: 110.167 };

export default function Splash() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e5e5ea] py-8">
      <div
        className="relative overflow-hidden bg-white"
        style={{ width: FRAME_WIDTH, height: FRAME_HEIGHT }}
      >
        <div className="absolute" style={{ left: LOGO_BOX.left, top: LOGO_BOX.top, width: LOGO_BOX.width, height: LOGO_BOX.height }}>
          <Image
            src="/paybook-logo.png"
            alt="페이북"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
