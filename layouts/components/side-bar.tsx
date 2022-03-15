import Select from "components/select"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function SideBar() {
    const router = useRouter()
    const { _filter } = router.query

    const handleFilter = (ev: React.FormEvent<HTMLSelectElement>) => {
        router.push('/?filter=' + ev.currentTarget.value)
    }
    return (
        <div className="flex flex-col pl-5 pr-11 w-80">
            <div className="text-base text-zinc-900 font-bold">Filter your results</div>
            <Select className="mt-3" onChange={handleFilter} value={_filter}>
                <option value="ebooks">All books</option>
                <option value="free-ebooks">Free books</option>
                <option value="paid-ebooks">Paid books</option>
                <option value="partial">Partial</option>
                <option value="full">Full</option>   
            </Select>
        </div>
    )
}