// Colour palettes for MoneroComponents.Style.
//
// A palette declares a "dark" and a "light" variant. Which one is used is decided
// by Style.theme (system/light/dark) - palette and mode are independent axes.
//
// Most palettes are written as a compact ramp and expanded by variant(). The
// "monero" palette is spelled out in full instead, because upstream's greys are
// ad-hoc and do not fit a ramp; writing it explicitly keeps it pixel-identical
// to the stock theme.

.pragma library

// Expand a compact ramp into the full token set Style.qml consumes.
function variant(r) {
    return {
        defaultFontColor: r.text,
        dimmedFontColor: r.subtext,
        lightGreyFontColor: r.subtextBright,
        errorColor: r.error,
        textSelectionColor: r.surface2,
        textSelectedColor: r.text,

        inputBoxBackground: r.mantle,
        inputBoxBackgroundDisabled: r.surface0,
        inputBoxBackgroundError: r.inputBgError,
        inputBoxColor: r.text,
        legacy_placeholderFontColor: r.overlay,
        inputBorderColorActive: r.accent,
        inputBorderColorInActive: r.surface1,
        inputBorderColorInvalid: r.error,

        buttonBackgroundColor: r.accent,
        buttonBackgroundColorHover: r.accentHover,
        buttonBackgroundColorDisabled: r.surface1,
        buttonBackgroundColorDisabledHover: r.surface2,
        buttonInlineBackgroundColor: r.surface1,
        buttonInlineBackgroundColorHover: r.surface2,
        buttonTextColor: r.accentText,
        buttonTextColorDisabled: r.overlay,
        buttonSecondaryBackgroundColor: r.surface0,
        buttonSecondaryBackgroundColorHover: r.surface1,
        buttonSecondaryTextColor: r.text,
        dividerColor: r.surface2,
        dividerOpacity: 0.60,

        titleBarBackgroundGradientStart: r.mantle,
        titleBarBackgroundGradientStop: r.crust,
        titleBarBackgroundBorderColor: r.surface0,
        titleBarButtonHoverColor: r.hoverOverlay,

        wizardBackgroundGradientStart: r.base,
        middlePanelBackgroundGradientStart: r.base,
        middlePanelBackgroundGradientStop: r.mantle,
        middlePanelBackgroundColor: r.base,
        menuButtonFallbackBackgroundColor: r.menuOverlayFaint,
        menuButtonGradientStart: r.menuOverlay,
        menuButtonGradientStop: "#00000000",
        menuButtonTextColor: r.text,
        menuButtonImageRightColorActive: r.accent,
        menuButtonImageRightColor: r.overlay,

        inlineButtonTextColor: r.text,
        inlineButtonBorderColor: r.crust,
        appWindowBackgroundColor: r.appWindowBackgroundColor,
        appWindowBorderColor: r.surface0,
        progressBarProgressTextBold: r.textBold,
        progressBarBackgroundColor: r.hoverOverlay,
        leftPanelBackgroundGradientStart: r.mantle,
        leftPanelBackgroundGradientStop: r.crust,
        historyHeaderTextColor: r.subtext,

        accentColor: r.accent,
        accountColors: r.accountColors,
        // Hue (0-1) the account card artwork is colorized towards; null leaves the
        // stock artwork untouched.
        cardHue: r.cardHue !== undefined ? r.cardHue : null,
        cardSaturation: r.cardSaturation !== undefined ? r.cardSaturation : 0.4,
        cardLightness: r.cardLightness !== undefined ? r.cardLightness : 0.0
    };
}

// Account card colours. These index card-background-black<N>.png in LeftPanel.qml,
// so the stock set is reused everywhere rather than recoloured.
var STOCK_ACCOUNT_COLORS = ["#6E513C", "#842129", "#458421", "#742184", "#291DBE", "#846F21", "#217F84", "#696969"];

// ---------------------------------------------------------------------------
// monero - stock upstream values, written out in full so nothing shifts.
// ---------------------------------------------------------------------------

