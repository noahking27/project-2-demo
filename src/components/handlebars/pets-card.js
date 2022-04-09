// import React from 'react';
import Handlebars from 'handlebars';
export const Petscard = () => {
   var source = document.getElementById("entry-template");
   var template = Handlebars.compile(`
   <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">petname</h5>
            <h6 class="card-subtitle mb-2 text-muted">pettype</h6>
            <p class="card-text">aboutpet</p>
        </div>
        <button class="btn btn-lg btn-success" type="button" data-toggle="modal" data-target="#exampleModal">New job</button>
    </div>
    `);
    source.innerHTML = template({ petsCard: "GC" }); // Not sure what is supposed to go into body

    return (
        template
    //     <div
    //     dangerouslySetInnerHTML={{__html: data}}
    //   />
    );
};