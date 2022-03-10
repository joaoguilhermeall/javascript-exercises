import { dateISO } from "./ultil.mjs";

const div = document.querySelector("#module-content");

function updateDate() {
    div.textContent = dateISO(new Date());
}

export default updateDate;
