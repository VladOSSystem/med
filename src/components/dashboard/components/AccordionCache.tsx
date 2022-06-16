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
  const [dataTest, setDataTest]: any = useState([])
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

//   const data = [
//     ["Synlab, Via test 2, Milan", "PCR", "14/04/2022", "14/04/2022 14:31", 
//         <div className="chache-detail-btn">
//             <Link to={'/cache-info/1'}>
//                 <Button variant="outlined" color="secondary" >
//                     More Info
//                 </Button>
//             </Link>
//             <Button variant="outlined" color="success">
//                 Download
//             </Button>
//             <Button variant="outlined" color="error">
//                 Delete
//             </Button>
//         </div>],
//     ["Synlab, Via test 2, Milan", "PCR", "14/04/2022", "14/04/2022 14:31", 
//     <div className="chache-detail-btn">
//         <Link to={'/cache-info/1'}>
//             <Button variant="outlined" color="secondary" >
//                 More Info
//             </Button>
//         </Link>
//         <Button variant="outlined" color="success">
//             Download
//         </Button>
//         <Button variant="outlined" color="error">
//             Delete
//         </Button>
//     </div>],
//     ["Synlab, Via test 2, Milan", "PCR", "14/04/2022", "14/04/2022 14:31", 
//     <div className="chache-detail-btn">
//         <Link to={'/cache-info/1'}>
//             <Button variant="outlined" color="secondary" >
//                 More Info
//             </Button>
//         </Link>
//         <Button variant="outlined" color="success">
//             Download
//         </Button>
//         <Button variant="outlined" color="error">
//             Delete
//         </Button>
//     </div>],
//     ["Synlab, Via test 2, Milan", "PCR", "14/04/2022", "14/04/2022 14:31", 
//     <div className="chache-detail-btn">
//         <Link to={'/cache-info/1'}>
//             <Button variant="outlined" color="secondary" >
//                 More Info
//             </Button>
//         </Link>
//         <Button variant="outlined" color="success">
//             Download
//         </Button>
//         <Button variant="outlined" color="error">
//             Delete
//         </Button>
//     </div>],
//   ];
  useEffect(() => {
    cache.map((v: any) => { 
        setDataTest((currentArray: any) => [...currentArray, [v.center, v.testType, v.date, v.expiry, 
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
      console.log(changedColumn, filterList);
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
    page: 1
  };

  return (
        <MUIDataTable
        title={"Cache Services"}
        data={dataTest}
        columns={columns}
        options={options}
        />
  );
};

export default RowTableCache;
