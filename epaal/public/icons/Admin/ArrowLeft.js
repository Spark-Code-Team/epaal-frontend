


export default function ArrowLeft({ rotate }) {

    return (
        <svg className={`transition-all ${rotate ? "rotate-180" : ""}`} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="chevron-left-small">
                <path id="Vector" d="M12.82 16L6.5 9.68L8.17 8L12.82 12.65L17.47 8L19.14 9.68L12.82 16Z" fill="black"/>
            </g>
        </svg>
    )
}