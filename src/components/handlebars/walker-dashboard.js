import React from 'react';
import Handlebars from 'handlebars';
const template = Handlebars.compile(`
{{> nav-block}}

<div class="dashboard-container">
    <h1 id="your-dashboard" class="text-center">Walker Dashboard</h1>
    <div id="jobs-container" class="d-flex flex-column mx-auto" style="width: 92%;">
        <div class="tabbable">
            <ul class="nav nav-tabs">
                <li class="active nav-item">
                    <a href="#tab1" data-toggle="tab">Current posts</a>
                </li>
                <li class="nav-item">
                    <a href="#tab2" data-toggle="tab">Past posts</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                    <p>List of current posts</p>
                    {{> jobs-card jobs}}
                </div>
                <div class="tab-pane" id="tab2">
                    <p>List of past jobs</p>
                    {{> jobs-card walkerJobsCompleted }}
                </div>
            </div>
        </div>  
    </div>     
</div>

<script src="/javascript/walker-dashboard.js"></script>
`);
export const WalkerDash = () => {
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