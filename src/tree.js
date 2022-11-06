// if (module.hot) {
//     module.hot.accept();
// }

const NEEDLE_CLASS = "needle";

const fir = {
  container: document.getElementById("tree"),
  getNeedles: function () {
    return this.container.getElementsByClassName(NEEDLE_CLASS);
  },
  rowsCount: 20,
  draw: function () {
    let output = "";

    for (let i = 1; i < this.rowsCount; i += 1) {
      for (let j = i; j < this.rowsCount; j += 1) {
        output += "&nbsp;&nbsp;";
      }
      for (let k = 0; k <= i * 2; k += 1) {
        output += `<span class="${NEEDLE_CLASS}">1</span>`;
      }
      output += "<br />";
    }

    this.container.innerHTML = output;
  },
};

fir.draw();

export default fir;