var MONERO_DARK = {
    defaultFontColor: "white",
    dimmedFontColor: "#BBBBBB",
    lightGreyFontColor: "#DFDFDF",
    errorColor: "#FA6800",
    textSelectionColor: "#BBBBBB",
    textSelectedColor: "white",

    inputBoxBackground: "black",
    inputBoxBackgroundDisabled: "#1AFFFFFF",
    inputBoxBackgroundError: "#FFDDDD",
    inputBoxColor: "white",
    legacy_placeholderFontColor: "#BABABA",
    inputBorderColorActive: "#61FFFFFF",
    inputBorderColorInActive: "#52FFFFFF",
    inputBorderColorInvalid: "#66FF0000",

    buttonBackgroundColor: "#FA6800",
    buttonBackgroundColorHover: "#E65E00",
    buttonBackgroundColorDisabled: "#707070",
    buttonBackgroundColorDisabledHover: "#808080",
    buttonInlineBackgroundColor: "#707070",
    buttonInlineBackgroundColorHover: "#808080",
    buttonTextColor: "white",
    buttonTextColorDisabled: "black",
    buttonSecondaryBackgroundColor: "#707070",
    buttonSecondaryBackgroundColorHover: "#808080",
    buttonSecondaryTextColor: "white",
    dividerColor: "white",
    dividerOpacity: 0.20,

    titleBarBackgroundGradientStart: "#262626",
    titleBarBackgroundGradientStop: "#191919",
    titleBarBackgroundBorderColor: "#2f2f2f",
    titleBarButtonHoverColor: "#10FFFFFF",

    wizardBackgroundGradientStart: "#1e1e1e",
    middlePanelBackgroundGradientStart: "#232323",
    middlePanelBackgroundGradientStop: "#101010",
    middlePanelBackgroundColor: "#181818",
    menuButtonFallbackBackgroundColor: "#09FFFFFF",
    menuButtonGradientStart: "#11FFFFFF",
    menuButtonGradientStop: "#00000000",
    menuButtonTextColor: "white",
    menuButtonImageRightColorActive: "white",
    menuButtonImageRightColor: "white",

    inlineButtonTextColor: "white",
    inlineButtonBorderColor: "black",
    appWindowBackgroundColor: "white",
    appWindowBorderColor: "#313131",
    progressBarProgressTextBold: true,
    progressBarBackgroundColor: "#24FFFFFF",
    leftPanelBackgroundGradientStart: "#222222",
    leftPanelBackgroundGradientStop: "#1a1a1a",
    historyHeaderTextColor: "#C0C0C0",

    accentColor: "#FA6800",
    accountColors: STOCK_ACCOUNT_COLORS,
    cardHue: null, cardSaturation: 0.0, cardLightness: 0.0
};

var MONERO_LIGHT = {
    defaultFontColor: "black",
    dimmedFontColor: "#3f3f3f",
    lightGreyFontColor: "#515151",
    errorColor: "#FA6800",
    textSelectionColor: "#BBBBBB",
    textSelectedColor: "black",

    inputBoxBackground: "white",
    inputBoxBackgroundDisabled: "#33000000",
    inputBoxBackgroundError: "#FFDDDD",
    inputBoxColor: "black",
    legacy_placeholderFontColor: "#BABABA",
    inputBorderColorActive: "#4D000000",
    inputBorderColorInActive: "#29000000",
    inputBorderColorInvalid: "#80FF0000",

    buttonBackgroundColor: "#FA6800",
    buttonBackgroundColorHover: "#E65E00",
    buttonBackgroundColorDisabled: "#bbbbbb",
    buttonBackgroundColorDisabledHover: "#D1D1D1",
    buttonInlineBackgroundColor: "#d9d9d9",
    buttonInlineBackgroundColorHover: "#C8C8C8",
    buttonTextColor: "white",
    buttonTextColorDisabled: "black",
    buttonSecondaryBackgroundColor: "#d9d9d9",
    buttonSecondaryBackgroundColorHover: "#C8C8C8",
    buttonSecondaryTextColor: "#4d4d4d",
    dividerColor: "black",
    dividerOpacity: 0.20,

    titleBarBackgroundGradientStart: "#fcfcfc",
    titleBarBackgroundGradientStop: "#FBFBFB",
    titleBarBackgroundBorderColor: "#DEDEDE",
    titleBarButtonHoverColor: "#11000000",

    wizardBackgroundGradientStart: "white",
    middlePanelBackgroundGradientStart: "white",
    middlePanelBackgroundGradientStop: "#ededed",
    middlePanelBackgroundColor: "#f5f5f5",
    menuButtonFallbackBackgroundColor: "#09000000",
    menuButtonGradientStart: "#08000000",
    menuButtonGradientStop: "#10FFFFFF",
    menuButtonTextColor: "#787878",
    menuButtonImageRightColorActive: "#FA6800",
    menuButtonImageRightColor: "#808080",

    inlineButtonTextColor: "#4d4d4d",
    inlineButtonBorderColor: "transparent",
    appWindowBackgroundColor: "black",
    appWindowBorderColor: "#dedede",
    progressBarProgressTextBold: false,
    progressBarBackgroundColor: "#24000000",
    leftPanelBackgroundGradientStart: "white",
    leftPanelBackgroundGradientStop: "#f5f5f5",
    historyHeaderTextColor: "#515151",

    accentColor: "#FA6800",
    accountColors: STOCK_ACCOUNT_COLORS,
    cardHue: null, cardSaturation: 0.0, cardLightness: 0.0
};

