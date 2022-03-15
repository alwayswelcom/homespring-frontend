interface BaseProps {
    className?: string;
}

const Divider = ({className}: BaseProps) => {
    let customClass = className ? className: ""
    return (
        <div className={`w-full border-b ${customClass}`}>
        </div>
    );
}



export default Divider;