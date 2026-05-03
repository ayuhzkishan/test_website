import React from 'react';

/**
 * Each variant is a different asymmetric topographic cluster.
 * They're designed to sit in different corners / edges of each section
 * so the whole page feels topographically "alive" as you scroll.
 */

const VARIANTS: Record<string, React.ReactNode> = {

  /* ── A: Top-right mountain cluster ── */
  'top-right': (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMin slice" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M950 -30 C1020 60, 1180 80, 1240 160 C1300 240, 1260 320, 1200 380" stroke="rgba(253,251,247,0.18)" strokeWidth="1"/>
        <path d="M880 -50 C970 50, 1150 60, 1220 150 C1290 240, 1245 340, 1170 410 C1100 480, 1020 500, 960 480" stroke="rgba(253,251,247,0.14)" strokeWidth="1"/>
        <path d="M810 -70 C920 40, 1110 40, 1195 140 C1280 240, 1230 360, 1140 440 C1050 520, 950 540, 870 510" stroke="rgba(253,251,247,0.11)" strokeWidth="1"/>
        <path d="M740 -90 C870 30, 1070 20, 1170 130 C1270 240, 1215 380, 1110 470 C1005 560, 880 580, 780 540" stroke="rgba(253,251,247,0.08)" strokeWidth="1"/>
        <path d="M670 -110 C820 20, 1030 0, 1145 120 C1260 240, 1200 400, 1080 500 C960 600, 810 620, 690 570" stroke="rgba(253,251,247,0.06)" strokeWidth="1"/>
      </g>
    </svg>
  ),

  /* ── B: Bottom-left basin ── */
  'bottom-left': (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMinYMax slice" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-80 480 C40 420, 100 340, 200 320 C300 300, 360 360, 320 440 C280 520, 180 560, 80 560" stroke="rgba(253,251,247,0.18)" strokeWidth="1"/>
        <path d="M-120 510 C20 440, 90 340, 220 310 C350 280, 430 350, 390 460 C350 570, 220 620, 100 610 C-20 600, -80 560, -120 510" stroke="rgba(253,251,247,0.14)" strokeWidth="1"/>
        <path d="M-160 540 C0 460, 80 340, 240 300 C400 260, 500 340, 460 480 C420 620, 260 680, 120 660 C-20 640, -100 580, -160 540" stroke="rgba(253,251,247,0.11)" strokeWidth="1"/>
        <path d="M-200 570 C-20 480, 70 340, 260 290 C450 240, 570 330, 530 500 C490 670, 300 740, 140 710 C-20 680, -120 600, -200 570" stroke="rgba(253,251,247,0.08)" strokeWidth="1"/>
        <path d="M-240 600 C-40 500, 60 340, 280 280 C500 220, 640 320, 600 520 C560 720, 340 800, 160 760 C-20 720, -140 620, -240 600" stroke="rgba(253,251,247,0.06)" strokeWidth="1"/>
      </g>
    </svg>
  ),

  /* ── C: Center-left ridge ── */
  'center-left': (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMinYMid meet" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-60 100 C60 140, 100 220, 80 300 C60 380, -20 440, -80 400" stroke="rgba(253,251,247,0.18)" strokeWidth="1"/>
        <path d="M-100 60 C50 110, 130 210, 110 310 C90 410, -10 480, -100 440 C-190 400, -220 300, -200 200 C-180 100, -160 40, -100 60" stroke="rgba(253,251,247,0.13)" strokeWidth="1"/>
        <path d="M-140 20 C40 80, 160 200, 140 320 C120 440, 0 520, -120 480 C-240 440, -280 310, -260 190 C-240 70, -200 10, -140 20" stroke="rgba(253,251,247,0.09)" strokeWidth="1"/>
        <path d="M-180 -20 C30 50, 190 190, 170 330 C150 470, 10 560, -140 520 C-290 480, -340 320, -320 180 C-300 40, -240 -20, -180 -20" stroke="rgba(253,251,247,0.07)" strokeWidth="1"/>
      </g>
    </svg>
  ),

  /* ── D: Top-left cape ── */
  'top-left': (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMinYMin slice" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-40 -20 C80 40, 140 130, 110 220 C80 310, 0 360, -60 330 C-120 300, -140 210, -120 130" stroke="rgba(253,251,247,0.18)" strokeWidth="1"/>
        <path d="M-80 -50 C70 20, 170 120, 145 230 C120 340, 20 400, -70 365 C-160 330, -190 220, -165 120 C-140 20, -120 -60, -80 -50" stroke="rgba(253,251,247,0.14)" strokeWidth="1"/>
        <path d="M-120 -80 C60 0, 200 110, 180 240 C160 370, 40 440, -80 400 C-200 360, -240 230, -210 110 C-180 -10, -150 -90, -120 -80" stroke="rgba(253,251,247,0.10)" strokeWidth="1"/>
        <path d="M-160 -110 C50 -20, 230 100, 215 250 C200 400, 60 480, -90 435 C-240 390, -290 240, -255 100 C-220 -40, -180 -120, -160 -110" stroke="rgba(253,251,247,0.07)" strokeWidth="1"/>
        <path d="M-200 -140 C40 -40, 260 90, 250 260 C240 430, 80 520, -100 470 C-280 420, -340 250, -300 90 C-260 -70, -210 -150, -200 -140" stroke="rgba(253,251,247,0.06)" strokeWidth="1"/>
      </g>
    </svg>
  ),

  /* ── E: Bottom-right valley ── */
  'bottom-right': (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMax slice" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1100 500 C1160 440, 1200 360, 1190 280 C1180 200, 1130 160, 1080 190" stroke="rgba(253,251,247,0.18)" strokeWidth="1"/>
        <path d="M1140 540 C1210 460, 1260 360, 1248 260 C1236 160, 1170 110, 1100 145 C1030 180, 1000 270, 1020 360 C1040 450, 1090 510, 1140 540" stroke="rgba(253,251,247,0.14)" strokeWidth="1"/>
        <path d="M1180 580 C1270 480, 1330 360, 1316 240 C1302 120, 1220 60, 1130 100 C1040 140, 1000 260, 1025 380 C1050 500, 1110 570, 1180 580" stroke="rgba(253,251,247,0.10)" strokeWidth="1"/>
        <path d="M1220 620 C1330 500, 1400 360, 1384 220 C1368 80, 1270 10, 1160 55 C1050 100, 1000 250, 1030 400 C1060 550, 1130 630, 1220 620" stroke="rgba(253,251,247,0.07)" strokeWidth="1"/>
      </g>
    </svg>
  ),

  /* ── F: Wide center spread ── */
  'center-wide': (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M300 -10 C450 60, 600 80, 750 60 C900 40, 980 -10, 980 80 C980 170, 880 240, 750 260 C620 280, 480 260, 380 240 C280 220, 220 180, 240 120 C260 60, 300 -10, 300 -10" stroke="rgba(253,251,247,0.13)" strokeWidth="1"/>
        <path d="M200 -40 C380 40, 580 70, 780 40 C980 10, 1080 -40, 1090 70 C1100 180, 980 270, 810 295 C640 320, 440 300, 310 275 C180 250, 110 200, 130 130 C150 60, 200 -40, 200 -40" stroke="rgba(253,251,247,0.08)" strokeWidth="1"/>
        <path d="M100 -70 C310 20, 560 60, 810 20 C1060 -20, 1180 -70, 1200 60 C1220 190, 1080 300, 870 330 C660 360, 400 340, 240 310 C80 280, 0 220, 20 140 C40 60, 100 -70, 100 -70" stroke="rgba(253,251,247,0.06)" strokeWidth="1"/>
      </g>
    </svg>
  ),
};

interface TopoBackgroundProps {
  variant?: keyof typeof VARIANTS;
  style?: React.CSSProperties;
}

export default function TopoBackground({ variant = 'top-right', style }: TopoBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    >
      {VARIANTS[variant]}
    </div>
  );
}
