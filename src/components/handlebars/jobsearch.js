// Primary dependencies
import React from 'react';
import Handlebars from 'handlebars';

// Import partials
import { Navblock } from './partials/nav-block';
import { Jobscard } from './partials/jobs-card';

// Set up the Job Search Dashboard template
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

// Export the Job Search Dashboard using the template and the partials
export const Jobsearch = () => {
    return (
        <div
        dangerouslySetInnerHTML={{__html: template(Navblock, Jobscard)}}
      />
    );
};