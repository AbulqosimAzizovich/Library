import Logo from "../../assets/images/png/Logo.png";
import Search from "../../assets/images/png/search.png";
import Bell from "../../assets/images/png/bell.png";
import User from "../../assets/images/png/user-image.png";
import Button from "@mui/material/Button";
import Card from "./../../components/UI/Card/Card";
import "./style.scss";

const index = () => {
  return (
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

            <Button className="add__btn">
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
  );
};

export default index;
