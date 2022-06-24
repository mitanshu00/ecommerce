import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ReplayIcon from "@mui/icons-material/Replay";
import { useSelector } from "react-redux";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(8),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  color: theme.palette.common.black,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "black",
    [theme.breakpoints.up("md")]: {
      width: "65ch",
    },
  },
  backgroundColor: "whitesmoke",
}));

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [inFocus, setInFocus] = useState(false);
  const [history, setHistory] = useState([]);

  let categoryList = useSelector((state) => state.category.categories);

  useEffect(() => {
    setHistory(categoryList);
  }, [categoryList]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setInFocus(false);
    if (searchInput.trim().length < 2) return;
    navigate("/search/" + searchInput);
  };

  const handleChange = (e) => {
    let searchValue = e.target.value;

    setSearchInput(searchValue);

    // filter history by search input
    let filteredHistory = categoryList.filter((category) => {
      return (
        category.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        category.about.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setHistory([
      { id: Date.now(), name: `search "${searchValue}"`, about: "" },
      ...filteredHistory,
    ]);
  };

  const formatSuggestion = (suggestion) => {
    if (
      suggestion.toLowerCase().startsWith(searchInput.toLowerCase()) &&
      searchInput.length > 0
    ) {
      return (
        <>
          <span className="light">
            {suggestion.substring(0, searchInput.length)}
          </span>
          <span className="bold">
            {suggestion.substring(searchInput.length)}
          </span>
        </>
      );
    } else {
      return suggestion;
    }
  };

  const onLinkClick = (name) => {
    setInFocus(false);
    setSearchInput("");
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <form onSubmit={handleSearch}>
        <StyledInputBase
          placeholder="Search products, brands and more…"
          inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onChange={(e) => handleChange(e)}
          onFocus={() => setInFocus(true)}
          // onBlur={() => setInFocus(false)}
        />
      </form>

      {inFocus && (
        <ul className="dropdown">
          {history.length > 0 &&
            history.slice(0, 8).map((item) => (
              <li className={"dropdown__item"} key={item.id}>
                <Link
                  className="item-link"
                  onClick={() => onLinkClick(item.name)}
                  to={`/c/${item.name}`}
                >
                  <div className="search-suggestion-icon">
                    {!item.img_url ? (
                      <ReplayIcon />
                    ) : (
                      <Avatar
                        src={item.img_url.replace(
                          "http://localhost:3000/",
                          process.env.REACT_APP_API
                        )}
                        alt="err"
                        size="medium"
                        variant="square"
                      />
                    )}
                  </div>
                  <ListItemText
                    className="search-suggestion-text"
                    primary={formatSuggestion(item.name)}
                    secondary={item.about}
                    sx={{ my: 0 }}
                  />
                </Link>
              </li>
            ))}
        </ul>
      )}
    </Search>
  );
}

export default SearchBar;
