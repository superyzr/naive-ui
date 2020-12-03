import create from '../../_styles/utils/create-component-base'

export default create({
  theme: 'dark',
  name: 'Drawer',
  getLocalVars (vars) {
    return {
      color: vars.modalColor,
      textColor: vars.textColor2Overlay,
      boxShadow: vars.boxShadow3
    }
  }
})
