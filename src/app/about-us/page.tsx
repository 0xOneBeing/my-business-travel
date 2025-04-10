import React from "react";

import AppHeader from "@/components/Header/AppHeader";
import AppFooter from "@/components/Footer/AppFooter";

export default function AboutUsPage() {
  return (
    <>
      <AppHeader />

      <main>
        <div>
          <h1>About Us</h1>
          <p>
            This is a simple about us page. You can add more content here, such
            as information about your company, team, mission, and values.
          </p>
        </div>
      </main>

      <AppFooter />
    </>
  );
}
