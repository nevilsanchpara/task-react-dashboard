import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@emotion/styled";
import {CiExport} from "react-icons/Ci";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";
import {Bar, Line} from "react-chartjs-2";
import "../App.css";
import ProgressBar from "./../../components/ProgressBar";
import LineChart from "../../components/charts/LineChart";
import BarChart from "./../../components/charts/BarChart";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const data = [
  {
    id: "MO63",
    date: "09.04.21",
    description: "Code a",
    staus: "Completed",
    descriptions: "$250000",
  },
  {
    id: "MO63",
    date: "09.04.21",
    description: "Code a",
    staus: "Completed",
    descriptions: "$250000",
  },
  {
    id: "MO63",
    date: "09.04.21",
    description: "Code a",
    staus: "Completed",
    descriptions: "$250000",
  },
  {
    id: "MO63",
    date: "09.04.21",
    description: "Code a",
    staus: "Completed",
    descriptions: "$250000",
  },
  {
    id: "MO63",
    date: "09.04.21",
    description: "Code a",
    staus: "Completed",
    descriptions: "$250000",
  },
];

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Filler,
    Title,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
  );

  const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: #f1f4f9;
    }
    &:nth-of-type(even) {
      background-color: #ffffff;
    }
    & > td {
      color: white;
    }
  `;

  return (
    <>
      <div className='bg-[#F1F4F9] w-fit pt-11'>
        <div className='custom-container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
              <div>
                <div className='bg-white px-3 py-3 shadow-sm'>
                  <p className='text-[rgb(164,175,188)]'>Total Income</p>
                  <div className='flex mb-2'>
                    <p className='text-4xl font-bold'>$124,563.00</p>
                    <p className='text-white rounded-2xl mx-2 mt-[12px]'>
                      <span className='bg-[#18BB84] rounded-2xl px-2 py-1 text-sm'>
                        +6.9%
                      </span>
                    </p>
                  </div>
                  <ProgressBar />
                  <p className='text-[#A4AFBC] text-xs mt-2'>Yearly goal</p>
                </div>
              </div>
              <div className='mt-5 shadow-sm'>
                <div className='bg-white px-3 py-3'>
                  <p className='text-[#A4AFBC]'>New users</p>
                  <div className='flex'>
                    <p className='text-4xl font-semibold mb-2'>94.2%</p>
                    <p className='text-white rounded-2xl mx-2 mt-[12px]'>
                      <span className='bg-[#18BB84] rounded-2xl px-2 py-1 text-sm'>
                        +6.9%
                      </span>
                    </p>
                  </div>
                  <BarChart />
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6 col-xl-6 bg-white shadow-sm'>
              <div className='bg-white px-3 py-3 '>
                <div className='flex justify-between'>
                  <p className='text-[#070707] text-xl font-bold'>Balance</p>
                  <FormControl className='w-28'>
                    <InputLabel id='demo-simple-select-label'>
                      Monthly
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      label='Monthly'>
                      <MenuItem value='monthly'>Monthly</MenuItem>
                      <MenuItem value='yeally'>Yearly</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <hr className='w-full mb-4 text-gray-600' />
              <div className='row'>
                <div className='col-12 col-md-12 col-lg-6 col-xl-6'>
                  <div className='border rounded-sm py-2 px-3'>
                    <p className='text-gray-600'>Earnings</p>
                    <div className='flex'>
                      <p className='text-4xl  font-semibold'>43.41%</p>
                      <p className='text-white rounded-2xl mx-2 mt-[8px]'>
                        <span className='bg-[#18BB84] rounded-2xl px-2 py-1 text-sm'>
                          +2.5%
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-12 col-lg-6 col-xl-6'>
                  <div className='border rounded-sm py-2 px-3'>
                    <p className='text-gray-600'>Earnings</p>
                    <div className='flex'>
                      <p className='text-4xl font-semibold'>43.41%</p>
                      <p className='text-white rounded-2xl mx-2 mt-[8px]'>
                        <span className='bg-[#18BB84] rounded-2xl px-2 py-1 text-sm'>
                          +2.5%
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <LineChart />
            </div>
          </div>
          <div className='bg-white mt-5'>
            <div className='flex justify-between p-3'>
              <h1 className='font-bold text-lg'>Recent Transaction</h1>
              <div className='bg-[#382BDB] text-white rounded-md p-2 flex gap-1'>
                <span className='m-[3px]'>
                  <CiExport />
                </span>
                <p className='text-sm'>Export</p>
              </div>
            </div>
            <Box sx={{width: "100%"}}>
              <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label='Incoming' {...a11yProps(0)} />
                  <Tab label='Invoices' {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TableContainer component={Paper} className='mt-2'>
                  <Table sx={{minWidth: 650}} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Invoice id</TableCell>
                        <TableCell align='right'>Date</TableCell>
                        <TableCell align='right'>Description</TableCell>
                        <TableCell align='right'>Status</TableCell>
                        <TableCell align='right'>Descriptions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row) => (
                        <TableRowStyled>
                          <TableCell
                            component='th'
                            scope='row'
                            className='text-black'>
                            {row.id}
                          </TableCell>
                          <TableCell align='right' className='text-black'>
                            {row.date}
                          </TableCell>
                          <TableCell align='right' className='text-black'>
                            {row.description}
                          </TableCell>
                          <TableCell align='right' className='text-black'>
                            <span className='bg-[#18BB84] rounded-xl text-white p-1.5 text-[12px]'>
                              {row.staus}
                            </span>
                          </TableCell>
                          <TableCell align='right' className='text-black'>
                            {row.descriptions}
                          </TableCell>
                        </TableRowStyled>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Invoices
              </TabPanel>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
