import React from 'react';
import {createRoot} from 'react-dom/client';
import {Theme} from "@radix-ui/themes";
import {Provider} from "react-redux";
import store from '../services/upload_store';
import {UploadPage} from "../components/UploadPage";


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Theme>
                <UploadPage />
            </Theme>
        </Provider>
    </React.StrictMode>
);