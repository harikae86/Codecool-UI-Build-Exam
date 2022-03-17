const data = [
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
  {
    title: "Breakfast of Champions",
    sub: "Kurt Vonnegut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam ipsum amet magni obcaecati iure voluptate et, dignissimos quo impedit ut nihil illum sunt vero laborum quasi similique incidunt officiis, molestiae esse quis! Ex velit quasi perferendis illum eaque dicta dolore alias reprehenderit explicabo unde, impedit excepturi maxime ab distinctio!",
  },
];

const init = () => {
  const main = document.getElementById("cards");
  data.map((item, i) => {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "button-wrapper";
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";

    const number = document.createElement("div");
    number.innerText = i + 1;
    number.className = "number";

    const sub = document.createElement("p");
    sub.innerText = item.sub;
    sub.className = "sub";

    const title = document.createElement("h2");
    title.innerText = item.title;

    const text = document.createElement("p");
    text.innerText = item.text;
    text.className = "text";

    const button = document.createElement("button");
    button.innerText = "read more";
    const icon = document.createElement("span");
    icon.innerText = "arrow_forward";
    icon.className = "material-icons";
    button.append(icon);
    main.append(buttonWrapper);
    buttonWrapper.append(cardWrapper, button);
    cardWrapper.append(number, sub, title, text);
  });
};

window.addEventListener("load", init);
