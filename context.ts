const THEME_KEY = "theme";
const THEME_LIGHT = "theme-light";
const THEME_DARK = "theme-dark";

const THEME_LIST = [THEME_LIGHT, THEME_DARK];

class Context {
  private theme: string = THEME_LIGHT;

  constructor(domain: string) {
    localStorage.setItem("domain", domain);

    const localTheme = localStorage.getItem(THEME_KEY);
    if (
      (localTheme === undefined &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
      localTheme === THEME_DARK
    ) {
      this.setTheme(THEME_DARK);
    } else {
      this.setTheme(THEME_LIGHT);
    }
  }

  public setTheme(value: string) {
    document.getElementsByTagName("body")[0].classList.add(value);
    localStorage.setItem(THEME_KEY, value);
    this.theme = value;
  }

  public switchTheme(): void {
    const nextTheme =
      THEME_LIST[(THEME_LIST.indexOf(this.theme) + 1) % THEME_LIST.length];

    document
      .getElementsByTagName("body")[0]
      .classList.replace(this.theme, nextTheme);

    localStorage.setItem(THEME_KEY, nextTheme);
    this.theme = nextTheme;
  }

  public getTheme(): string {
    return this.theme;
  }

  public isDarkTheme(): boolean {
    return THEME_DARK === this.theme;
  }
}

export default Context;
