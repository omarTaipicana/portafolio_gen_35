const inputCheckbox = document.getElementById("darkmode-toggle");

function darkMode() {
  inputCheckbox.addEventListener("change", () => {
    if (inputCheckbox.checked) {
      document.documentElement.style.setProperty('--bg-color-section1', '#000');
      document.documentElement.style.setProperty('--bg-color-section2', '#000');
      document.documentElement.style.setProperty('--color-black', '#eee');
      document.documentElement.style.setProperty('--primary-color', '#eee');
      document.documentElement.style.setProperty('--color-white', '#000');
    } else {
        document.documentElement.style.setProperty('--bg-color-section1', '#eee');
        document.documentElement.style.setProperty('--bg-color-section2', '#fafafa');
        document.documentElement.style.setProperty('--color-black', '#000');
        document.documentElement.style.setProperty('--primary-color', '#111');
        document.documentElement.style.setProperty('--color-white', '#fff');
    }
  });
}

export default darkMode;
