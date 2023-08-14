import { createStyles } from '@mantine/core'

type ThemeOptions_TP = {
    light:string
    dark?:string
   }
type UseThemeProps_TP = {
   bg:ThemeOptions_TP
   text?:ThemeOptions_TP
}

type UseThemeReturnType_TP = {
   classes:{
    theme:string
  };
}
  

export const UseTheme = ({bg,text}:UseThemeProps_TP):UseThemeReturnType_TP => {

    const useStyles = createStyles(theme => ({
        theme: {
          background: theme.colorScheme === "dark" ? bg.dark || "#1a1b1e" : bg.light,
          color: theme.colorScheme === "dark" ? text?.dark : text?.light,
        }
      }))
    const {classes} = useStyles()

  return {classes}
}