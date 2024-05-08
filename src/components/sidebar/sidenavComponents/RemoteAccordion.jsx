import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { VscBook, VscStarEmpty, VscIssues, VscComment } from "react-icons/vsc";

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
  height: "100%",
  display: "flex", // Set display to flex
  flexDirection: "column", // Set flexDirection to column
  border: `1px solid #464646`,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ fontSize: "10px" }}>
            REMOTES (TUNNELS/SSH)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="section-content">
              <p>
                Spin up fully configured dev environments in the cloud that
                start in seconds with up to 60 hours a month free.
              </p>
              <p>
                Sign in to view your codespaces or{" "}
                <a href="#" className="learn-more-link">
                  learn more
                </a>
              </p>
              <button className="inside-section-button">
                Sign in to GitHub
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
          <Typography style={{ fontSize: "10px" }}>
            HELP AND FEEDBACK
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="help-menu">
              <button>
                <span>
                  <VscStarEmpty /> Get Started
                </span>
              </button>
              <button>
                <span>
                  <VscBook /> ReadDocumentation
                </span>
              </button>
              <button>
                <span>
                  <VscIssues /> Review Issues
                </span>
              </button>
              <button>
                <span>
                  <VscComment /> Report Issue
                </span>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
