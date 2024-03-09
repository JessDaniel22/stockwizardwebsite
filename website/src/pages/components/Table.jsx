import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import "./Table.css";

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "Ticker", accessor: "ticker" },
      { Header: "Company Name", accessor: "company_name" },
      { Header: "Industry", accessor: "industry" },
      { Header: "Location", accessor: "location" },
      { Header: "Mean Sentiment", accessor: row => row ,  
      Cell: ({ value }) => {
      const getSentimentDisplay = (sentimentValue) => {
        let color = ""; 
        let arrow = ""; 

        if (sentimentValue > 0) {
          color = "green";
          arrow = "↑";
        } else if (sentimentValue < 0) {
          color = "red";
          arrow = "↓";
        } else if (sentimentValue === 0) {
          color = "grey";
          arrow = "-";
        }

        return (
          <span style={{ color }}>
            {arrow} {sentimentValue.toFixed(2)} {/* Adjusted for displaying up to two decimal places */}
          </span>
        );
      };

      return (
        <div>
          {getSentimentDisplay(value.wms_1D)} | {getSentimentDisplay(value.wms_2D)} | {getSentimentDisplay(value.wms_3D)}
        </div>
      );
    },
  }
], []);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, usePagination);

  return (
    <div className="main-page">
      <div className="table-container1">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ↓"
                          : " ↑"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          
        <div className="pagination-controls">
  <select 
    className="page-size"
    value={pageSize}
    onChange={(e) => {
      setPageSize(Number(e.target.value));
    }}
  >
    {[10, 20, 30, 40, 50].map((pageSize) => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select>
  <div className="page-indicator">
    Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
  </div>
</div>
        </div>
      </div>
      <h2 className="table-title">Based on your watchlist</h2>
      <div className="table-container2">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ↓"
                          : " ↑"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          
          <div className="pagination-controls">
  <select 
    className="page-size"
    value={pageSize}
    onChange={(e) => {
      setPageSize(Number(e.target.value));
    }}
  >
    {[10, 20, 30, 40, 50].map((pageSize) => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select>
  <div className="page-indicator">
    Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
