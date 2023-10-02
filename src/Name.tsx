import React from "react";
import anime from "animejs";
import "./Name.css";

const [startName, endName] = padStrings("armed loans", "sam leonard");
const startLetters = startName.split("");
const endLetters = endName.split("");

function padStrings(...strings: string[]) {
  const maxLength = Math.max(...strings.map((s) => s.length));
  return strings.map((s) => s.padEnd(maxLength));
}

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
  console.log({ startX, endX, diff: endX - startX });
  return endX - startX;
}

function Name() {
  function handleClick() {
    const permutation = getPermutation(startName, endName);
    startLetters.forEach((_, i) => {
      anime({
        targets: `#letter-${i}`,
        translateX: getXDistance(i, permutation[i]),
        easing: "easeInOutCubic",
      });
    });
  }

  return (
    <>
      <span className="name-wrapper" onClick={handleClick}>
        {startLetters.map((letter, i) => (
          <span id={`letter-${i}`} key={i} className="letter">
            {letter}
          </span>
        ))}
      </span>
      <br />
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
