import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }} className="schedule" id="schedule">
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className="schedule-tabs"
        >
          <h1 className="schedule-title  orbitron-font-set">Schedule</h1>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="conference schedule tabs"
          >
            <Tab label="CME" />
            <Tab label="Day One" />
            <Tab label="Day Two" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          CME Schedule
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Day One Schedule
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Day Two Schedule
        </CustomTabPanel>
      </Box>
    </>
  );
}
