const Tone = require('tone');

// fractions don't work in tone time notation that's why I have to use that
export const withScale = (scale)=>(time)=>`${Math.round(Tone.Time(time).toTicks()*scale)}i`;
export const addTimes = (a, b)=>`${Tone.Time(a).toTicks() + Tone.Time(b).toTicks()}i`;