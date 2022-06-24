// arguments takes rowsperPage
// returns page, visited, changePage

import { useState } from "react";

const usePaginationc = ({ rowsPerPage, pageCount }) => {
  const [page, setPage] = useState(1);
  const visited = (page - 1) * rowsPerPage;

  const changePage = (e, value) => {
    setPage(value);
  };

  if (pageCount === 0) return { page, visited, changePage };
  page > pageCount && setPage(1);

  return { page, visited, changePage };
};

export default usePaginationc;
