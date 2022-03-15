import React from 'react';

interface PaginationProps {
    totalCount?: number
    currentPage: number
    perPage: number
    onChange: (val: number) => void 
}

const Pagination = ({totalCount, currentPage, perPage, onChange}: PaginationProps) => {
    let pageMax = totalCount ? Math.ceil(totalCount / perPage) : 1
    let limit_low = currentPage - 2
    let limit_high = currentPage + 2

    let disp_arr: any[] = []
    
    if(limit_low >= 1 && limit_high <= pageMax) {
        for (let i = limit_low; i < limit_high + 1; i++) {
            disp_arr.push(i)
        }
    } else if( pageMax <= 5) {
        for (let i = 1; i < pageMax + 1; i++) {
            disp_arr.push(i)
        }
    } else {
        if( currentPage < 3)
            disp_arr = [currentPage, currentPage + 1, '...', pageMax - 1, pageMax]
        else if (currentPage > pageMax - 2) {
            disp_arr = [1, 2, '...', currentPage - 1, currentPage]
        }
    }

    return (
        <div className='flex flex-row space-x-2'>
            <div className={`${currentPage === 1 ? "bg-zinc-400 text-violet-250": ""} h-8 w-8 font-bold rounded border flex items-center justify-center cursor-pointer`}
                onClick={
                    () => {
                        if(currentPage > 1) 
                            onChange(Number(currentPage - 1))
                    }
                }
            > &lt; </div>
            {disp_arr.map( (item) => (
                <div
                    className={`${ 
                            currentPage === item 
                                ? "text-violet-850 border-violet-850"
                                : "border-violet-250 text-zinc-900"
                        } h-8 w-8 font-bold rounded border flex items-center justify-center cursor-pointer`}
                   
                    key={"pagination-" + item}
                    onClick={
                        () => {
                            if(!isNaN(Number(item))) {
                                onChange(Number(item))
                            }
                        }
                    }
                >
                    {item}
                </div>
            ))}
            <div className={`${currentPage === pageMax ? "bg-zinc-400 text-violet-250": ""} h-8 w-8 font-bold rounded border flex items-center justify-center cursor-pointer`}
                onClick={
                    () => {
                        if(currentPage < pageMax) 
                            onChange(Number(currentPage + 1))
                    }
                }
            > &gt; </div>
        </div>
    );
}



export default Pagination;