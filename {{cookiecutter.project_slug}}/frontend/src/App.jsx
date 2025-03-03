import { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import "./App.css";
import { Dehaze as DehazeIcon } from "@mui/icons-material";
import { LoginModal } from "./LoginSignup/LoginModal";
import { SideMenu } from "./Menus/SideMenu";
import { Footer } from "./Menus/Footer";


function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/hello/")
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error(error));
    }, []);

    return <h1>{message}</h1>;
}

export default App;