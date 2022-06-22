import React, { useEffect, useState } from "react";
import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from "mui-datatables";
import TableContainer from "@material-ui/core/TableContainer";
import { Button, Grid, Paper, styled, TextareaAutosize } from "@mui/material";
import { Link } from "react-router-dom";
import TransitionsModal from './Modal';

interface IPatinets {
    load: boolean;
    header: string;
    patients: object[];
}

interface ITable {
    date_birth: string;
    age: string;
    nationality: string;
    residence: string;
    active_booking: string;
    creation_date: string;
    payment_status: string;
    log: string;
}

const AccordionPatients = (props: IPatinets) => {
  const {header} = props;
  const {patients} = props;
  const {load} = props;
  const [data, setData] = useState<(object | string[] | number[])[]>([]);
  const [expandData, setExpandData] = useState<(ITable)[]>([]);
  const [columns, setColumns] = useState<(MUIDataTableColumnDef)[]>([
      {
        name: "ID"
      },
      {
        name: "Full Name"
      },
      {
        name: "Fiscal code"
      },
      {
        name: "Email"
      },
      {
        name: "Phone"
      }
  ]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    height: '100%'
  }));

  function createData(
    date_birth: string,
    age: string,
    nationality: string,
    residence: string,
    active_booking: string,
    creation_date: string,
    payment_status: string,
    log: string
  ) {
    return { 
        date_birth,
        age,
        nationality,
        residence,
        active_booking,
        creation_date,
        payment_status,
        log
     };
  }


  useEffect(() => {
      patients.map((value: any) => {
        const {header} = value;
          setData(prevState => [
            ...prevState,
            Object.values(header)
          ]);
      })
  }, [load])
  useEffect(() => {
      patients.map((value: any) => {
        const { 
            date_birth,
            age,
            nationality,
            residence,
            active_booking,
            creation_date,
            payment_status,
            log,
        } = value;
        setExpandData(prevState => [
            ...prevState,
            createData(
                date_birth,
                age,
                nationality,
                residence,
                active_booking,
                creation_date,
                payment_status,
                log
            )
        ])
    })
  }, [load])

  const options: MUIDataTableOptions = {
    filter: true,
    onFilterChange: (changedColumn: any, filterList: any) => {
    },
    selectableRows: "none",
    filterType: "dropdown",
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData: any, rowMeta: any) => {
      const {
        date_birth,
        age,
        nationality,
        residence,
        active_booking,
        creation_date,
        payment_status,
        log
    } = expandData[rowMeta.dataIndex];
      return (
        <React.Fragment>
          <tr>
            <td colSpan={6}>
              <TableContainer >
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={12} sm={4} md={2}>
                        <Item>
                            <div className="container-info">
                                <h3>Date of birth</h3>
                                <p>{date_birth}</p>
                            </div>
                            <div className="container-info">
                                <h3>Residence</h3>
                                <p>{residence}</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Item>
                            <div className="container-info">
                                <h3>Nationality</h3>
                                <p>{nationality}</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Item>
                            <div className="container-info">
                                <h3>Creation date</h3>
                                <p>{creation_date}</p>
                            </div>
                            <div className="container-info">
                                <h3>Payment status</h3>
                                <p>{payment_status}</p>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Item>
                            <div className="container-info">
                                <h3>Active booking</h3>
                                <div className="container-actions">
                                <Link to={'/booking-info/1'}>
                                  <Button variant="outlined" color="secondary" >
                                      More Info
                                  </Button>
                                </Link>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Item>
                        <div className="container-info">
                                <h3>Actions</h3>
                                <div className="container-actions">
                                <Link to={'/patients-info/1'}>
                                  <Button variant="outlined" color="secondary" >
                                      More Info
                                  </Button>
                                </Link>
                                <TransitionsModal/>
                                <Button variant="outlined" color="error">
                                    Refund
                                </Button>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Item>
                            <div className="container-info">
                                <h3>Log</h3>
                                <div className="container-log">
                                <TextareaAutosize
                                    maxRows={4}
                                    aria-label="maximum height"
                                    placeholder="Maximum 4 rows"
                                    defaultValue={log}
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
  };

  return (
    <>
    {load == false?    <MUIDataTable
      title={header}
      data={data}
      columns={columns}
      options={options}
      />: <></> 

    }
      
    </>
  );
};

export default AccordionPatients;
