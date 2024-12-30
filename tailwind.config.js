/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        delius: ["Delius", "cursive"],
        neon: ["Atma", "serif"],
      },
      screens: {
        // tablet: "896px",
        xl: "1144px",
        big: "1608px",
        ssm: "300px",
        mds: "450px",
      },
      colors: {
        blackBLue: "#0e1a34",
        buttonViolet: "#6600fd",
        cyan: "#22d3ee",
        yellow_ocare:"#f8f3ef",
        gray:"#333 "
      },
      keyframes: {
        neon_animation: {
          "0%, 100%": {
            borderColor: "#00eeff",
            boxShadow:
              "0 0 14px 4px rgb(176, 239, 255), 0 0 64px 8px rgba(123, 242, 255, 0.781), inset 0 0 12px 4px rgb(176, 243, 255)",
          },
          "50%": {
            borderColor: "#00bbff",
            boxShadow:
              "0 0 10px 2px rgb(123, 220, 255), 0 0 40px 6px rgba(100, 200, 255, 0.7), inset 0 0 8px 2px rgb(150, 230, 255)",
          },
          "75%": {
            borderColor: "#00ffff",
            boxShadow:
              " 0 0 18px 5px rgb(200, 250, 255), 0 0 80px 10px rgba(176, 243, 255, 0.9), inset 0 0 16px 5px rgb(176, 243, 255)",
          },
        },
      },
      animation: {
        neon_animation: "neon_animation 3s infinite alternate ease-out",
      },
      boxShadow:{
        '3xl':"0 0 40px -8px #67e8f9",
        "4xl":"inset 0 0 0 220px rgba(255,255,255,0.3);"
      },
      backgroundImage: {
        "edu-pattern": "url('./src/assets/darsh.png')",
        "bg-gradientViolet":
          " linear-gradient(0deg, rgba(22,7,65,1) 0%, rgba(38,19,111,1) 62%, rgba(59,20,166,1) 100%);",
          "bg-gradientCards":"linear-gradient(0deg, rgba(20,19,85,1) 7%, rgba(31,27,108,1) 49%, rgba(51,32,113,1) 84%)",
        "bg-gradientVioletNav":
          " linear-gradient(180deg, rgba(12,11,66,1) 0%, rgba(38,19,111,1) 62%, rgba(59,4,166,1) 100%);",
        "bg-JoinNowButton":
          " linear-gradient(16deg, rgba(40,36,126,1) 0%, rgba(82,9,235,1) 62%);",
        "bg-Service":"linear-gradient(180deg, rgba(12,11,66,1) 7%, rgba(15,12,69,1) 49%, rgba(33,15,93,1) 84%)",
        "bg-borderColor":
          "linear-gradient(0deg, rgba(107,5,255,1) 0%, rgba(66,120,212,1) 62%, rgba(64,179,254,1) 100%)",
        "bg-HamburgerMenu":
          "linear-gradient(16deg, rgba(214,74,161,1) 0%, rgba(147,50,172,1) 62%, rgba(136,29,215,1) 72%)",
        "bg-pinkToViolet":
          "linear-gradient(68deg, rgba(214,74,161,1) 0%, rgba(147,50,172,1) 62%, rgba(136,29,215,1) 72%);",
      },
    },
  },
};
