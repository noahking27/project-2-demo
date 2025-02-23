// Primary dependencies
import React from 'react';

export const Homepage = () => {
    const data = `
        <div id="main-container" class="container1">
            <div class="jumbotron text-center header-wrap" align="center">
                <p class="lead">Connect with trusted dog walkers in your neighborhood.</p>
                <hr style="width: 400px;" class="my-4" >
                <p style="font-size: 1.5rem; width: 400px; margin: auto;">Sign up bellow to get started as a pet owner or a walker.</p>
                <section id="section-form" class="vh-100 bg-image">
                    <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div class="container h-100">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-12">
                                    <div class="card" style="border-radius: 15px;">
                                        <div class="card-body p-4">
                                            <form>
                                                <div class="form-outline">
                                                    <input type="text" id="fist-name" class="form-control" placeholder="First Name"/>
                                                    <label class="form-label" for="fist-name"></label>
                                                </div>

                                                <div class="form-outline">
                                                    <input type="text" id="last-name" class="form-control" placeholder="Last Name"/>
                                                    <label class="form-label" for="last-name"></label>
                                                </div>

                                                <div class="form-outline">
                                                    <input type="email" id="email" class="form-control" placeholder="Your Email"/>
                                                    <label class="form-label" for="email"></label>
                                                </div>

                                                <div class="form-outline">
                                                    <input type="password" id="password" class="form-control" placeholder="Password"/>
                                                    <label class="form-label" for="password"></label>
                                                </div>

                                                <div class="form-check form-outline mb-2">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                                    <label class="form-check-label" for="exampleRadios1">I'm a pet owner looking for a walker</label>
                                                </div>
                                                
                                                <div class="form-check form-outline mb-3">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                                    <label class="form-check-label" for="exampleRadios2">I'm a walker looking for jobs</label>
                                                </div>                

                                                <div class="d-flex justify-content-center">
                                                    <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;
    return (
      <div
        dangerouslySetInnerHTML={{__html: data}}
      />
    );
};