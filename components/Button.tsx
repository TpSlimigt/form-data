'use client'

type ButtonProps = {
    label: string
    color?: ColorVariantKey
    onClick?: () => void
}

type ColorVariantKey= 'blue' | 'white'

export default function Button({
    label,
    color = 'blue',
    onClick,
}: ButtonProps): JSX.Element {
    const colorVariants = {
        blue: 'text-white bg-blue-500 hover:bg-blue-800',
        white: 'text-blue-400 bg-white hover:bg-gray-100',
    }

    return(
        <button
        className={`focus:outline-none ${colorVariants[color]} font-medium text-sm px-3 py-2 ml-0 m-2`}
        onClick={onClick}>{label}</button>
    )
}