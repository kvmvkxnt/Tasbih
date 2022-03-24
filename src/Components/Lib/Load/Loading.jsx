function Loading({ size = 294 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={`${size}px`} height={`${size}px`} viewBox="0 0 100 100" style={{ margin: "auto", background: "transparent", display: "block", shapeRendering: "auto" }} preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" fill="none" stroke="#1da1f2" strokeWidth="6" r="21" strokeDasharray="98.96016858807849 34.98672286269283">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.4347826086956522s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
            </circle>
        </svg>
    )
}

export default Loading;