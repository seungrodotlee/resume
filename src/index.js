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
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = d.link;
    a.target = "_blank";
    a.textContent = d.label;
    p.appendChild(a);
    li.appendChild(p);

    listElement.appendChild(li);
  });
};

const fillInData = () => {
  appendListItem("space");
  appendListItem("file");

  // Exprience
  const exprienceListElement = document.querySelector(".exprience-list");
  const exprienceData = data.exprience;

  exprienceData.forEach((d) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("flex", "py-8");
    const title = document.createElement("h3");
    title.classList.add("w-1/3", "flex-shrink-0", "text-3xl", "font-bold");
    title.textContent = d.company;
    wrapper.appendChild(title);
    d.role.forEach((rd) => {
      const role = document.createElement("div");
      role.classList.add("flex-grow");
      const roleTitle = document.createElement("div");
      roleTitle.classList.add("flex", "items-center", "text-lg", "font-medium");
      const team = document.createElement("p");
      team.classList.add("mr-1");
      team.textContent = rd.team;
      const position = document.createElement("p");
      position.classList.add("mr-1.5");
      position.textContent = rd.position;
      const duration = document.createElement("p");
      duration.classList.add("text-sm", "text-neutral-600", "font-bold");
      duration.textContent = `${rd.from} ~ ${rd.to}`;

      roleTitle.appendChild(team);
      roleTitle.appendChild(position);
      roleTitle.appendChild(duration);
      role.appendChild(roleTitle);

      const workListElement = document.createElement("ul");
      rd.works.forEach((wd) => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = wd;
        li.appendChild(p);
        workListElement.appendChild(li);
      });
      role.appendChild(workListElement);

      wrapper.appendChild(role);
    });

    exprienceListElement.appendChild(wrapper);
  });

  // Projects
  const projectListElement = document.querySelector(".project-list");
  const projectData = data.projects;
  projectData.forEach((d) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("py-8");
    const title = document.createElement("h3");
    title.classList.add("mb-2", "text-3xl", "font-bold");
    const a = document.createElement("a");
    a.href = d.link;
    a.target = "_blank";
    a.textContent = d.title;
    title.appendChild(a);
    const duration = document.createElement("p");
    duration.classList.add("mb-4", "text-neutral-600", "font-bold");
    duration.textContent = `${d.from}${d.to ? ` ~ ${d.to}` : ""}`;

    const noteListElement = document.createElement("ul");
    d.notes.forEach((nd) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = nd;
      li.appendChild(p);
      noteListElement.appendChild(li);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(duration);
    wrapper.appendChild(noteListElement);
    projectListElement.appendChild(wrapper);
  });
};
