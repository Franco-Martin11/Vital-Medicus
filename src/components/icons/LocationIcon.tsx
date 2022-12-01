import { SVGProps } from "react"

type Props = {}

const LocationIcon = (props: SVGProps<SVGSVGElement>) => {
    return (<svg
        width={80}
        height={80}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M40 0C17.909 0 0 17.909 0 40s17.909 40 40 40 40-17.909 40-40S62.091 0 40 0Zm0 13.55c11.012 0 19.941 8.929 19.941 19.941 0 3.336-.914 7.74-2.793 10.23L40 66.45 22.852 43.72c-2.07-2.742-2.794-6.547-2.794-10.23 0-11.012 8.93-19.941 19.942-19.941Zm0 11.552a8.388 8.388 0 0 0-8.389 8.39A8.388 8.388 0 0 0 40 41.88a8.388 8.388 0 0 0 8.389-8.389A8.388 8.388 0 0 0 40 25.102Z"
            fill="#fff"
        />
    </svg>)
}

export default LocationIcon