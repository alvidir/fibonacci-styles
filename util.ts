const THEME_LIGHT = "theme-light";
const THEME_DARK = "theme-dark";
const THEME_STORAGE_KEY = "theme";

function GetDefaultTheme(localStorageKey: string = THEME_STORAGE_KEY): string {
    const setLightTheme = (): string => {
        document.getElementsByTagName('body')[0].classList.add('theme-light');
        localStorage.setItem(localStorageKey, THEME_LIGHT);
        return THEME_LIGHT;
    }

    const setDarkTheme = (): string => {
        document.getElementsByTagName('body')[0].classList.add('theme-dark');
        localStorage.setItem(localStorageKey, THEME_DARK);
        return THEME_DARK;
    }

    var localTheme = localStorage.getItem(localStorageKey);
    if (localTheme === THEME_LIGHT) {
        return setLightTheme();
    } else if (localTheme === THEME_DARK) {
        return setDarkTheme();
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return setDarkTheme();
    } else {
        return setLightTheme();
    }
}

export {
    THEME_LIGHT,
    THEME_DARK,
    THEME_STORAGE_KEY,
    GetDefaultTheme,
}