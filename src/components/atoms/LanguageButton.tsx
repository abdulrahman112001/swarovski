import { Button } from "@mantine/core";
import { useState } from 'react';
import i18n from "../../i18n";
const LanguageButton = () => {

    const [lang, setLang] = useState(i18n.language)
    return (
        <Button variant="default" onClick={() => {
            if (lang == 'ar') {
                i18n.changeLanguage('en')
                setLang('en')
                document.body.setAttribute('dir', 'ltr')
                window.localStorage.setItem('dir','ltr')
            }
            else {
                i18n.changeLanguage('ar')
                setLang('ar')
                document.body.setAttribute('dir', 'rtl')
                window.localStorage.setItem('dir','rtl')

            }
        }}>{lang === 'ar' ? 'En' : 'ع'}</Button>
    )
}

export default LanguageButton