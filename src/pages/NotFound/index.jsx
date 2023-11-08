import { Button } from "@mui/material";
import NotFoundBg from "../../assets/images/png/404Bg.png";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const index = () => {
  const navigate = useNavigate();
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="container_404">
      <img src={NotFoundBg} alt="404 IMG" />
      <div className="btns">
        <Button onClick={() => navigate(-1)} className="btn_common">
          Go Home Page
        </Button>
        <Button onClick={refreshPage} className="btn_transition">
          Reload Page
        </Button>
      </div>
    </div>
  );
};

export default index;
