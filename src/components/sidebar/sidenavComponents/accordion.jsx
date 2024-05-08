import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "300px",
  backgroundColor: "#181818",
  color: "#fff",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  marginLeft: "-15px",

}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.5rem", color: "#fff" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#181818",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#181818",
  display: "flex", 
  flexDirection: "column", 
  border: `1px solid #464646`,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography style={{ fontSize: "10px" }}>NO FOLDER OPENED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="section-content">
              <p>You have not yet opened a folder.</p>
              <button className="inside-section-button">Open Folder</button>
              <p> </p>
              <button className="inside-section-button">Open Recent</button>
              <p>
                To connect to a machine that has Remote Tunnel Access enabled or
                leam about how to do that, click here:
              </p>
              <button className="inside-section-button">
                Connect to Tunnel...
              </button>
              <p>
                You can open a remote repository or pull request without
                cloning.
              </p>
              <button className="inside-section-button">
                Open Remote Repository
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ fontSize: "10px" }}>OUTLINE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="section-content">
              <p style={{ opacity: "0.7" }}>
                The active editor cannot provide outline information
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography style={{ fontSize: "10px" }}>TIMELINE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="section-content">
              <p style={{ opacity: "0.7" }}>
                The active editor cannot provide timeline information.
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
