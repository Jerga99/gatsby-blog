
import React from "react"

export default function BlogsPaginated({pageContext}) {
  const { limit, currentPage, numOfPages } = pageContext
  return (
    <>
      <div>Items per page: {limit}</div>
      <div>Current page: {currentPage}</div>
      <div>Total number of pages: {numOfPages}</div>
    </>
  )
}
