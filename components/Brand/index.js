/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Brand({ className }) {
  return (
    <section className={`brand-partner text-center ${className}`}>
      <p>EventTix held by top & biggest global companies</p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <img src="/images/apple-111.svg" alt="eventTix" />
        <img src="/images/Adobe.svg" alt="eventTix" />
        <img src="/images/slack-21.svg" alt="eventTix" />
        <img src="/images/spotify-11.svg" alt="eventTix" />
        <img src="/images/google-2015.svg" alt="eventTix" />
      </div>
    </section>
  );
}
