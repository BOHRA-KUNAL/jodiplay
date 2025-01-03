import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { getSetData } from "@/utils";
import { setHeaderTitle } from "@/redux/slice";
import { useDispatch } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HistoryIcon from "@mui/icons-material/History";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LockIcon from "@mui/icons-material/Lock";
import BarChartIcon from "@mui/icons-material/BarChart";
import HelpIcon from "@mui/icons-material/Help";
import SupportIcon from "@mui/icons-material/Support";
import ShareIcon from "@mui/icons-material/Share";
import GetAppIcon from "@mui/icons-material/GetApp";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Facebook, Instagram } from "@mui/icons-material";
import YouTube from "@mui/icons-material/YouTube";
import GestureIcon from '@mui/icons-material/Gesture';

function getRandomLightColor() {
  const colors = [
    "#8B0000", // Dark Red
    "#A52A2A", // Brown
    "#B22222", // Firebrick
    "#FF8C00", // Dark Orange
    "#FFD700", // Gold
    "#DAA520", // Goldenrod
    "#6A5ACD", // Slate Blue
    "#4B0082", // Indigo
    "#483D8B", // Dark Slate Blue
    "#2F4F4F", // Dark Slate Gray
    "#696969", // Dim Gray
    "#808080", // Gray
    "#800080", // Purple
    "#228B22", // Forest Green
    "#5F9A9A", // Cadet Blue
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];
  return color;
}

export const SideBar = ({ setActive }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  let isLoggedIn = !!getSetData("token");

  const handleLogout = () => {
    localStorage?.clear();
    router.push("/signup");
    router.reload();
    toast.success("Logout...");
  };

  let url = "";

  if (process.browser) {
    url = window.location.href;
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url).then(
      () => {
        alert("url copied to clipboard");
      },
      (err) => {
        alert("Failed to copy!");
        console.error("Copy failed", err);
      }
    );
  };

  let { user_name: name, mobile: phone } = getSetData("userData", undefined, true);

  let sidebarJson = [
    { link: "/", title: "Home", without_login: true, Icon: HomeIcon, color: getRandomLightColor() },
    { link: "/my-profile", title: "My Profile", checkLogin: true, Icon: PersonIcon, color: getRandomLightColor() },
    { hr: true },
    { link: "/wallet", title: "Wallet", Icon: AccountBalanceWalletIcon, color: getRandomLightColor() },
    { link: "/add-fund", title: "Add Point", Icon: AddCircleIcon, color: getRandomLightColor() },
    { link: "/payment-methods", title: "Add Bank Details", Icon: CreditCardIcon, color: getRandomLightColor() },
    { link: "/withdraw", title: "Withdraw", Icon: AccountBalanceWalletIcon, color: getRandomLightColor() },
    { hr: true },
    { link: "/bidding-history", title: "Bid History", Icon: HistoryIcon, color: getRandomLightColor() },
    { link: "/win-history", title: "Win History", Icon: EmojiEventsIcon, color: getRandomLightColor() },
    { hr: true, without_login: true },
    { link: "/notifications", title: "Notifications", Icon: NotificationsIcon, color: getRandomLightColor() },
    { hr: true },
    { link: "/change-password", title: "Change Password", Icon: LockIcon, color: getRandomLightColor() },
    { link: "/game-rates", title: "Game Rates", Icon: BarChartIcon, color: getRandomLightColor() },
    { link: "/howtoplay", title: "How To Play", Icon: HelpIcon, color: getRandomLightColor() },
    { link: "/support", title: "Help & Support", Icon: SupportIcon, color: getRandomLightColor() },
    {
      type: "buttonnormal",
      title: "Refer With Friends",
      onClick: handleCopyClick,
      Icon: ShareIcon,
      color: getRandomLightColor(),
    },
    { hr: true },
    { link: "https://www.facebook.com/profile.php?id=61564633610663&mibextid=ZbWKwL", title: "Facebook", Icon: Facebook, color: '#1877F2' },
    { link: "https://www.instagram.com/jodi.play?igsh=YXNwMzFqcXJyOWNs", title: "Instagram", Icon: Instagram, color: '#EE2A7B' },
    { link: "https://www.youtube.com/@JodiPlay-u5b", title: "Youtube", Icon: YouTube, color: '#FF0000' },
    { hr: true },
    { hr: true },
    { link: "https://www.threads.net/@jodi.play", title: "Threads", Icon: GestureIcon, color: '#1877F2' },
    { link: "https://sharechat.com/profile/jodiplay?d=n", title: "ShareChat", Icon: ShareIcon, color: '#EE2A7B' },
    { hr: true },
    { type: "button", title: "Logout", onClick: handleLogout, Icon: ExitToAppIcon, color: getRandomLightColor() },
  ];

  const renderLinks = () => {
    return (
      <ul className="list-unstyled">
        {sidebarJson.map((item, index) => {
          const { Icon } = item;
          if (!item.without_login && !isLoggedIn) {
            return <span key={index} />;
          }
          let style = {};
          if (item.size) {
            style = { fontSize: item.size };
          }

          if (item.hr) {
            return <hr key={index} />;
          }

          if (item.type == "button") {
            return (
              <li key={index}>
                <div onClick={item.onClick} className="d-flex">
                  <div className="btn btn-danger mx-auto w-75 text-center">
                    <div className="d-flex gap-3 w-100 mx-auto text-center">
                      <Icon style={{ color: item.color }} />
                      <span> {item.title} </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          } else if (item.type == "buttonnormal") {
            return (
              <li key={index}>
                <Link
                  href={"#"}
                  key={index}
                  onClick={() => {
                    setActive(false);
                    item.onClick();
                  }}
                  className="d-flex align-items-center nowrap"
                >
                  <Icon style={{ color: item.color }} />
                  <span className="bold ps-2" style={{ ...style }}>
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          }
          return (
            <li key={index}>
              <Link
                href={item.link}
                key={index}
                className="d-flex align-items-center nowrap"
                onClick={() => {
                  setActive(false);
                  dispatch(setHeaderTitle("JODI PLAY"));
                }}
              >
                <Icon style={{ color: item.color }} />
                <span className="bold ps-2" style={{ ...style }}>
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <nav id="sidebar" className="active">
        <div id="dismiss" onClick={() => setActive(false)}>
          <ArrowBackIcon className="text-white" />
        </div>
        <div className="sidebar-header">
          <span className="Uname">{name || ""}</span>
          <span className="Umobile">{phone || ""}</span>
        </div>
        {renderLinks()}
      </nav>
      <div className="overlay active" onClick={() => setActive(false)}></div>
    </>
  );
};
