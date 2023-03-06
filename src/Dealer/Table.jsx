// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

const createData = (email, branch, name, status) => {
  return { email, branch, name, status };
};

const rows = [
  createData("example@gmail.com", "branchname", "examplename", "active"),
  createData("example@gmail.com", "branchname", "examplename", "active"),
  createData("example@gmail.com", "branchname", "examplename", "active"),
  createData("example@gmail.com", "branchname", "examplename", "active"),
  createData("example@gmail.com", "branchname", "examplename", "active"),
];

const DealerTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dealer Email</TableCell>
            <TableCell align="right">Dealer Branch</TableCell>
            <TableCell align="right">Dealer Name</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.email}
              sx={{
                "&:last-of-type td, &:last-of-type th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.branch}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DealerTable;
