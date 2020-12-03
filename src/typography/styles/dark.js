import create from '../../_styles/utils/create-component-base'
import commonVars from './_common'

export default create({
  theme: 'dark',
  name: 'Typography',
  getLocalVars (vars) {
    return {
      ...commonVars,
      aTextColor: vars.primaryColor,
      blockquoteTextColor: vars.textColor2Overlay,
      blockquotePrefixColor: vars.borderColorOverlay,
      codeBorderRadius: vars.borderRadiusSmall,
      liTextColor: vars.textColor2Overlay,
      hrColor: vars.dividerColorOverlay,
      headerFontWeight: vars.fontWeightStrong,
      headerTextColor: vars.textColor1Overlay,
      pTextColor: vars.textColor2Overlay,
      pTextColor1Depth: vars.textColor1Overlay,
      pTextColor2Depth: vars.textColor2Overlay,
      pTextColor3Depth: vars.textColor3Overlay,
      headerBarColor: vars.primaryColor,
      headerBarColorPrimary: vars.primaryColor,
      headerBarColorInfo: vars.infoColor,
      headerBarColorError: vars.errorColor,
      headerBarColorWarning: vars.warningColor,
      headerBarColorSuccess: vars.successColor,
      textColor: vars.textColor2Overlay,
      textColorStrong: vars.textColor1Overlay,
      textColor1Depth: vars.textColor1Overlay,
      textColor2Depth: vars.textColor2Overlay,
      textColor3Depth: vars.textColor3Overlay,
      textColor1: vars.primaryColor,
      textColorInfo: vars.infoColor,
      textColorSuccess: vars.successColor,
      textColorWarning: vars.warningColor,
      textColorError: vars.errorColor,
      codeTextColor: vars.textColor2Overlay,
      codeColor: vars.codeColorOverlay,
      codeBorderColor: 'transparent'
    }
  }
})
