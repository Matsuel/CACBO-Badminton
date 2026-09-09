interface MenuProps {
    width?: number;
    height?: number;
    fill?: string;
}


const Menu = ({
    fill = "none",
    width = 21,
    height = 12,
    ...props
}: MenuProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: menu icon
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        {...props}
    >
        <path
            fill="#FF1C1C"
            d="M19.902 10.027v-.5.5Zm.5.5h.5-.5Zm-.5.5v.5-.5ZM.5 10.527H0h.5ZM19.902.5V0v.5Zm0 1V2v-.5Zm0 8.527v.5h1a1 1 0 0 0-1-1v.5Zm.5.5h-.5v1a1 1 0 0 0 1-1h-.5Zm-.5.5v-.5H1v1h18.902v-.5ZM1 11.027v-.5H0a1 1 0 0 0 1 1v-.5Zm-.5-.5H1v-1a1 1 0 0 0-1 1h.5Zm.5-.5v.5h18.902v-1H1v.5ZM19.902.5V1h1a1 1 0 0 0-1-1v.5Zm.5.5h-.5v1a1 1 0 0 0 1-1h-.5Zm-.5.5V1H1v1h18.902v-.5ZM1 1.5V1H0a1 1 0 0 0 1 1v-.5ZM.5 1H1V0a1 1 0 0 0-1 1h.5ZM1 .5V1h18.902V0H1v.5Z"
        />
    </svg>
);


export default Menu;