// ---------------------------------------------------------------------------
// Ramp-based palettes
// ---------------------------------------------------------------------------

var CATPPUCCIN_MOCHA = {
    cardHue: 0.067,
    crust: "#11111b", mantle: "#181825", base: "#1e1e2e",
    surface0: "#313244", surface1: "#45475a", surface2: "#585b70",
    overlay: "#7f849c", subtext: "#a6adc8", subtextBright: "#bac2de", text: "#cdd6f4",
    accent: "#fab387", accentHover: "#ffc9a3", accentText: "#1e1e2e",
    error: "#f38ba8", inputBgError: "#4a2c3a",
    hoverOverlay: "#20cdd6f4", menuOverlay: "#14cdd6f4", menuOverlayFaint: "#0fcdd6f4",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var CATPPUCCIN_LATTE = {
    cardHue: 0.067,
    crust: "#dce0e8", mantle: "#e6e9ef", base: "#eff1f5",
    surface0: "#ccd0da", surface1: "#bcc0cc", surface2: "#acb0be",
    overlay: "#8c8fa1", subtext: "#6c6f85", subtextBright: "#5c5f77", text: "#4c4f69",
    accent: "#fe640b", accentHover: "#e35208", accentText: "#eff1f5",
    error: "#d20f39", inputBgError: "#f2d5d8",
    hoverOverlay: "#204c4f69", menuOverlay: "#144c4f69", menuOverlayFaint: "#0f4c4f69",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

var NORD_DARK = {
    cardHue: 0.039,
    crust: "#242933", mantle: "#2e3440", base: "#3b4252",
    surface0: "#434c5e", surface1: "#4c566a", surface2: "#5e6779",
    overlay: "#8f98a8", subtext: "#d8dee9", subtextBright: "#e5e9f0", text: "#eceff4",
    accent: "#d08770", accentHover: "#e39b85", accentText: "#2e3440",
    error: "#bf616a", inputBgError: "#4a3239",
    hoverOverlay: "#20eceff4", menuOverlay: "#14eceff4", menuOverlayFaint: "#0feceff4",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var NORD_LIGHT = {
    cardHue: 0.039,
    crust: "#d8dee9", mantle: "#e5e9f0", base: "#eceff4",
    surface0: "#dfe4ec", surface1: "#c8d0dc", surface2: "#b0bac9",
    overlay: "#7b8494", subtext: "#4c566a", subtextBright: "#434c5e", text: "#2e3440",
    accent: "#bf6c50", accentHover: "#a85a40", accentText: "#eceff4",
    error: "#bf616a", inputBgError: "#f0d8db",
    hoverOverlay: "#202e3440", menuOverlay: "#142e3440", menuOverlayFaint: "#0f2e3440",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

var GRUVBOX_DARK = {
    cardHue: 0.075,
    crust: "#1d2021", mantle: "#282828", base: "#32302f",
    surface0: "#3c3836", surface1: "#504945", surface2: "#665c54",
    overlay: "#928374", subtext: "#bdae93", subtextBright: "#d5c4a1", text: "#ebdbb2",
    accent: "#fe8019", accentHover: "#ff9640", accentText: "#282828",
    error: "#fb4934", inputBgError: "#4a2c28",
    hoverOverlay: "#20ebdbb2", menuOverlay: "#14ebdbb2", menuOverlayFaint: "#0febdbb2",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var GRUVBOX_LIGHT = {
    cardHue: 0.075,
    crust: "#d5c4a1", mantle: "#ebdbb2", base: "#fbf1c7",
    surface0: "#f2e5bc", surface1: "#d5c4a1", surface2: "#bdae93",
    overlay: "#928374", subtext: "#504945", subtextBright: "#3c3836", text: "#282828",
    accent: "#d65d0e", accentHover: "#af3a03", accentText: "#fbf1c7",
    error: "#9d0006", inputBgError: "#f2d3ce",
    hoverOverlay: "#20282828", menuOverlay: "#14282828", menuOverlayFaint: "#0f282828",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

// True black for OLED panels: unlit pixels, with a hot Monero-orange accent.
var OLED_DARK = {
    cardHue: 0.069,
    crust: "#000000", mantle: "#000000", base: "#000000",
    surface0: "#0d0d0d", surface1: "#1a1a1a", surface2: "#262626",
    overlay: "#6e6e6e", subtext: "#a8a8a8", subtextBright: "#d4d4d4", text: "#f2f2f2",
    accent: "#FF6A00", accentHover: "#FF8524", accentText: "#000000",
    error: "#ff4d4d", inputBgError: "#3d1414",
    hoverOverlay: "#26FF6A00", menuOverlay: "#1AFF6A00", menuOverlayFaint: "#10FF6A00",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var TOKYONIGHT_DARK = {
    cardHue: 0.614,
    crust: "#16161e", mantle: "#1a1b26", base: "#1f2335",
    surface0: "#292e42", surface1: "#3b4261", surface2: "#545c7e",
    overlay: "#565f89", subtext: "#a9b1d6", subtextBright: "#c0caf5", text: "#c0caf5",
    accent: "#ff9e64", accentHover: "#ffb987", accentText: "#1a1b26",
    error: "#f7768e", inputBgError: "#3d2430",
    hoverOverlay: "#20c0caf5", menuOverlay: "#14c0caf5", menuOverlayFaint: "#0fc0caf5",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var TOKYONIGHT_LIGHT = {
    cardHue: 0.614,
    crust: "#c4c8da", mantle: "#d0d5e3", base: "#e1e2e7",
    surface0: "#d5d9e5", surface1: "#c0c5d6", surface2: "#a8aec4",
    overlay: "#848cb5", subtext: "#4c5590", subtextBright: "#3760bf", text: "#3760bf",
    accent: "#b15c00", accentHover: "#8f4900", accentText: "#e1e2e7",
    error: "#c64343", inputBgError: "#f0d5d8",
    hoverOverlay: "#203760bf", menuOverlay: "#143760bf", menuOverlayFaint: "#0f3760bf",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

var EVERFOREST_DARK = {
    cardHue: 0.244,
    crust: "#232a2e", mantle: "#2d353b", base: "#343f44",
    surface0: "#3d484d", surface1: "#475258", surface2: "#4f585e",
    overlay: "#859289", subtext: "#9da9a0", subtextBright: "#c1c9bf", text: "#d3c6aa",
    accent: "#e69875", accentHover: "#f0ad8e", accentText: "#2d353b",
    error: "#e67e80", inputBgError: "#43302f",
    hoverOverlay: "#20d3c6aa", menuOverlay: "#14d3c6aa", menuOverlayFaint: "#0fd3c6aa",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var EVERFOREST_LIGHT = {
    cardHue: 0.244,
    crust: "#e6e2cc", mantle: "#f4f0d9", base: "#fdf6e3",
    surface0: "#efebd4", surface1: "#e0dcc7", surface2: "#c9c5b0",
    overlay: "#939f91", subtext: "#5c6a72", subtextBright: "#4b565c", text: "#5c6a72",
    accent: "#f57d26", accentHover: "#d96716", accentText: "#fdf6e3",
    error: "#f85552", inputBgError: "#f5dcd8",
    hoverOverlay: "#205c6a72", menuOverlay: "#145c6a72", menuOverlayFaint: "#0f5c6a72",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

var CYBERPUNK_DARK = {
    cardHue: 0.944, cardSaturation: 0.6,
    crust: "#05060a", mantle: "#0b0e14", base: "#12161f",
    surface0: "#1b2130", surface1: "#262f45", surface2: "#33405c",
    overlay: "#6b7a99", subtext: "#8fa3c4", subtextBright: "#b8d4ec", text: "#d1f7ff",
    accent: "#ff2a6d", accentHover: "#ff5c8f", accentText: "#05060a",
    error: "#ff3864", inputBgError: "#3d0f22",
    hoverOverlay: "#2605d9e8", menuOverlay: "#1a05d9e8", menuOverlayFaint: "#1005d9e8",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var CYBERPUNK_LIGHT = {
    cardHue: 0.944, cardSaturation: 0.6,
    crust: "#d8dce6", mantle: "#e8ebf2", base: "#f4f6fa",
    surface0: "#e4e8f0", surface1: "#ccd3e0", surface2: "#adb7c9",
    overlay: "#6b7a99", subtext: "#3d4a63", subtextBright: "#2a3548", text: "#12161f",
    accent: "#d6004f", accentHover: "#b00040", accentText: "#f4f6fa",
    error: "#d6004f", inputBgError: "#f5d6e0",
    hoverOverlay: "#2012161f", menuOverlay: "#1412161f", menuOverlayFaint: "#0f12161f",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

var KANAGAWA_DARK = {
    cardHue: 0.608,
    crust: "#16161d", mantle: "#1f1f28", base: "#2a2a37",
    surface0: "#363646", surface1: "#54546d", surface2: "#625e5a",
    overlay: "#727169", subtext: "#c8c093", subtextBright: "#dcd7ba", text: "#dcd7ba",
    accent: "#ffa066", accentHover: "#ffb787", accentText: "#1f1f28",
    error: "#e82424", inputBgError: "#43242b",
    hoverOverlay: "#20dcd7ba", menuOverlay: "#14dcd7ba", menuOverlayFaint: "#0fdcd7ba",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var KANAGAWA_LIGHT = {
    cardHue: 0.608,
    crust: "#e5ddb0", mantle: "#eee5bd", base: "#f2ecbc",
    surface0: "#e7dba0", surface1: "#dcd5ac", surface2: "#c9cbd1",
    overlay: "#8a8980", subtext: "#43436c", subtextBright: "#545464", text: "#545464",
    accent: "#cc6d00", accentHover: "#a85a00", accentText: "#f2ecbc",
    error: "#c84053", inputBgError: "#eed7d6",
    hoverOverlay: "#20545464", menuOverlay: "#14545464", menuOverlayFaint: "#0f545464",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

var ONEDARK_DARK = {
    cardHue: 0.575,
    crust: "#1b1f27", mantle: "#21252b", base: "#282c34",
    surface0: "#2c313c", surface1: "#3e4451", surface2: "#4b5263",
    overlay: "#5c6370", subtext: "#9199a6", subtextBright: "#abb2bf", text: "#abb2bf",
    accent: "#d19a66", accentHover: "#e0b184", accentText: "#282c34",
    error: "#e06c75", inputBgError: "#3d2429",
    hoverOverlay: "#20abb2bf", menuOverlay: "#14abb2bf", menuOverlayFaint: "#0fabb2bf",
    appWindowBackgroundColor: "white", textBold: true,
    accountColors: STOCK_ACCOUNT_COLORS
};

var ONEDARK_LIGHT = {
    cardHue: 0.575,
    crust: "#dcdcdd", mantle: "#eaeaeb", base: "#fafafa",
    surface0: "#f0f0f1", surface1: "#d3d3d4", surface2: "#b8b8ba",
    overlay: "#a0a1a7", subtext: "#4f525d", subtextBright: "#383a42", text: "#383a42",
    accent: "#c18401", accentHover: "#9d6b00", accentText: "#fafafa",
    error: "#e45649", inputBgError: "#f5dad7",
    hoverOverlay: "#20383a42", menuOverlay: "#14383a42", menuOverlayFaint: "#0f383a42",
    appWindowBackgroundColor: "black", textBold: false,
    accountColors: STOCK_ACCOUNT_COLORS
};

// ---------------------------------------------------------------------------

var all = {
    "monero": { name: "Monero", dark: MONERO_DARK, light: MONERO_LIGHT },
    "catppuccin": { name: "Catppuccin", dark: variant(CATPPUCCIN_MOCHA), light: variant(CATPPUCCIN_LATTE) },
    "nord": { name: "Nord", dark: variant(NORD_DARK), light: variant(NORD_LIGHT) },
    "gruvbox": { name: "Gruvbox", dark: variant(GRUVBOX_DARK), light: variant(GRUVBOX_LIGHT) },
    // OLED is a dark-only idea; its light variant falls back to stock Monero light.
    "oled": { name: "OLED", dark: variant(OLED_DARK), light: MONERO_LIGHT },
    "tokyonight": { name: "Tokyo Night", dark: variant(TOKYONIGHT_DARK), light: variant(TOKYONIGHT_LIGHT) },
    "everforest": { name: "Everforest", dark: variant(EVERFOREST_DARK), light: variant(EVERFOREST_LIGHT) },
    "cyberpunk": { name: "Cyberpunk", dark: variant(CYBERPUNK_DARK), light: variant(CYBERPUNK_LIGHT) },
    "kanagawa": { name: "Kanagawa", dark: variant(KANAGAWA_DARK), light: variant(KANAGAWA_LIGHT) },
    "onedark": { name: "One Dark", dark: variant(ONEDARK_DARK), light: variant(ONEDARK_LIGHT) }
};

var order = ["monero", "catppuccin", "nord", "gruvbox", "oled",
             "tokyonight", "everforest", "cyberpunk", "kanagawa", "onedark"];
