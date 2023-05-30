import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import HistoryIcon from "@mui/icons-material/History";

function Dashboard() {
  return (
    <div>
      <h1> Welcome to Dashboard</h1>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AccessTimeIcon />}
          >
            Clock In
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FingerprintIcon />}
          >
            Add Fingerprint
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HistoryIcon />}
          >
            View History
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
