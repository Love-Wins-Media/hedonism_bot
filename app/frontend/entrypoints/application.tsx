import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import {Theme} from "@radix-ui/themes";
import {RelayEnvironmentProvider} from "react-relay";
import {relayEnvironment} from '../services/RelayEnvironment';
import App from "../components/App";
import {UploadPage} from "../components/UploadPage";

console.log('Vite ⚡️ Rails')

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Theme accentColor="bronze"
               grayColor="gray"
               panelBackground="solid"
               scaling="100%"
               radius="full">
            <RelayEnvironmentProvider environment={relayEnvironment}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/upload" element={<UploadPage />} />
                    </Routes>
                </BrowserRouter>
            </RelayEnvironmentProvider>
        </Theme>
    </React.StrictMode>
);