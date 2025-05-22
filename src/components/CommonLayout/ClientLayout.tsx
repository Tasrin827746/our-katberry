
"use client";

import dynamic from "next/dynamic";

const SocialIcons = dynamic(() => import("./SocialIcons"), {
  ssr: false,
  loading: () => <div />, 
});

export default function ClientSocialIcons() {
  return <SocialIcons />;
}
