import { Logo2Props } from "./types";

export default function Logo2(props: Logo2Props){
    const {mainColor, secondaryColor, ...rest} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1080 300" fontFamily="Raleway" fontSize="105" fontWeight="900" {...rest}>
            <g transform="translate(540, 150)">
                <g transform="scale(2.23)">
                    <text>
                        <tspan x="-232.63" y="32.98" fill={mainColor || "#0a93eb"}>Posi</tspan>
                        <tspan x="2.26" y="32.98" fill={secondaryColor || "white"}>Pool</tspan>
                    </text>
                </g>
            </g>
        </svg>
    )
}