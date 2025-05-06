import { useTranslation } from 'react-i18next'

export const ErrorPage = () => {
    const { t } = useTranslation()

    return (
        <div className="bg-primary flex h-screen flex-col items-center justify-center gap-5">
            <h1 className="text-5xl font-bold text-white">{t('oops')}</h1>
            <p className="text-3xl text-white">{t('error.default')}</p>
            <p className="text-2xl text-white">{t('nothing-found')}</p>
        </div>
    )
}
