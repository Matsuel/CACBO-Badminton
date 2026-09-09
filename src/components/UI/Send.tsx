
interface SendProps {
    width?: number
    height?: number
    fill?: string
}

const Send = ({
    width = 14,
    height = 13,
    fill = "currentColor",
    ...props
}: SendProps) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <svg> is used as an icon, so it doesn't need a title
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <path
            fill={fill}
            d="M.681.02a.552.552 0 0 0-.528.131.49.49 0 0 0-.13.504l1.728 5.339h6.046a.52.52 0 0 1 .533.506.52.52 0 0 1-.533.507H1.751L.024 12.345a.49.49 0 0 0 .13.504c.136.133.34.183.527.13a43.924 43.924 0 0 0 13.097-6.068A.5.5 0 0 0 14 6.5a.5.5 0 0 0-.222-.411A43.925 43.925 0 0 0 .681.02Z"
        />
    </svg>
)
export default Send
