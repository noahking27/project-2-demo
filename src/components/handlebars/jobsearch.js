import React from 'react';
import Handlebars from 'handlebars';
const template = Handlebars.compile(`
    {{> nav-block}}
    <div class="row justify-content-center mt-5">
        <div class="col-12 col-md-10 col-lg-8 mt-5">
            <form class="card card-sm">
                <div class="card-body row no-gutters align-items-center">
                    <div class="col-auto">
                        <i class="fas fa-search h4 text-body"></i>
                    </div>
                    {{!-- <div class="col">
                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Enter a zip code to find jobs in your area">
                    </div> --}}
                    <div class="col-auto">
                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
            <div class="mt-5">
                {{> jobs-card jobs}}
            </div>
        </div>
    </div>
`);
export const Jobsearch = () => {
    const navBlock = Handlebars.registerPartial(
        'nav-block',
            `<div class="dropdown">
                <button class="btn success dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button">Job Search</button>
                    <button class="dropdown-item" type="button">Dashboard</button>
                </div>
            </div>
            
            `
    );
    const jobsCard = Handlebars.registerPartial(
        'jobs-card',
            `<div class="card mb-2">
                <div class="card-body">
                    <h4 class="card-title">Owner Name</h5>
                    <h5 class="card-subtitle mb-2 text-muted">Visit: Walk</h6>
                    <h5 class="card-text">Pay: $35</h5>
                    <h6 class="card-text text-muted">Time: 4/6/2022 at 3:00pm</h6>
                    <h6 class="card-text text-muted">Location: 1234 Big Dog Ct, Raleigh, NC, 27103</h6>
                </div>
            </div>`
    );
  
    return (
        <div
        dangerouslySetInnerHTML={{__html: template(navBlock, jobsCard)}}
      />
    );
};