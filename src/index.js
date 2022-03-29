import Geul from "geul";
import { delay } from "./utility";

document.addEventListener("DOMContentLoaded", () => {
  const typeHeaderLabel = async () => {
    await delay(2300);
    const headerLabel = new Geul(
      "resume",
      document.querySelector(".header-label"),
      80
    );
    await headerLabel.run();
  };

  typeHeaderLabel();

  const getWorkYear = () => {
    const workYearElement = document.querySelector(".work-year");
    const startYear = 2021;
    const startMonth = 6;

    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const diff = (todayYear - startYear) * 12 - (startMonth - todayMonth);
    console.log(diff);
    const year = parseInt(diff / 12);
    const month = parseInt(diff % 12);

    const label = `${year > 0 ? `${year}년 ` : ""}${
      month > 0 ? `${month}개월` : ""
    } 차`;
    workYearElement.textContent = label;
  };

  getWorkYear();
});
