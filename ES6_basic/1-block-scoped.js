// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;    // seulement à l'intérieur du if
    let task2 = false;  // seulement à l'intérieur du if
  }

  return [task, task2];
}
