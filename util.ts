const THEME_LIGHT = "theme-light";
const THEME_DARK = "theme-dark";
const THEME_STORAGE_KEY = "theme";
const THEME_LIST = [THEME_LIGHT, THEME_DARK];

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

function SwitchTheme(current: string, localStorageKey: string = THEME_STORAGE_KEY): string {
    const next = THEME_LIST[(THEME_LIST.indexOf(current) + 1) % THEME_LIST.length];
    document.getElementsByTagName('body')[0].classList.replace(current, next);
    localStorage.setItem(localStorageKey, next);
    return next;
}

export {
    THEME_LIGHT,
    THEME_DARK,
    THEME_STORAGE_KEY,
    THEME_LIST,
    GetDefaultTheme,
    SwitchTheme,
}