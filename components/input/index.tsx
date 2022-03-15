import Image from 'next/image'

interface InputProps {
    className?: string;
    type?: 'text' | 'search',
    placeholder?: string,
    value?: string,
    onChange?: (ev: React.FormEvent<HTMLInputElement>) => void
}

const Input = ({className, type, placeholder, onChange, value}: InputProps) => {
    let customClass = className ? className: ""
    let inputType = type ? type: "text"
    return (
        <div className={`relative h-14 flex items-center  ${customClass}`}>
            <input type={inputType} placeholder={placeholder} className="h-full w-full focus:outline-0 pl-15 pr-8" onChange={onChange} value={value}/>
            {type === 'search' && (
                <div className='absolute flex left-[26.5px]'>
                    <Image src='/search.svg' width={15} height={15} alt="Search"/>
                </div>
            )}
        </div>
    );
}



export default Input;