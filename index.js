const navigationLinks = document.getElementsByTagName("nav");

for (item of navigationLinks) {
  const separator = document.createElement("hr");
  separator.id = "navbarSeparator";
  item.addEventListener("mouseenter", () => {
    item.appendChild(separator);
  });

  item.addEventListener("mouseleave", () => {
    separator.remove();
  });
}
