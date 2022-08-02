import { Hamburguer, HeaderDesktop, MobileHeader, StyledHeader } from "./style";
import { BaseInput } from "../BaseInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import { useForm } from "react-hook-form";
import Button from "../Button";
import lupaPesquisa from "../../assets/lupaPesquisa.svg";
import logOut from "../../assets/logOut.svg";
import profile from "../../assets/profile.svg";
import { toast } from "react-toastify";

function Header({ isDashboard = false, profileImg = "" }) {
  const [userData, setUserData] = useState([]);
  const [toggleOpen, setToggleOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const data = localStorage.getItem("@DoTattoo:userInfo");
    if (data) {
      setUserData(JSON.parse(localStorage.getItem("@DoTattoo:userInfo")));
    }
    if (isDashboard && !data) {
      navigate("/login");
    }
  }, []);

  const submitSearch = (value) => {
    console.log(value);
  };

  return (
    <StyledHeader
      height={"112px"}
      mobileHeight={"60px"}
      mobileBackground={"#121214"}
    >
      <Logo
        width={"20%"}
        height={"auto"}
        widthD1024={"212px"}
        widthT768={"170px"}
        invert={0}
        onClick={() => {
          navigate("/");
        }}
      />
      {isDashboard ? (
        <div className="headerMain">
          <HeaderDesktop>
            <li
              onClick={() => {
                navigate("/dashstudio");
              }}
            >
              Studio
            </li>
            <li
              onClick={() => {
                navigate("/dashartist");
              }}
            >
              Artist
            </li>
          </HeaderDesktop>
          <form
            className="inputContainer"
            onSubmit={handleSubmit(submitSearch)}
          >
            <BaseInput register={register} name={"input"} />
            <Button width={"45px"} height={"37px"}>
              <img
                src={lupaPesquisa}
                alt="Lupa pesquisa"
                className="magnifier"
              />
            </Button>
          </form>
          <Hamburguer>
            <input
              type="checkbox"
              onChange={(event) => {
                setToggleOpen(event.target.checked);
              }}
            />
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
          <MobileHeader className={toggleOpen ? "open" : ""}>
            <li
              onClick={() => {
                navigate("/dashstudio");
              }}
            >
              Studio
            </li>
            <li
              onClick={() => {
                navigate("/dashartist");
              }}
            >
              Artist
            </li>
            <li
              onClick={() => {
                navigate(`/perfiluser/${userData.id}`);
              }}
            >
              My Profile
            </li>
            <li
              onClick={() => {
                localStorage.clear();
                toast.success('Tudo bem, esperamos você novamente !')
                navigate("/login");
              }}
            >
              Log-out
            </li>
          </MobileHeader>
          <img
            src={profileImg ? profileImg : profile}
            alt="Logotipo do estúdio"
            className="studioLogo"
            onClick={() => {
              navigate(`/perfiluser/${userData.id}`);
            }}
          />
          <img
            src={logOut}
            alt={"Ícone de logout"}
            className={"logOut"}
            onClick={() => {
              localStorage.clear();
              toast.success('Tudo bem, esperamos você novamente !')
              navigate("/login");
            }}
          />
        </div>
      ) : (
        <>
          <HeaderDesktop>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </li>
            <li
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </li>
          </HeaderDesktop>
          <Hamburguer>
            <input
              type="checkbox"
              onChange={(event) => {
                setToggleOpen(event.target.checked);
              }}
            />
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
          <MobileHeader className={toggleOpen ? "open" : ""}>
            <li
              onClick={() => {
                if (userData !== []) {
                  navigate(`/dash${userData.type}`);
                } else {
                  navigate("/login");
                }
              }}
            >
              Login
            </li>
            <li
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </li>
          </MobileHeader>
        </>
      )}
    </StyledHeader>
  );
}

export default Header;
