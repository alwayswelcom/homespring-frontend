import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Card from 'components/card'
import Input from 'components/input'
import Divider from 'components/divider'
import { BookInfo } from 'pages/types'
import Book from './components/Book'
import { useRouter } from 'next/router'
import Pagination from 'components/pagination'

interface SearchResult {
    totalItems: number,
    items: BookInfo[]
}

const Home: NextPage = () => {
    const router = useRouter()
    let { filter } = router.query

    const [searchKey, setSearchKey] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const [searchResult, setSearchResult] = useState<SearchResult>()

    const handleSearch = (ev: React.FormEvent<HTMLInputElement>) => {
        setSearchKey(ev.currentTarget.value)
    }

    
    useEffect( () => {
        const fetchData = async () => {
            try {
                var url = new URL(`${process.env.NEXT_PUBLIC_HOST}/books`)
                var params = {filter:filter ? filter: "ebooks", startIndex: (currentPage - 1) * 10, maxResults: 10} as unknown as URLSearchParams
                url.search = `q=${searchKey}+intitle&` + new URLSearchParams(params).toString();
                const res = await fetch(url.toString())
                const searchResult = await res.json()
                setSearchResult(searchResult)
            } catch(e) {

            }
        }
        fetchData()
    }, [searchKey, router.query.filter, currentPage])

    return (
        <Card className="flex flex-col h-full w-full bg-white  overflow-hidden justify-between">
            <div className='flex flex-col'>
                <Input className='w-full' type='search' placeholder='Start searching...' onChange={handleSearch} value={searchKey}/>
                <Divider className='border-b-zinc-200'/>
            </div>
            <div className='px-6 w-available h-available overflow-x-hidden overflow-y-scroll'>
                {
                    searchResult?.items?.map( (item) => (
                        <Book key={item.id} item={item} />
                    ))
                }
            </div>
            <div className='flex flex-row h-20 py-8 justify-center items-center'>
                <Pagination totalCount={searchResult?.totalItems} perPage={10} currentPage={currentPage} onChange={setCurrentPage}/>
            </div>
        </Card>
    )
}

export default Home