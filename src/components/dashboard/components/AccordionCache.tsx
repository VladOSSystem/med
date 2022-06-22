import React, { FC, useEffect, useState } from "react";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface ICache {
    __typename: String;
    center: String;
    date: String;
    expiry: String;
    testType: String;
}

const RowTableCache = (props: {cache: ICache[]}) => {
  const {cache} = props;
  const [data, setData] = useState<(object | string[] | number[])[]>([])
  const columns = [
    {
        name: "Testing center"
    },
    {
        name: "Medical test"
    },
    {
        name: "Date"
    },
    {
        name: "Expiry"
    },
    {
        name: "Actions"
    },
  ];

  useEffect(() => {
    cache.map((value: ICache) => { 
        const {center, testType, date, expiry} = value;
        setData((currentArray) => [...currentArray, [center, testType, date, expiry, 
            <div className="chache-detail-btn">
                <Link to={'/cache-info/1'}>
                    <Button variant="outlined" color="secondary" >
                        More Info
                    </Button>
                </Link>
                <Button variant="outlined" color="success">
                    Download
                </Button>
                <Button variant="outlined" color="error">
                    Delete
                </Button>
            </div>
        ]])
    })
  }, [cache])
  const options: MUIDataTableOptions = {
    filter: true,
    onFilterChange: (changedColumn: any, filterList: any) => {
    },
    selectableRows: "none",
    filterType: "dropdown",
    rowsPerPage: 10,
    expandableRows: false,
    renderExpandableRow: (rowData: any, rowMeta: any) => {
      return (
        <React.Fragment>
         
        </React.Fragment>
      );
    },
  };

  return (
        <MUIDataTable
        title={"Cache Services"}
        data={data}
        columns={columns}
        options={options}
        />
  );
};

export default RowTableCache;
