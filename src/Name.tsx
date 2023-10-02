import React, { useState } from "react";
import anime from "animejs";
import "./Name.css";

function padStrings(...strings: string[]) {
  const maxLength = Math.max(...strings.map((s) => s.length));
  return strings.map((s) => s.padEnd(maxLength));
}

const [sam, startName, ...others] = padStrings(
  "sam leonard",
  "armed loans",
  "dream salon",
  "a damn loser",
  "more sandal",
  "ransom deal",
  "named solar",
  "almonds era",
  "nomad laser",
  "alarmed son",
  "oral amends",
  "lone dramas",
  "sand morale",
  "moaner lads",
  "seaman lord"
);
const names = [startName, sam];
for (const other of others) {
  names.push(other, sam);
}

const letters = startName.split("");

function getPermutation(startString: string, endString: string) {
  const positions: Record<string, number> = {};
  startString.split("").forEach((letter) => {
    positions[letter] = 0;
  });

  return startString.split("").map((letter) => {
    const index = endString.indexOf(letter, positions[letter]);
    positions[letter] = index + 1;
    return index;
  });
}

function getXPosition(selector: string) {
  const x = document.querySelector(selector)?.getBoundingClientRect().x;
  if (x === undefined) {
    throw new Error(`Invalid selector`);
  }
  return x;
}

function getXDistance(startIndex: number, endIndex: number) {
  const startX = getXPosition(`#letter-${startIndex}`);
  const endX = getXPosition(`#phantom-letter-${endIndex}`);
  return endX - startX;
}

function Name() {
  const [nameIndex, setNameIndex] = useState(1);
  const endName = names[nameIndex];
  const endLetters = endName.split("");

  function handleClick() {
    const permutation = getPermutation(startName, endName);
    letters.forEach((_, i) => {
      anime({
        targets: `#letter-${i}`,
        translateX: `+=${getXDistance(i, permutation[i])}`,
        easing: "easeInOutCubic",
      });
    });

    setNameIndex((nameIndex + 1) % names.length);
  }

  return (
    <>
      <span className="name-wrapper" onMouseEnter={handleClick}>
        {letters.map((letter, i) => (
          <span id={`letter-${i}`} key={i} className="letter">
            {letter}
          </span>
        ))}
      </span>
      <span className="name-wrapper phantom-name-wrapper">
        {endLetters.map((letter, i) => (
          <span id={`phantom-letter-${i}`} key={i} className="letter">
            {letter}
          </span>
        ))}
      </span>
    </>
  );
}

export default Name;
