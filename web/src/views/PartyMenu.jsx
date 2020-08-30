import React, { useState, useEffect } from "react";
import api from "../api/party/anonymous-add.js";

const PartyMenu = () => {
    const [party, setParty] = useState('');
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      api
        .add()
        .then((resp) => {
          setParty(resp);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    if (loading) {
        return (
            <div id="party-menu">
                ~~LOADING~~
            </div>
        );
    } else {
        return (
            <div id="party-menu">
                {party}
            </div>
        );
    }
};

export default PartyMenu;