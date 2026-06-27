export const queueTopFlowSvg = `
<svg width="100%" viewBox="0 0 1300 920" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" fill="rgba(255,255,255,0.35)"/>
      </marker>
    </defs>

    <!-- ===== STYLES via inline since this is standalone SVG ===== -->
    <!-- Trunk: Start -> Onboarding -> Auth -> Role Select -->

    <!-- connecting lines: trunk -->
    <line x1="120" y1="80" x2="195" y2="80" stroke="rgba(255,255,255,0.35)" stroke-width="1.6" marker-end="url(#arrow)"/>
    <line x1="335" y1="80" x2="410" y2="80" stroke="rgba(255,255,255,0.35)" stroke-width="1.6" marker-end="url(#arrow)"/>
    <line x1="550" y1="80" x2="625" y2="80" stroke="rgba(255,255,255,0.35)" stroke-width="1.6" marker-end="url(#arrow)"/>

    <!-- single vertical trunk from Select Role down through all three lane levels, routed left of the lane boxes -->
    <path d="M700,110 L700,140 L160,140 L160,700" stroke="rgba(255,255,255,0.18)" stroke-width="1.6" fill="none"/>

    <!-- branch-off to Listener lane -->
    <line x1="160" y1="180" x2="240" y2="180" stroke="rgba(0,255,227,0.55)" stroke-width="1.6" marker-end="url(#arrow)"/>
    <!-- branch-off to Creator lane -->
    <line x1="160" y1="400" x2="240" y2="400" stroke="rgba(154,64,200,0.6)" stroke-width="1.6" marker-end="url(#arrow)"/>
    <!-- branch-off to Artist lane -->
    <line x1="160" y1="700" x2="240" y2="700" stroke="rgba(255,159,107,0.55)" stroke-width="1.6" marker-end="url(#arrow)"/>

    <!-- LISTENER lane sub-flow -->
    <line x1="355" y1="180" x2="430" y2="180" stroke="rgba(0,255,227,0.4)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="570" y1="180" x2="645" y2="180" stroke="rgba(0,255,227,0.4)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="785" y1="180" x2="860" y2="180" stroke="rgba(0,255,227,0.4)" stroke-width="1.4" marker-end="url(#arrow)"/>

    <line x1="935" y1="195" x2="935" y2="240" stroke="rgba(0,255,227,0.4)" stroke-width="1.4"/>
    <line x1="935" y1="240" x2="985" y2="240" stroke="rgba(0,255,227,0.4)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="935" y1="195" x2="935" y2="280" stroke="rgba(0,255,227,0.4)" stroke-width="1.4"/>
    <line x1="935" y1="280" x2="985" y2="280" stroke="rgba(0,255,227,0.4)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="935" y1="195" x2="935" y2="320" stroke="rgba(0,255,227,0.4)" stroke-width="1.4"/>
    <line x1="935" y1="320" x2="985" y2="320" stroke="rgba(0,255,227,0.4)" stroke-width="1.4" marker-end="url(#arrow)"/>

    <!-- CREATOR lane sub-flow -->
    <line x1="355" y1="400" x2="430" y2="400" stroke="rgba(154,64,200,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="570" y1="400" x2="645" y2="400" stroke="rgba(154,64,200,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="785" y1="400" x2="860" y2="400" stroke="rgba(154,64,200,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>

    <line x1="935" y1="415" x2="935" y2="460" stroke="rgba(154,64,200,0.5)" stroke-width="1.4"/>
    <line x1="935" y1="460" x2="985" y2="460" stroke="rgba(154,64,200,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="935" y1="415" x2="935" y2="500" stroke="rgba(154,64,200,0.5)" stroke-width="1.4"/>
    <line x1="935" y1="500" x2="985" y2="500" stroke="rgba(154,64,200,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="935" y1="415" x2="935" y2="540" stroke="rgba(154,64,200,0.5)" stroke-width="1.4"/>
    <line x1="935" y1="540" x2="985" y2="540" stroke="rgba(154,64,200,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>

    <!-- ARTIST lane sub-flow -->
    <line x1="355" y1="700" x2="430" y2="700" stroke="rgba(255,159,107,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="570" y1="700" x2="645" y2="700" stroke="rgba(255,159,107,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="785" y1="700" x2="860" y2="700" stroke="rgba(255,159,107,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>

    <line x1="935" y1="715" x2="935" y2="760" stroke="rgba(255,159,107,0.5)" stroke-width="1.4"/>
    <line x1="935" y1="760" x2="985" y2="760" stroke="rgba(255,159,107,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>
    <line x1="935" y1="715" x2="935" y2="800" stroke="rgba(255,159,107,0.5)" stroke-width="1.4"/>
    <line x1="935" y1="800" x2="985" y2="800" stroke="rgba(255,159,107,0.5)" stroke-width="1.4" marker-end="url(#arrow)"/>

    <!-- ===== NODES ===== -->

    <!-- Start -->
    <circle cx="68" cy="80" r="52" fill="#FFE066"/>
    <text x="68" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#0A0A0D">Start</text>

    <!-- Onboarding -->
    <rect x="195" y="50" width="140" height="60" rx="30" fill="#C95EFF"/>
    <text x="265" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#0A0A0D">Onboarding</text>

    <!-- Auth -->
    <rect x="410" y="50" width="140" height="60" rx="30" fill="#C95EFF"/>
    <text x="480" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#0A0A0D">Sign Up / Log In</text>

    <!-- Role Select -->
    <rect x="625" y="50" width="150" height="60" rx="30" fill="#C95EFF"/>
    <text x="700" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#0A0A0D">Select Role</text>

    <!-- LISTENER row -->
    <rect x="240" y="150" width="115" height="60" rx="30" fill="#00FFE3"/>
    <text x="297" y="185" text-anchor="middle" font-size="13" font-weight="700" fill="#0A0A0D">Listener</text>

    <rect x="430" y="150" width="140" height="60" rx="14" fill="#1B1B23" stroke="rgba(0,255,227,0.4)" stroke-width="1.4"/>
    <text x="500" y="185" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Join Session</text>

    <rect x="645" y="150" width="140" height="60" rx="14" fill="#1B1B23" stroke="rgba(0,255,227,0.4)" stroke-width="1.4"/>
    <text x="715" y="185" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Live Session</text>

    <rect x="860" y="150" width="150" height="60" rx="14" fill="#1B1B23" stroke="rgba(0,255,227,0.4)" stroke-width="1.4"/>
    <text x="935" y="185" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Request Song</text>

    <rect x="985" y="215" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(0,255,227,0.25)" stroke-width="1.2"/>
    <text x="1060" y="245" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Search & choose song</text>

    <rect x="985" y="255" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(0,255,227,0.25)" stroke-width="1.2"/>
    <text x="1060" y="285" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Boost (skip queue)</text>

    <rect x="985" y="295" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(0,255,227,0.25)" stroke-width="1.2"/>
    <text x="1060" y="325" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Appears in queue</text>

    <!-- CREATOR row -->
    <rect x="240" y="370" width="115" height="60" rx="30" fill="#9A40C8"/>
    <text x="297" y="405" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Creator</text>

    <rect x="430" y="370" width="140" height="60" rx="14" fill="#1B1B23" stroke="rgba(154,64,200,0.5)" stroke-width="1.4"/>
    <text x="500" y="405" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Go Live</text>

    <rect x="645" y="370" width="140" height="60" rx="14" fill="#1B1B23" stroke="rgba(154,64,200,0.5)" stroke-width="1.4"/>
    <text x="715" y="405" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Live Dashboard</text>

    <rect x="860" y="370" width="150" height="60" rx="14" fill="#1B1B23" stroke="rgba(154,64,200,0.5)" stroke-width="1.4"/>
    <text x="935" y="405" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Queue Management</text>

    <rect x="985" y="435" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(154,64,200,0.3)" stroke-width="1.2"/>
    <text x="1060" y="465" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Sort by boost tier</text>

    <rect x="985" y="475" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(154,64,200,0.3)" stroke-width="1.2"/>
    <text x="1060" y="505" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Mark song played</text>

    <rect x="985" y="515" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(154,64,200,0.3)" stroke-width="1.2"/>
    <text x="1060" y="545" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Earnings → wallet</text>

    <!-- ARTIST row -->
    <rect x="240" y="670" width="115" height="60" rx="30" fill="#FF9F6B"/>
    <text x="297" y="705" text-anchor="middle" font-size="13" font-weight="700" fill="#0A0A0D">Artist</text>

    <rect x="430" y="670" width="140" height="60" rx="14" fill="#1B1B23" stroke="rgba(255,159,107,0.5)" stroke-width="1.4"/>
    <text x="500" y="705" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Discover Creators</text>

    <rect x="645" y="670" width="140" height="60" rx="14" fill="#1B1B23" stroke="rgba(255,159,107,0.5)" stroke-width="1.4"/>
    <text x="715" y="705" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Promote Music</text>

    <rect x="860" y="670" width="150" height="60" rx="14" fill="#1B1B23" stroke="rgba(255,159,107,0.5)" stroke-width="1.4"/>
    <text x="935" y="705" text-anchor="middle" font-size="12.5" font-weight="600" fill="#F2F1EC">Artist Profile</text>

    <rect x="985" y="735" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(255,159,107,0.3)" stroke-width="1.2"/>
    <text x="1060" y="765" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Tips received</text>

    <rect x="985" y="775" width="150" height="50" rx="12" fill="#14141A" stroke="rgba(255,159,107,0.3)" stroke-width="1.2"/>
    <text x="1060" y="805" text-anchor="middle" font-size="11.5" fill="rgba(242,241,236,0.75)">Withdraw to wallet</text>

  </svg>
`;
