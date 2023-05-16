// import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useTheme } from "../hooks/useTheme";
import useStore from "../hooks/useStore";
import { shallow } from "zustand/shallow";

import { queryToSections } from "../lib/serialization";
import { sectionsToImgURL } from "../lib/sectionsToImgURL";
import {
  init as initSynths,
  getInstruments,
} from "../lib/instruments";

const Tone = require("tone");

import Main from "../components/main";
import CookieConsent from "react-cookie-consent";
import HitTracker from "../components/hittracker";
import Head from "next/head";

export default function Home() {
  const styles = useTheme(require("../styles/Home.module.sass"));

  const [paused, bpm, setBpm, sections, setSections, instrumentIDs] = useStore(
    useCallback(
      (state) => [
        state.paused,
        state.bpm,
        state.setBpm,
        state.sections,
        state.setSections,
        state.instrumentIDs,
      ],
      []
    ),
    shallow
  );

  // play / pause
  useEffect(() => {
    if (paused) Tone.Transport.pause();
    else Tone.Transport.start();
  }, [paused]);

  // bpm
  useEffect(() => {
    Tone.Transport.bpm.rampTo(bpm, 0.2); // seconds
  }, [bpm]);

  // context startup and setup
  useEffect(() => {
    // Tone.setContext(new Tone.Context({ latencyHint : "playback" })); // improve performance...

    const onclick = () => {
      Tone.start();
      Tone.context.resume();
    };
    window.addEventListener("click", onclick);
    return function cleanup() {
      window.removeEventListener("click", onclick);
    };
  }, []);

  // init synths
  const number_of_tracks = useMemo(
    () => sections.reduce((s, v) => Math.max(s, v.ratios.length), -1),
    [sections]
  );
  useEffect(() => {
    return initSynths(instrumentIDs, number_of_tracks);
  }, [instrumentIDs, number_of_tracks]);

  // sections to actual sound
  useEffect(() => {
    const scheduleSections = require("../lib/scheduleSections").default;

    scheduleSections((time, { accent, duration, track }) => {
      const F = getInstruments()[track];
      try {
        F(duration, time, accent);
      } catch (err) {
        // console.warn(err);
      }
    }, sections);

    return function cleanup() {
      Tone.Transport.cancel(0);
    };
  }, [sections]);

  // dynamic favicon
  const [favicon, setFavicon] = useState('/favicon.png');
  useEffect(() => useStore.subscribe(
    imgUrl => setFavicon(imgUrl),
    state => sectionsToImgURL(state.sections)
  ), []);

  // load state from query
  const router = useRouter();
  useEffect(()=>{
      if(Object.keys(router.query).length <= 0) return;
      console.log('found state in url, proceeding to load...');

      setSections(queryToSections(router.query));
      setBpm(Number(router.query.bpm));

      // remove query params
      window.history.replaceState({}, document.title, window.location.pathname);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={favicon}/>
      </Head>
      <HitTracker/>

      <Main></Main>

      <CookieConsent
        location="bottom"
        buttonText="Hmmm, bingus"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#111111" }}
        buttonStyle={{ color: "#111111", fontSize: "14px" }}
        expires={150}
        >
        Give me them cookies! I don't VALUE (💰💰💰) your privacy. {" "}
        <span style={{ fontSize: "12px" }}>Just kidding, btw you can support me on buymeacoffee.com/angramme</span>
      </CookieConsent>
    </div>
  );
}
