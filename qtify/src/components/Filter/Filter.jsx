import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Filters = ({filters, selectedFilterIndex, setSelectedFilterIndex}) => {

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <div style={{color: 'white'}}>
        <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label="genres tabs"
        textColor = "inherit"
        TabIndicatorProps={
            {
                style: {
                    backgroundColor: "var(--color-primary)",
                }

            }
        }
        >
            {
                filters.map((filter, idx) => {
                    return <Tab label={filter.label} {...a11yProps(idx)} key={idx} />
                })
            }
        </Tabs>
    </div>
  );
}

export default Filters;
