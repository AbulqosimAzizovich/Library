import { useState } from "react";
import Logo from "../../assets/images/png/Logo.png";
import Search from "../../assets/images/png/search.png";
import Bell from "../../assets/images/png/bell.png";
import User from "../../assets/images/png/user-image.png";
import Button from "@mui/material/Button";
import Card from "./../../components/UI/Card/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./style.scss";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  bgcolor: "#fff",
  borderradius: "12px",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

const index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="home_page">
        <div className="container">
          <nav>
            <div className="logo-search">
              <div className="logo">
                <img src={Logo} alt="Logo" />

                <span>
                  <span>Book </span> List
                </span>
              </div>
              <div className="search">
                <img src={Search} alt="search" for="search" />
                <input
                  type="text"
                  placeholder="Search for any training you want"
                />
              </div>
            </div>
            <div className="avata-bell">
              <button>
                <img src={Bell} alt="Bell" />
              </button>
              <button>
                <img src={User} alt="User" />
              </button>
            </div>
          </nav>
          <div className="content">
            <div className="title">
              <h1>
                You’ve got <span>7 book</span>
              </h1>
              <p>Your task today</p>
            </div>
            <div className="add__book">
              <input
                type="text"
                placeholder="Enter your name"
                className="shadow"
              />

              <Button className="add__btn" onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M8.00001 3.83331V13.1666M3.33334 8.49998H12.6667"
                    stroke="#FEFEFE"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>Create a book</p>
              </Button>
            </div>
          </div>

          <div className="cards">
            {"13211".split("").map(() => {
              return <Card />;
            })}
          </div>
        </div>
      </div>

      <div>
        <Button>Open modal</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} className="rounded-lg">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <p>Create a book</p>
              <button onClick={handleClose} className="p-1 rounded-lg hover:bg-[#00000034]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M15 9.5L9 15.5M9 9.5L15 15.5M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5Z"
                    stroke="#151515"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Typography>

            <form action="" className="modal__form">
              <div>
                <p>Title</p>
                <TextField
                  label="Enter your title"
                  id="filled-size-small"
                  variant="filled"
                />
              </div>

              <div>
                <p>Title</p>
                <TextField
                  label="Enter your title"
                  id="filled-size-small"
                  variant="filled"
                />
              </div>

              <div>
                <p>Title</p>
                <TextField
                  label="Enter your title"
                  id="filled-size-small"
                  variant="filled"
                />
              </div>

              <div>
                <p>Title</p>
                <TextField
                  label="Enter your title"
                  id="filled-size-small"
                  variant="filled"
                />
              </div>

              <div>
                <p>Title</p>
                <TextField
                  label="Enter your title"
                  id="filled-size-small"
                  variant="filled"
                />
              </div>

              <div className="btns">
                <Button className="close">Close</Button>
                <Button className="submit">Submit</Button>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default index;
