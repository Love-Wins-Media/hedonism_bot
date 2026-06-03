import React from 'react';
import { createRoot } from 'react-dom/client';
import { MultiUploader } from '../components/MultiUploader';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <MultiUploader />
    </React.StrictMode>
);