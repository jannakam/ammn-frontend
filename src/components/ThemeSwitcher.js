'use client';

import React from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import { useTheme } from './ThemeContext';

export default function ThemeSwitcher() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="fixed top-5 left-5 flex align-items-center gap-3 z-20">
            <ToggleButton
                onLabel="Light"
                offLabel="Dark"
                onIcon="pi pi-sun"
                offIcon="pi pi-moon"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="p-button-rounded"
            />
        </div>
    );
}