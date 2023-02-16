import React from 'react';

export default function Fonts() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  console.log({ prefix });

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
            @font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-Bold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-Black.ttf) format("truetype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-ExtraBold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-ExtraLight.ttf) format("truetype");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-Light.ttf) format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-Medium.ttf) format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-SemiBold.ttf) format("truetype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-Regular.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url(/fonts/inter/Inter-Thin.ttf) format("truetype");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

          `,
      }}
    />
  );
}
