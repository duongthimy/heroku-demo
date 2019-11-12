import React, { useState } from "react";

import Page from "../components/Page";
import { Visualization } from "@gooddata/react-components";
import constants from "../constants";
import { project } from "../project";

const Home = () => {
    const [exportState, setExportState] = useState({ error: null, isLoading: true, data: null });

    const onExportReady = currentGetExportResult => {
        currentGetExportResult({})
            .then(result => {
                setExportState({ error: null, isLoading: false, data: result.uri });
            })
            .catch(error => {
                console.error(error);
                setExportState({ error, isLoading: false, data: null });
            });
    };

    const visUri = `/gdc/md/${constants.projectId}/obj/75548`;

    return (
        <Page>
            <div style={{ height: 400 }}>
                <Visualization projectId="pwlmfx6b8cx0r4u5w4623o2dijug30p6" identifier="aafEOWGSdxwv" />
            </div>
        </Page>
    );
};

export default Home;
