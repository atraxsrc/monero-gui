pragma Singleton

import QtQuick 2.5

import "../js/Palettes.js" as Palettes

QtObject {
    // Mode: "system" follows the OS preference, "light" and "dark" force one.
    property string theme: "dark"

    // Palette: which colour set to use. Independent of mode - a palette supplies
    // both a light and a dark variant, and the mode above picks between them.
    property string palette: "monero"

    // Reported by the ColorScheme helper; only consulted when theme is "system".
    property bool systemPrefersDark: typeof colorScheme !== "undefined" ? colorScheme.prefersDark : true

    // Derived, read-only. Every existing Style.blackTheme reference keeps working unchanged.
    readonly property bool blackTheme: theme === "light" ? false :
                                       theme === "dark" ? true :
                                       systemPrefersDark

    readonly property var paletteList: Palettes.order
    readonly property var activePalette: Palettes.all[palette] !== undefined ? Palettes.all[palette]
                                                                             : Palettes.all["monero"]
    // _b / _w stay separately addressable because ColorTransition needs both endpoint
    // colours at once (MiddlePanel.qml, LeftPanel.qml, TextPlain.qml read them directly).
    readonly property var _b: activePalette.dark
    readonly property var _w: activePalette.light

    function paletteName(key) {
        return Palettes.all[key] !== undefined ? Palettes.all[key].name : key;
    }

    property QtObject fontMedium: FontLoader { id: _fontMedium; source: "qrc:/fonts/Roboto-Medium.ttf"; }
    property QtObject fontBold: FontLoader { id: _fontBold; source: "qrc:/fonts/Roboto-Bold.ttf"; }
    property QtObject fontLight: FontLoader { id: _fontLight; source: "qrc:/fonts/Roboto-Light.ttf"; }
    property QtObject fontRegular: FontLoader { id: _fontRegular; source: "qrc:/fonts/Roboto-Regular.ttf"; }

    property QtObject fontMonoMedium: FontLoader { id: _fontMonoMedium; source: "qrc:/fonts/RobotoMono-Medium.ttf"; }
    property QtObject fontMonoBold: FontLoader { id: _fontMonoBold; source: "qrc:/fonts/RobotoMono-Bold.ttf"; }
    property QtObject fontMonoLight: FontLoader { id: _fontMonoLight; source: "qrc:/fonts/RobotoMono-Light.ttf"; }
    property QtObject fontMonoRegular: FontLoader { id: _fontMonoRegular; source: "qrc:/fonts/RobotoMono-Regular.ttf"; }

    property string grey: "#404040"
    property string orange: "#FF6C3C"
    property string white: "#FFFFFF"
    property string green: "#2EB358"
    property string moneroGrey: "#4C4C4C"
    property string warningColor: "orange"

    property string defaultFontColor: blackTheme ? _b_defaultFontColor : _w_defaultFontColor
    property string dimmedFontColor: blackTheme ? _b_dimmedFontColor : _w_dimmedFontColor
    property string lightGreyFontColor: blackTheme ? _b_lightGreyFontColor : _w_lightGreyFontColor
    property string errorColor: blackTheme ? _b_errorColor : _w_errorColor
    property string textSelectionColor: blackTheme ? _b_textSelectionColor : _w_textSelectionColor
    property string textSelectedColor: blackTheme ? _b_textSelectedColor : _w_textSelectedColor

    property string inputBoxBackground: blackTheme ? _b_inputBoxBackground : _w_inputBoxBackground
    property string inputBoxBackgroundDisabled: blackTheme ? _b_inputBoxBackgroundDisabled : _w_inputBoxBackgroundDisabled
    property string inputBoxBackgroundError: blackTheme ? _b_inputBoxBackgroundError : _w_inputBoxBackgroundError
    property string inputBoxColor: blackTheme ? _b_inputBoxColor : _w_inputBoxColor
    property string legacy_placeholderFontColor: blackTheme ? _b_legacy_placeholderFontColor : _w_legacy_placeholderFontColor
    property string inputBorderColorActive: blackTheme ? _b_inputBorderColorActive : _w_inputBorderColorActive
    property string inputBorderColorInActive: blackTheme ? _b_inputBorderColorInActive : _w_inputBorderColorInActive
    property string inputBorderColorInvalid: blackTheme ? _b_inputBorderColorInvalid : _w_inputBorderColorInvalid

    property string buttonBackgroundColor: blackTheme ? _b_buttonBackgroundColor : _w_buttonBackgroundColor
    property string buttonBackgroundColorHover: blackTheme ? _b_buttonBackgroundColorHover : _w_buttonBackgroundColorHover
    property string buttonBackgroundColorDisabled: blackTheme ? _b_buttonBackgroundColorDisabled : _w_buttonBackgroundColorDisabled
    property string buttonBackgroundColorDisabledHover: blackTheme ? _b_buttonBackgroundColorDisabledHover : _w_buttonBackgroundColorDisabledHover
    property string buttonInlineBackgroundColor: blackTheme ? _b_buttonInlineBackgroundColor : _w_buttonInlineBackgroundColor
    property string buttonInlineBackgroundColorHover: blackTheme ? _b_buttonInlineBackgroundColorHover : _w_buttonInlineBackgroundColorHover
    property string buttonTextColor: blackTheme ? _b_buttonTextColor : _w_buttonTextColor
    property string buttonTextColorDisabled: blackTheme ? _b_buttonTextColorDisabled : _w_buttonTextColorDisabled
    property string buttonSecondaryBackgroundColor: blackTheme ? _b_buttonSecondaryBackgroundColor : _w_buttonSecondaryBackgroundColor
    property string buttonSecondaryBackgroundColorHover: blackTheme ? _b_buttonSecondaryBackgroundColorHover : _w_buttonSecondaryBackgroundColorHover
    property string buttonSecondaryTextColor: blackTheme ? _b_buttonSecondaryTextColor : _w_buttonSecondaryTextColor
    property string dividerColor: blackTheme ? _b_dividerColor : _w_dividerColor
    property real dividerOpacity: blackTheme ? _b_dividerOpacity : _w_dividerOpacity

    property string titleBarBackgroundGradientStart: blackTheme ? _b_titleBarBackgroundGradientStart : _w_titleBarBackgroundGradientStart
    property string titleBarBackgroundGradientStop: blackTheme ? _b_titleBarBackgroundGradientStop : _w_titleBarBackgroundGradientStop
    property string titleBarBackgroundBorderColor: blackTheme ? _b_titleBarBackgroundBorderColor : _w_titleBarBackgroundBorderColor
    property string titleBarLogoSource: blackTheme ? _b_titleBarLogoSource : _w_titleBarLogoSource
    property string titleBarMinimizeSource: blackTheme ? _b_titleBarMinimizeSource : _w_titleBarMinimizeSource
    property string titleBarFullscreenSource: blackTheme ? _b_titleBarFullscreenSource : _w_titleBarFullscreenSource
    property string titleBarCloseSource: blackTheme ? _b_titleBarCloseSource : _w_titleBarCloseSource
    property string titleBarButtonHoverColor: blackTheme ? _b_titleBarButtonHoverColor : _w_titleBarButtonHoverColor

    property string wizardBackgroundGradientStart: blackTheme ? _b_wizardBackgroundGradientStart : _w_wizardBackgroundGradientStart
    property string middlePanelBackgroundGradientStart: blackTheme ? _b_middlePanelBackgroundGradientStart : _w_middlePanelBackgroundGradientStart
    property string middlePanelBackgroundGradientStop: blackTheme ? _b_middlePanelBackgroundGradientStop : _w_middlePanelBackgroundGradientStop
    property string middlePanelBackgroundColor: blackTheme ? _b_middlePanelBackgroundColor : _w_middlePanelBackgroundColor
    property string menuButtonFallbackBackgroundColor: blackTheme ? _b_menuButtonFallbackBackgroundColor : _w_menuButtonFallbackBackgroundColor
    property string menuButtonGradientStart: blackTheme ? _b_menuButtonGradientStart : _w_menuButtonGradientStart
    property string menuButtonGradientStop: blackTheme ? _b_menuButtonGradientStop : _w_menuButtonGradientStop
    property string menuButtonTextColor: blackTheme ? _b_menuButtonTextColor : _w_menuButtonTextColor
    property string menuButtonImageRightColorActive: blackTheme ? _b_menuButtonImageRightColorActive : _w_menuButtonImageRightColorActive
    property string menuButtonImageRightColor: blackTheme ? _b_menuButtonImageRightColor : _w_menuButtonImageRightColor
    property string menuButtonImageRightSource: blackTheme ? _b_menuButtonImageRightSource : _w_menuButtonImageRightSource
    property string menuButtonImageDotArrowSource: blackTheme ? _b_menuButtonImageDotArrowSource : _w_menuButtonImageDotArrowSource
    property string inlineButtonTextColor: blackTheme ? _b_inlineButtonTextColor : _w_inlineButtonTextColor
    property string inlineButtonBorderColor: blackTheme ? _b_inlineButtonBorderColor : _w_inlineButtonBorderColor
    property string appWindowBackgroundColor: blackTheme ? _b_appWindowBackgroundColor : _w_appWindowBackgroundColor
    property string appWindowBorderColor: blackTheme ? _b_appWindowBorderColor : _w_appWindowBorderColor
    property bool progressBarProgressTextBold: blackTheme ? _b_progressBarProgressTextBold : _w_progressBarProgressTextBold
    property string progressBarBackgroundColor: blackTheme ? _b_progressBarBackgroundColor : _w_progressBarBackgroundColor
    property string leftPanelBackgroundGradientStart: blackTheme ? _b_leftPanelBackgroundGradientStart : _w_leftPanelBackgroundGradientStart
    property string leftPanelBackgroundGradientStop: blackTheme ? _b_leftPanelBackgroundGradientStop : _w_leftPanelBackgroundGradientStop
    property string historyHeaderTextColor: blackTheme ? _b_historyHeaderTextColor : _w_historyHeaderTextColor
    property var accountColors: blackTheme ? _b_accountColors : _w_accountColors

    // Resolved from the active palette. Names are unchanged, so the direct
    // _b_/_w_ references in MiddlePanel.qml, LeftPanel.qml and TextPlain.qml
    // keep working.

    property string _b_defaultFontColor: _b.defaultFontColor
    property string _w_defaultFontColor: _w.defaultFontColor
    property string _b_dimmedFontColor: _b.dimmedFontColor
    property string _w_dimmedFontColor: _w.dimmedFontColor
    property string _b_lightGreyFontColor: _b.lightGreyFontColor
    property string _w_lightGreyFontColor: _w.lightGreyFontColor
    property string _b_errorColor: _b.errorColor
    property string _w_errorColor: _w.errorColor
    property string _b_textSelectionColor: _b.textSelectionColor
    property string _w_textSelectionColor: _w.textSelectionColor
    property string _b_textSelectedColor: _b.textSelectedColor
    property string _w_textSelectedColor: _w.textSelectedColor
    property string _b_inputBoxBackground: _b.inputBoxBackground
    property string _w_inputBoxBackground: _w.inputBoxBackground
    property string _b_inputBoxBackgroundDisabled: _b.inputBoxBackgroundDisabled
    property string _w_inputBoxBackgroundDisabled: _w.inputBoxBackgroundDisabled
    property string _b_inputBoxBackgroundError: _b.inputBoxBackgroundError
    property string _w_inputBoxBackgroundError: _w.inputBoxBackgroundError
    property string _b_inputBoxColor: _b.inputBoxColor
    property string _w_inputBoxColor: _w.inputBoxColor
    property string _b_legacy_placeholderFontColor: _b.legacy_placeholderFontColor
    property string _w_legacy_placeholderFontColor: _w.legacy_placeholderFontColor
    property string _b_inputBorderColorActive: _b.inputBorderColorActive
    property string _w_inputBorderColorActive: _w.inputBorderColorActive
    property string _b_inputBorderColorInActive: _b.inputBorderColorInActive
    property string _w_inputBorderColorInActive: _w.inputBorderColorInActive
    property string _b_inputBorderColorInvalid: _b.inputBorderColorInvalid
    property string _w_inputBorderColorInvalid: _w.inputBorderColorInvalid
    property string _b_buttonBackgroundColor: _b.buttonBackgroundColor
    property string _w_buttonBackgroundColor: _w.buttonBackgroundColor
    property string _b_buttonBackgroundColorHover: _b.buttonBackgroundColorHover
    property string _w_buttonBackgroundColorHover: _w.buttonBackgroundColorHover
    property string _b_buttonBackgroundColorDisabled: _b.buttonBackgroundColorDisabled
    property string _w_buttonBackgroundColorDisabled: _w.buttonBackgroundColorDisabled
    property string _b_buttonBackgroundColorDisabledHover: _b.buttonBackgroundColorDisabledHover
    property string _w_buttonBackgroundColorDisabledHover: _w.buttonBackgroundColorDisabledHover
    property string _b_buttonInlineBackgroundColor: _b.buttonInlineBackgroundColor
    property string _w_buttonInlineBackgroundColor: _w.buttonInlineBackgroundColor
    property string _b_buttonInlineBackgroundColorHover: _b.buttonInlineBackgroundColorHover
    property string _w_buttonInlineBackgroundColorHover: _w.buttonInlineBackgroundColorHover
    property string _b_buttonTextColor: _b.buttonTextColor
    property string _w_buttonTextColor: _w.buttonTextColor
    property string _b_buttonTextColorDisabled: _b.buttonTextColorDisabled
    property string _w_buttonTextColorDisabled: _w.buttonTextColorDisabled
    property string _b_buttonSecondaryBackgroundColor: _b.buttonSecondaryBackgroundColor
    property string _w_buttonSecondaryBackgroundColor: _w.buttonSecondaryBackgroundColor
    property string _b_buttonSecondaryBackgroundColorHover: _b.buttonSecondaryBackgroundColorHover
    property string _w_buttonSecondaryBackgroundColorHover: _w.buttonSecondaryBackgroundColorHover
    property string _b_buttonSecondaryTextColor: _b.buttonSecondaryTextColor
    property string _w_buttonSecondaryTextColor: _w.buttonSecondaryTextColor
    property string _b_dividerColor: _b.dividerColor
    property string _w_dividerColor: _w.dividerColor
    property string _b_titleBarBackgroundGradientStart: _b.titleBarBackgroundGradientStart
    property string _w_titleBarBackgroundGradientStart: _w.titleBarBackgroundGradientStart
    property string _b_titleBarBackgroundGradientStop: _b.titleBarBackgroundGradientStop
    property string _w_titleBarBackgroundGradientStop: _w.titleBarBackgroundGradientStop
    property string _b_titleBarBackgroundBorderColor: _b.titleBarBackgroundBorderColor
    property string _w_titleBarBackgroundBorderColor: _w.titleBarBackgroundBorderColor
    property string _b_titleBarButtonHoverColor: _b.titleBarButtonHoverColor
    property string _w_titleBarButtonHoverColor: _w.titleBarButtonHoverColor
    property string _b_wizardBackgroundGradientStart: _b.wizardBackgroundGradientStart
    property string _w_wizardBackgroundGradientStart: _w.wizardBackgroundGradientStart
    property string _b_middlePanelBackgroundGradientStart: _b.middlePanelBackgroundGradientStart
    property string _w_middlePanelBackgroundGradientStart: _w.middlePanelBackgroundGradientStart
    property string _b_middlePanelBackgroundGradientStop: _b.middlePanelBackgroundGradientStop
    property string _w_middlePanelBackgroundGradientStop: _w.middlePanelBackgroundGradientStop
    property string _b_middlePanelBackgroundColor: _b.middlePanelBackgroundColor
    property string _w_middlePanelBackgroundColor: _w.middlePanelBackgroundColor
    property string _b_menuButtonFallbackBackgroundColor: _b.menuButtonFallbackBackgroundColor
    property string _w_menuButtonFallbackBackgroundColor: _w.menuButtonFallbackBackgroundColor
    property string _b_menuButtonGradientStart: _b.menuButtonGradientStart
    property string _w_menuButtonGradientStart: _w.menuButtonGradientStart
    property string _b_menuButtonGradientStop: _b.menuButtonGradientStop
    property string _w_menuButtonGradientStop: _w.menuButtonGradientStop
    property string _b_menuButtonTextColor: _b.menuButtonTextColor
    property string _w_menuButtonTextColor: _w.menuButtonTextColor
    property string _b_menuButtonImageRightColorActive: _b.menuButtonImageRightColorActive
    property string _w_menuButtonImageRightColorActive: _w.menuButtonImageRightColorActive
    property string _b_menuButtonImageRightColor: _b.menuButtonImageRightColor
    property string _w_menuButtonImageRightColor: _w.menuButtonImageRightColor
    property string _b_inlineButtonTextColor: _b.inlineButtonTextColor
    property string _w_inlineButtonTextColor: _w.inlineButtonTextColor
    property string _b_inlineButtonBorderColor: _b.inlineButtonBorderColor
    property string _w_inlineButtonBorderColor: _w.inlineButtonBorderColor
    property string _b_appWindowBackgroundColor: _b.appWindowBackgroundColor
    property string _w_appWindowBackgroundColor: _w.appWindowBackgroundColor
    property string _b_appWindowBorderColor: _b.appWindowBorderColor
    property string _w_appWindowBorderColor: _w.appWindowBorderColor
    property string _b_progressBarBackgroundColor: _b.progressBarBackgroundColor
    property string _w_progressBarBackgroundColor: _w.progressBarBackgroundColor
    property string _b_leftPanelBackgroundGradientStart: _b.leftPanelBackgroundGradientStart
    property string _w_leftPanelBackgroundGradientStart: _w.leftPanelBackgroundGradientStart
    property string _b_leftPanelBackgroundGradientStop: _b.leftPanelBackgroundGradientStop
    property string _w_leftPanelBackgroundGradientStop: _w.leftPanelBackgroundGradientStop
    property string _b_historyHeaderTextColor: _b.historyHeaderTextColor
    property string _w_historyHeaderTextColor: _w.historyHeaderTextColor

    property real _b_dividerOpacity: _b.dividerOpacity
    property real _w_dividerOpacity: _w.dividerOpacity
    property bool _b_progressBarProgressTextBold: _b.progressBarProgressTextBold
    property bool _w_progressBarProgressTextBold: _w.progressBarProgressTextBold
    property var _b_accountColors: _b.accountColors
    property var _w_accountColors: _w.accountColors

    // Accent used by components that previously hardcoded Monero orange.
    property string accentColor: blackTheme ? _b.accentColor : _w.accentColor

    // Account card artwork tint. null means leave the stock artwork alone.
    property var cardHue: blackTheme ? _b.cardHue : _w.cardHue
    property real cardSaturation: blackTheme ? _b.cardSaturation : _w.cardSaturation
    property real cardLightness: blackTheme ? _b.cardLightness : _w.cardLightness

    property string _b_titleBarLogoSource: "qrc:///images/titlebarLogo.png"
    property string _b_titleBarMinimizeSource: "qrc:///images/minimize.svg"
    property string _b_titleBarFullscreenSource: "qrc:///images/fullscreen.svg"
    property string _b_titleBarCloseSource: "qrc:///images/close.svg"
    property string _b_menuButtonImageRightSource: "qrc:///images/right.svg"
    property string _b_menuButtonImageDotArrowSource: "qrc:///images/arrow-right-medium-white.png"
    property string _w_titleBarLogoSource: "qrc:///images/themes/white/titlebarLogo.png"
    property string _w_titleBarMinimizeSource: "qrc:///images/themes/white/minimize.svg"
    property string _w_titleBarFullscreenSource: "qrc:///images/themes/white/fullscreen.svg"
    property string _w_titleBarCloseSource: "qrc:///images/themes/white/close.svg"
    property string _w_menuButtonImageRightSource: "qrc:///images/right.svg"
    property string _w_menuButtonImageDotArrowSource: "qrc:///images/arrow-right-medium-white.png"
}
