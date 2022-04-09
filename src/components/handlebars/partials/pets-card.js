// Primary dependencies
import React from "react";
import Handlebars from 'handlebars';

// Set up the Pet Card template
const template = Handlebars.registerPartial(
    'pets-card',
    `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">petname</h5>
            <h6 class="card-subtitle mb-2 text-muted">pettype</h6>
            <p class="card-text">aboutpet</p>
        </div>
        <button class="btn btn-lg btn-success" type="button" data-toggle="modal" data-target="#exampleModal" onclick="myFunction()">New job</button>
    </div>`
);

// Export the Pet Cards using the template
export const Petscard = () => {
    return (
        <div
            dangerouslySetInnerHTML={{__html: template}}
        />
    )
}