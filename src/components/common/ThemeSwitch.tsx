import React, { useState } from 'react';
import BxIconx from '@/components/common/BxIcon';
import { foreach } from '@/script/object/Iterator';

const ThemeSwitch: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    },
    initTheme = () => {
        const docHTML = document.querySelector("html"),
        whiteElements = document.querySelectorAll(".bg-black, .bg-white"),
        ligthElements = document.querySelectorAll(".bg-light,.bg-dark");
        if (docHTML)
            docHTML.setAttribute('data-bs-theme',!isDarkMode?'light':'dark');
        foreach<HTMLElement>(whiteElements, whiteElement => {
            whiteElement.classList.remove(!isDarkMode?"bg-black":"bg-white");
            whiteElement.classList.add(!isDarkMode?"bg-white":"bg-black");
        });
        foreach<HTMLElement>(ligthElements, lightElement => {
            lightElement.classList.remove(!isDarkMode?"bg-dark":"bg-light");
            lightElement.classList.add(!isDarkMode?"bg-light":"bg-dark");
        });
    };
    initTheme();
    return (
        <div className="col-auto cursor-pointer" onClick={toggleTheme}>
            <label className="form-check-label">
            <BxIconx name={isDarkMode ? 'toggle-right' : 'toggle-left'} size='md' solid={false}/>
            </label>
            <label className="form-check-label">
            <BxIconx name={isDarkMode ? 'moon' : 'sun'} size='md'/>
            </label>
        </div>
    );
};

export default ThemeSwitch;