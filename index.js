var ztxt = new Ztextify("h1", {
  depth: "30px",
  layers: 8,
  fade: false,
  direction: "both",
  event: "pointer",
  eventRotation: "35deg",
});

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

let hobby_list = ["programador", "engenheiro de prompt", "ser-humano"];
let hobby_index = 0;

async function writeMachineEffect(word, node) {
  let actual_string = node.textContent.split("");

  async function update_string() {
    await sleep(50);
    node.textContent = actual_string.join("");
  }

  while (actual_string.length > 0) {
    actual_string.pop();
    await update_string();
  }

  for (const e of word.split("")) {
    actual_string.push(e);
    await update_string();
  }
}

setInterval(() => {
  let hobby = hobby_list[hobby_index % hobby_list.length];

  writeMachineEffect(hobby, document.querySelector(".hobies-list"));

  hobby_index++;
}, 7000);
