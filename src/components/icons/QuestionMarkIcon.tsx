import { SVGProps } from 'react'

type Props = {}

const QuestionMarkIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={213}
        height={215}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g filter="url(#a)">
            <path
                d="M119.925 203.978c-2.095 2.094-4.409 3.62-6.944 4.577-2.528.963-5.188 1.445-7.981 1.445s-5.453-.482-7.981-1.445c-2.535-.957-4.85-2.483-6.944-4.577L6.022 119.925c-2.094-2.095-3.624-4.409-4.587-6.944C.478 110.453 0 107.793 0 105s.478-5.453 1.435-7.981c.963-2.535 2.493-4.85 4.587-6.944L90.075 6.022c2.095-2.094 4.41-3.624 6.944-4.587C99.547.478 102.207 0 105 0s5.453.478 7.981 1.435c2.535.963 4.849 2.493 6.944 4.587l84.053 84.053c2.094 2.095 3.624 4.41 4.587 6.944.957 2.528 1.435 5.188 1.435 7.981s-.478 5.453-1.435 7.981c-.963 2.535-2.493 4.849-4.587 6.944l-84.053 84.053ZM105 115.474c2.968 0 5.457-1.006 7.468-3.017 2.004-2.004 3.006-4.489 3.006-7.457V63.105c0-2.968-1.002-5.457-3.006-7.468-2.011-2.004-4.5-3.006-7.468-3.006s-5.453 1.002-7.457 3.006c-2.011 2.01-3.017 4.5-3.017 7.468V105c0 2.968 1.006 5.453 3.017 7.457 2.004 2.011 4.489 3.017 7.457 3.017Zm0 31.421c2.968 0 5.457-1.005 7.468-3.016 2.004-2.004 3.006-4.49 3.006-7.458 0-2.967-1.002-5.456-3.006-7.467-2.011-2.004-4.5-3.006-7.468-3.006s-5.453 1.002-7.457 3.006c-2.011 2.011-3.017 4.5-3.017 7.467 0 2.968 1.006 5.454 3.017 7.458 2.004 2.011 4.489 3.016 7.457 3.016Z"
                fill="#D82E4C"
            />
        </g>
        <defs>
            <filter
                id="a"
                x={0}
                y={0}
                width={213}
                height={215}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx={3} dy={5} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_595_373" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_595_373"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)


export default QuestionMarkIcon