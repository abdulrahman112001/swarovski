/* eslint-disable react-refresh/only-export-components */
import { ColorScheme } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { ReactNode, createContext, useCallback, useContext, useMemo } from "react"

type ThemeProvider_TP = {
    children: ReactNode
}
type ThemeContext_TP = {
    colorScheme:ColorScheme
    toggleColorScheme:(value?: ColorScheme) => void
}
const ThemeContext = createContext<ThemeContext_TP>(null as unknown as ThemeContext_TP)

export const ThemeProvider = ({ children }: ThemeProvider_TP) => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
      });
        const toggleColorScheme = useCallback((value?: ColorScheme)=>{
            setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
        },[colorScheme , setColorScheme])

    const value = useMemo(() => ({
        colorScheme,
        toggleColorScheme
    }), [colorScheme,toggleColorScheme ])

    return (
        <ThemeContext.Provider value={value}>
                {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = ()=>{
    return useContext(ThemeContext)
}

