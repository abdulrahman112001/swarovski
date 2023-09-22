/////////// IMPORTS
///
//import styles from './Settings.module.css'
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useIsRTL } from "../hooks/useIsRTL"

// import { authCtx } from "../context/auth-and-perm/auth"
///
/////////// Types
///
type SettingsProps_TP = {
  title: string
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Settings = ({ title }: SettingsProps_TP) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const isRTL = useIsRTL()

  ///
  /////////// STATES
  ///
  ///
  /////////// SIDE EFFECTS
  ///
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [isRTL])


  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///
  const toggleLang = () => {
    i18n.changeLanguage(isRTL ? "en" : "ar")
  }

 
  ///
  return (
    <>

      <button type="button" onClick={toggleLang}>
        change Language
      </button>
      <div className="flex items-center gap-2 w-[50rem]">
    
        
        {/* <Button loading={isLoggingOut} action={logOutHandler}>
          تسجيل خروج
        </Button> */}
      </div>
    </>
  )
}
