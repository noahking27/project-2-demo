import React from 'react';
import Handlebars from 'handlebars';
const template = Handlebars.compile(`
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form action="">
            <div class="form-outline">
                <input type="text" id="price" class="form-control" placeholder="price"/>
                <label class="form-label" for="price"></label>

                <input type="text" id="time" class="form-control" placeholder="time"/>
                <label class="form-label" for="time"></label>
                <input type="text" id="location" class="form-control" placeholder="Enter your address"/>
                <label class="form-label" for="location"></label>

                <select class="form-select form-control" aria-label="Default select example">
                <option selected>Walk</option>
                <option value="1">Check-in</option>
                </select>
                
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>
`);
export const WalkerDash = () => {

    return (
        <div
        dangerouslySetInnerHTML={{__html: template}}
      />
    );
};