import React, { useState, useEffect } from "react"
import * as JsSearch from "js-search"
import * as styles from "./SearchContainer.module.scss"
import searchIndex from "./searchIndex.json"

export default function SearchContainer() {
  const [search, setSearch] = useState({
    results: [],
    engine: {},
    query: "Default Value"
  })

  useEffect(() => {
    rebuildIndex();
  }, [])


  const rebuildIndex = () => {
    const searchEngine = new JsSearch.Search("slug")
    searchEngine.sanitizer = new JsSearch.LowerCaseSanitizer()
    searchEngine.indexStrategy = new JsSearch.PrefixIndexStrategy()
    searchEngine.searchIndex = new JsSearch.TfIdfSearchIndex("slug");

    searchEngine.addIndex("title")
    searchEngine.addIndex("subtitle")
    searchEngine.addDocuments(searchIndex.blogs)

    setSearch({...search, engine: searchEngine})
  }

  const performSearch = (e) => {
    setSearch({...search, query: e.target.value})
  }

  return (
    <div>
      <input
        onChange={performSearch}
        value={search.query}
        style={{width: "200px"}}
        className="input"
        type="text"
        placeholder="Search" />
      { search.results.length > 0 &&
        <div
          className={`${styles.options} select is-multiple`}>
          <ul>
            { search.results.map(result => (
              <li
                role='presentation'
                key={result.slug}
                className={`${styles.option} p-2`}>
                <p className={`${styles.title}`}>{result.title}</p>
                <p className={`${styles.subtitle}`}>{result.subtitle}</p>
              </li>
            ))
            }
          </ul>
        </div>
      }
    </div>
  )
}
