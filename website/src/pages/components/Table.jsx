import React, {useState} from "react";
import DataTable from "react-data-table-component";
import "./Table.css";

const Table = () => {
  const columns = [
    {
      name: "logo",
      selector: (row) => row.logo,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Summary",
      selector: (row) => row.summary,

    },
    {
      name: "Follow Status",
      selector: (row) => row.followStatus,
      
    },
  ];
  const data = [
    {
      id: 1,
      logo: "logo",
      company: "company",
      summary: "summary",
      followStatus: "followStatus",
    },
    {
      id: 2,
      logo: "logo",
      company: "company",
      summary: "summary",
      followStatus: "followStatus",
    },
    {
      id: 3,
      logo: "logo",
      company: "company",
      summary: "summary",
      followStatus: "followStatus",
    },
    {
      id: 4,
      logo: "logo",
      company: "company",
      summary: "summary",
      followStatus: "followStatus",
    },
  ];
  const [records, setRecords] = useState(data);

  function handleFilter(e){
    const newData = data.filter(row => {
        return row.company.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setRecords(newData);
  }
  return (
    <div className="main-page">
    <div className="container">
        <div className="search"><input type="text" onChange={handleFilter}/> </div>
        <DataTable
        className="table"
        columns={columns}
        data={records}
        fixedHeader
        psgination
        ></DataTable>
    </div>
    <div className="title">Based on your watchlist</div>
    <div className="container">
    <div className="search"><input type="text" onChange={handleFilter}/> </div>
        <DataTable
        className="table"
        columns={columns}
        data={data}
        fixedHeader
        psgination
        ></DataTable>
    </div>
    </div>
  );
};

export default Table;
