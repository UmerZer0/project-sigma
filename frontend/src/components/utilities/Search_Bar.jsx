import { Link } from "react-router-dom";
import { useState } from "react";

export default function Search_Bar() {
  //   const { items, setItems } = useState(``);
  const [query, setQuery] = useState(``);
  const list = [`Apple`, `Banana`, `Cherry`, `Date`, `Elderberry`];

  const sortResults = (unsorted, letter) =>
    unsorted.sort(
      (a, b) =>
        a.toLowerCase().indexOf(letter.toLowerCase()) -
        b.toLowerCase().indexOf(letter.toLowerCase())
    );

  const filteredItems = list.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  query[0] ? sortResults(filteredItems, query[0]) : filteredItems;

  return (
    <>
      <div className="search-box">
        <input
          className="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
        <div className="search-results">
          {filteredItems.map((item) => {
            return (
              <Link key={item}>
                <div className="result">{item}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
