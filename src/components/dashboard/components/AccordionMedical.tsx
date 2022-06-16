import React from "react";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import TableContainer from "@material-ui/core/TableContainer";
import { Box, Button, Grid, Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const ExpandableRowTableMedical = (props: any) => {
  const columns = [
    {
      name: "Code"
    },
    {
      name: "Service"
    },
  ];
  const data = [
    ["C2292", "Covid-19 Antigenic Test", "Lazio"],
    ["C2301", "Covid-19 Antibody Test", "Lomvardia"],
    ["C1212", "Covid-19 Molecular Test", "Lazio"],
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    height: '100%'
  }));

  function createData(code: String, test: String, city: String) {
    return { code, test, city };
  }

  const rows = [
    createData("C2292", "Covid-19 Antigenic Test", "Lazio"),
    createData("C2301", "Covid-19 Antibody Test", "Lomvardia"),
    createData("C1212", "Covid-19 Molecular Test", "Lazio"),
  ];

  const options: MUIDataTableOptions = {
    filter: true,
    onFilterChange: (changedColumn: any, filterList: any) => {
      console.log(changedColumn, filterList);
    },
    selectableRows: "none",
    filterType: "dropdown",
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData: any, rowMeta: any) => {
      console.log(rowData, rowMeta);
      return (
        <React.Fragment>
          <tr>
            <td colSpan={6}>
              <TableContainer >
                <Grid item xs={12}>
                    <div className="description-medical">
                    <p>The polymerase chain reaction (PCR) test for COVID-19 is a molecular test that analyzes your upper respiratory specimen, looking for genetic ...</p>
                    {rows.map((row) => (
                        <> 
                            <p key={uuidv4()}>{row.code} - {row.city} - {row.test}</p>
                            <Paper variant="outlined" elevation={3}  />
                        </>
                    ))}
                    <Box mt={2} >
                        <Link to={'/medical-info/1'}>
                            <Button variant="outlined" sx={{mt: '2'}}>More Info</Button>
                        </Link>
                    </Box>
                    </div>
                </Grid>
              </TableContainer>
            </td>
          </tr>
        </React.Fragment>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
      title={"Medical Services"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default ExpandableRowTableMedical;
