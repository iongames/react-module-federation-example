import { FC } from 'react'

const Button: FC<{ text: string }> = ({ text }) => (
    <button className="text-primary cursor-pointer rounded-xl bg-white px-4 py-2">{text}</button>
)

export default Button
