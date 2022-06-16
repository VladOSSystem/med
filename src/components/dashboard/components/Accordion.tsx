import React from "react";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import TableContainer from "@material-ui/core/TableContainer";
import { Button, Grid, Paper, styled, TextareaAutosize } from "@mui/material";
import { Link } from "react-router-dom";


const ExpandableRowTable = (props: any) => {
  const columns = [
    {
      name: "Full Name"
    },
    {
      name: "Booking Date"
    },
    {
      name: "Testing Center"
    },
    {
      name: "Medical test"
    },
    {
      name: "Status"
    }
  ];
  const data = [
    ["John Dou", "14/04/2022", "Synlab", 'PCR', 'Tested'],
    ["John Dirk", "14/05/2022", "Synlab", 'PCR', 'Tested'],
    ["John Row", "14/06/2022", "Synlab", 'PCR', 'Tested'],
    ["John Crack", "14/05/2022", "Synlab", 'PCR', 'Tested'],
    ["John Pickle", "14/04/2022", "Synlab", 'PCR', 'Tested'],
    ["John Snow", "14/06/2022", "Synlab", 'PCR', 'Tested'],
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

  function createData(name: any, calories: any, fat: any, carbs: any, protein: any) {
    return { name, calories, fat, carbs, protein };
  }

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
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <div className="container-info">
                                <h3>Testing date</h3>
                                <p>18/04/2022</p>
                            </div>
                            <div className="container-info">
                                <h3>Testing date</h3>
                                <p>18/04/2022</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <div className="container-info">
                                <h3>Payment</h3>
                                <div className="container-card">
                                    <h3>80€</h3>
                                    <img src="https://img.icons8.com/ios/50/undefined/visa.png"/>
                                </div>
                                <div className="container-rates">
                                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/undefined/external-like-influencer-marketing-flaticons-lineal-color-flat-icons.png"/>
                                <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/undefined/external-dislike-influencer-marketing-flaticons-lineal-color-flat-icons.png"/>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                        <div className="container-info">
                                <h3>Actions</h3>
                                <div className="container-actions">
                                <Link to={'/booking-info/1'}>
                                  <Button variant="outlined" color="secondary" >
                                      More Info
                                  </Button>
                                </Link>
                                <Button variant="outlined" color="success">
                                    Message
                                </Button>
                                <Button variant="outlined" color="error">
                                    Refund
                                </Button>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Item>
                            <div className="container-info">
                                <h3>Log</h3>
                                <div className="container-log">
                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="Maximum 4 rows"
                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua."
                                    style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                        </Item>
                    </Grid>
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
      title={"Booking"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default ExpandableRowTable;
