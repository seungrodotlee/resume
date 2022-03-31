import Geul from "geul";
import { delay, getDateDiff } from "./utility";
import data from "./data.json";

document.addEventListener("DOMContentLoaded", () => {
  typeHeaderLabel();
  getWorkYear();
  fillInData();
});

const typeHeaderLabel = async () => {
  await delay(2300);
  const headerLabel = new Geul(
    "resume",
    document.querySelector(".header-label"),
    80
  );
  await headerLabel.run();
};

const getWorkYear = () => {
  const workYearElement = document.querySelector(".work-year");

  const dateDiff = getDateDiff(2021, 6);

  const label = `${dateDiff} 차`;
  workYearElement.textContent = label;
};

const appendListItem = (target) => {
  const listElement = document.querySelector(`.${target}-list`);
  const listData = data[`${target}s`];

  listData.forEach((d) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = d.link;
    a.textContent = d.label;
    li.appendChild(a);

    listElement.appendChild(li);
  });
};

const fillInData = () => {
  appendListItem("space");
  appendListItem("file");
};
