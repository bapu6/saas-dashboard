import React, { useContext } from "react";

import { ThemeContext } from "@/components/context/ThemeContext";

const Projects = ({ opacity = 1, ...props }) => {
  const { activeFg } = useContext(ThemeContext);
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.875 2.625H9.20859L7.04141 1C6.82472 0.838324 6.56176 0.750671 6.29141 0.75H2.125C1.79348 0.75 1.47554 0.881696 1.24112 1.11612C1.0067 1.35054 0.875 1.66848 0.875 2V12.625C0.875 12.9565 1.0067 13.2745 1.24112 13.5089C1.47554 13.7433 1.79348 13.875 2.125 13.875H15.875C16.2065 13.875 16.5245 13.7433 16.7589 13.5089C16.9933 13.2745 17.125 12.9565 17.125 12.625V3.875C17.125 3.54348 16.9933 3.22554 16.7589 2.99112C16.5245 2.7567 16.2065 2.625 15.875 2.625ZM2.125 2H6.29141L7.95859 3.25L6.29141 4.5H2.125V2ZM15.875 12.625H2.125V5.75H6.29141C6.56176 5.74933 6.82472 5.66168 7.04141 5.5L9.20859 3.875H15.875V12.625Z"
        fill={activeFg}
        fill-opacity={opacity}
      />
    </svg>
  );
};

export default Projects;