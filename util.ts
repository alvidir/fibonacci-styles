const THEME_KEY = "theme";
const THEME_LIGHT_KEY = "theme-light";
const THEME_DARK_KEY = "theme-dark";

const THEME_LIST = [THEME_LIGHT_KEY, THEME_DARK_KEY];

function GetTheme(localStorageKey: string = THEME_KEY): string {
    const setLightTheme = (): string => {
        document.getElementsByTagName('body')[0].classList.add('theme-light');
        localStorage.setItem(localStorageKey, THEME_LIGHT_KEY);
        return THEME_LIGHT_KEY;
    }

    const setDarkTheme = (): string => {
        document.getElementsByTagName('body')[0].classList.add('theme-dark');
        localStorage.setItem(localStorageKey, THEME_DARK_KEY);
        return THEME_DARK_KEY;
    }

    var localTheme = localStorage.getItem(localStorageKey);
    if (localTheme === THEME_LIGHT_KEY) {
        return setLightTheme();
    } else if (localTheme === THEME_DARK_KEY) {
        return setDarkTheme();
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return setDarkTheme();
    } else {
        return setLightTheme();
    }
}

function SwitchTheme(localStorageKey: string = THEME_KEY): string {
    const current = localStorage.getItem(localStorageKey)?? GetTheme(localStorageKey);
    const next = THEME_LIST[(THEME_LIST.indexOf(current) + 1) % THEME_LIST.length];
    document.getElementsByTagName('body')[0].classList.replace(current, next);
    localStorage.setItem(localStorageKey, next);
    return next;
}

export {
    THEME_KEY,
    THEME_LIGHT_KEY,
    THEME_DARK_KEY,
    THEME_LIST,
    GetTheme,
    SwitchTheme,
}