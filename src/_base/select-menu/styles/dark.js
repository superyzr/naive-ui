import create from '../../../_styles/utils/create-component-base'
import commonVariables from './_common'

export default create({
  name: 'BaseSelectMenu',
  theme: 'dark',
  getDerivedVariables ({ base, derived }) {
    return {
      ...commonVariables,
      borderRadius: base.borderRadius,
      color: derived.popoverColor,
      boxShadow: derived.boxShadow2,
      groupHeaderTextColor: derived.textColor3Overlay,
      actionDividerColor: derived.dividerColorOverlay,
      optionTextColor: derived.textColor2Overlay,
      optionTextColorPressed: derived.primaryColorPressed,
      optionTextColorDisabled: derived.textColorDisabledOverlay,
      optionTextColorSelected: derived.primaryColor,
      optionOpacityDisabled: derived.opacityDisabled,
      optionCheckColor: derived.primaryColor,
      optionColorPending: derived.hoverColorOverlay,
      actionTextColor: derived.textColor2Overlay
    }
  }
})
