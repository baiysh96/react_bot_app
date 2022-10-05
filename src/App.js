import React, {useEffect} from 'react';
import './App.css'
import Header from "./components/Header/Header";
const App  = () => {

    const {onToggleButton, tg} = useTelegram();
    useEffect(() => {
        tg.ready();
    },[])

    return (
        <div>
            <Header />
        </div>
    );
};

export default App;