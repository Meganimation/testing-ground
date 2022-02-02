import React, { useState, useRef, useCallback } from "react";
import useBookSearch from "../../components/customhooks/useBookSearch";

function InfiniteScrollComponent(props: IInfiniteScrollComponentProps) {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef();

  //@ts-ignore
  const lastBookElementRef = useCallback(node => {
    if (loading) return
      //@ts-ignore
    if (observer.current) observer.current.disconnect();
      //@ts-ignore
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
        console.log('visible')
      }
    })
  //@ts-ignore
    if(node) observer.current.observe(node);

    console.log(node)
  }, [loading, hasMore]);



  function handleSearch(e: any) {
    setQuery(e.target.value);
    setPageNumber(1);
  }



  return (
    <div style={{background: 'red', height: '300px', overflow:"scroll"}} onScroll={()=>{console.log('scrolling')}} >
      <input onChange={handleSearch} type="text" value={query} />
      <>
        <button
          onClick={() => {
            console.log(books);
          }}
        >
          Search
        </button>
        {books.map((book: any, index: any) => {
          if (books.length === index + 1) {
            return (<div ref={lastBookElementRef} key={book}>
            {book}
          </div>)
          }
          else {
          return (
            <div key={book}>
              {book}
            </div>
          )}
        })}

        <div>{loading && "loading..."}</div>
        <div>{error && "error..."}</div>
      </>
      this is the infinte scroll component
    </div>
  );
}

interface IInfiniteScrollComponentProps {
  handleExit: (page: string) => void;
}

export default InfiniteScrollComponent;
