import React, { useContext } from "react";

import { ThemeContext } from "@/components/context/ThemeContext";

const Default = ({ opacity = 1, ...props }) => {
  const { activeFg } = useContext(ThemeContext);
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.81249 8.09609C6.90753 8.04123 6.98644 7.96231 7.04129 7.86727C7.09615 7.77223 7.12502 7.66442 7.12499 7.55469V1.92969C7.12443 1.83004 7.10006 1.73198 7.0539 1.64367C7.00774 1.55536 6.94113 1.47936 6.85964 1.42202C6.77814 1.36469 6.68412 1.32766 6.5854 1.31405C6.48669 1.30043 6.38616 1.31062 6.29218 1.34375C4.46794 1.98939 2.93383 3.26457 1.96563 4.94005C0.997427 6.61554 0.658632 8.58145 1.01015 10.4844C1.02837 10.5828 1.06995 10.6754 1.1314 10.7544C1.19285 10.8333 1.27237 10.8964 1.36327 10.9383C1.44519 10.9766 1.53456 10.9963 1.62499 10.9961C1.73469 10.9961 1.84247 10.9673 1.93749 10.9125L6.81249 8.09609ZM5.87499 2.87656V7.19375L2.13437 9.35234C2.12499 9.23438 2.12499 9.11563 2.12499 9C2.1261 7.73309 2.47678 6.49106 3.13843 5.41066C3.80007 4.33025 4.74701 3.45337 5.87499 2.87656ZM16.0578 4.97812C16.0508 4.96406 16.0437 4.94922 16.0351 4.93516C16.0266 4.92109 16.0195 4.90938 16.0109 4.89688C15.2946 3.67328 14.2706 2.65834 13.0408 1.95282C11.8109 1.24729 10.4179 0.875723 8.99999 0.875C8.83423 0.875 8.67526 0.940848 8.55805 1.05806C8.44084 1.17527 8.37499 1.33424 8.37499 1.5V8.67422L2.21796 12.2602C2.14651 12.3016 2.08398 12.3567 2.03398 12.4225C1.98398 12.4882 1.9475 12.5632 1.92665 12.6431C1.9058 12.723 1.901 12.8062 1.91251 12.888C1.92403 12.9698 1.95164 13.0485 1.99374 13.1195C2.89708 14.6578 4.28156 15.856 5.93353 16.5293C7.58549 17.2025 9.41312 17.3134 11.1344 16.8448C12.8556 16.3762 14.3748 15.3541 15.4575 13.9364C16.5401 12.5186 17.1261 10.7839 17.125 9C17.1268 7.58916 16.7588 6.20247 16.0578 4.97812ZM9.62499 2.15313C10.6162 2.24437 11.5759 2.54965 12.4376 3.04791C13.2994 3.54617 14.0428 4.22552 14.6164 5.03906L9.62499 7.94609V2.15313ZM8.99999 15.875C7.90891 15.8722 6.834 15.6111 5.86323 15.113C4.89247 14.6149 4.05345 13.894 3.41484 13.0094L9.30546 9.57891L9.32265 9.56797L15.2422 6.12031C15.7253 7.16777 15.9372 8.31996 15.8582 9.47078C15.7792 10.6216 15.4119 11.734 14.7902 12.7057C14.1684 13.6773 13.3122 14.4768 12.3003 15.0307C11.2885 15.5845 10.1535 15.8749 8.99999 15.875Z"
        fill={activeFg}
        fill-opacity={opacity}
      />
    </svg>
  );
};

export default Default;
