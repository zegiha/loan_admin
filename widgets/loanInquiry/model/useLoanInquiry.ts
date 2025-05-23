'use client'

import {loanboardControllerFindAll} from '@/entities/api/loanboard/loanboard'
import {LoanboardResponseDto} from '@/entities/const'
import {ILoanInquiryTalbeRow} from '@/widgets/loanInquiry/const/type'
import {useInfiniteQuery} from '@tanstack/react-query'
import {useEffect, useState} from 'react'
import {Swiper} from 'swiper'

export default function useLoanInquiry(limitDefault: number) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [target, setTarget] = useState<LoanboardResponseDto | null>(null)

  const [limit, setlimit] = useState<number>(limitDefault)
  const [fetchedPage, setFetchedPage] = useState<number>(0)
  const [maxPage, setMaxPage] = useState<number>(1)
  const [pendingFetch, setPendingFetch] = useState<number>(0)

  const queryRes = useInfiniteQuery({
    queryKey: ['loanInquiry'],
    queryFn: async ({pageParam}) => {
      const data = await loanboardControllerFindAll({
        page: pageParam,
        limit,
        type: '전체',
        location: ['전체'],
        search_type: 'title',
      })

      if(fetchedPage === 0)
        setFetchedPage(1)

      if(data.totalPages != maxPage)
        setMaxPage(data.totalPages)

      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if(lastPage.page === lastPage.totalPages)
        return undefined
      return lastPage.page + 1
    },
    select: data => {
      const res: Array<Array<ILoanInquiryTalbeRow> | null> = []
      data.pages.forEach(v => {
        res.push([...v.data.map(v => ({
          ...v,
          moreInfoFunc: () => {
            setTarget({...v})
            setIsOpen(true)
          }
        }))])
      })
      for(let i = res.length; i < data.pages[0].totalPages; i++)
        res.push(null)
      return res
    }
  })

  const initInfiniteQueryState = () => {
    setFetchedPage(0)
    setMaxPage(0)
    setPendingFetch(0)
  }

  const handleRefetch = () => {
    initInfiniteQueryState()
    queryRes.refetch()
  }

  useEffect(() => {
    setlimit(limitDefault)
    handleRefetch()
  }, [limitDefault]);

  useEffect(() => {
    if(pendingFetch > 0) {
      if(queryRes.hasNextPage && !queryRes.isFetchingNextPage) {
        queryRes.fetchNextPage()
          .then(() => {
            setPendingFetch(p => p - 1)
            setFetchedPage(p => p + 1)
          })
      }
    }
  }, [pendingFetch]);

  const onSlideChangeCallback = (swiper: Swiper) => {
    const nowFetchedAndPendingPages = fetchedPage + pendingFetch
    if(nowFetchedAndPendingPages < swiper.activeIndex + 1)
      setPendingFetch(swiper.activeIndex + 1 - nowFetchedAndPendingPages)
  }

  return {
    isOpen, setIsOpen,
    target, setTarget,
    ...queryRes,
    refetch: handleRefetch,
    onSlideChangeCallback,
  }
}