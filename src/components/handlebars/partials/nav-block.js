import React from "react";
import Handlebars from 'handlebars';
const template = Handlebars.registerPartial(
    'nav-block',
    `<div class="dropdown">
        <button class="btn success dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">Job Search</button>
            <button class="dropdown-item" type="button">Dashboard</button>
        </div>
    </div>`
);
export const Navblock = () => {
    return (
        <div
            dangerouslySetInnerHTML={{__html: template}}
        />
    )
}