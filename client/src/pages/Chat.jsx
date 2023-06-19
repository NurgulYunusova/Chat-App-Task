import { Container, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Chat = () => {
  const [message, setMessage] = useState("");

  const { name } = useContext(AuthContext);

  const sendMessage = (event) => {
    event.preventDefault();

    if (name && message) {
      setMessage("");
    } else {
      alert("If you want to send message, please login or register");
      setMessage("");
    }
  };

  return (
    <Container maxWidth="lg">
      <h1>Chat</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "20px" }}>Message</div>
            <div>
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <button onClick={sendMessage}>Send Message</button>
          </div>
          <Grid item xs={12}>
            <hr />
          </Grid>
          <Grid item xs={4}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {[1, 2, 3].map((value) => (
                <ListItem key={value} disableGutters>
                  <ListItemText primary={`Line item ${value}`} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ border: "1px solid silver" }}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[1, 2, 3].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                }
              >
                <span
                  className="bg-online"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                ></span>
                <ListItemText primary={`Line item ${value}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
