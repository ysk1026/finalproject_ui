import React from 'react'
import './ReviewUpdate.css'
const ReviewUpdate = () => <>
        <div class="container">
            <div class="row">
                <div class="col-md-6 " id="form_container">
                    <h2>Review</h2> 
                    <p>해당 영화에 대한 리뷰를 작성해주세요</p>
                    <form method="post" id="reused_form">
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <label for="name"> Movie name:</label>
                                <input type="text" class="form-control" id="name" name="name" required/>
                            </div>
                        </div>  
                        <div class="row">
                            <div class="col-sm-12 form-group">
                                {/* <label for="message"> Message:</label> */}
                                <p class="message">Review</p>
                                <textarea class="form-control" type="textarea" id="message" name="message" maxlength="6000" rows="7"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 form-group">
                                <button type="submit" class="btn btn-lg btn-default pull-right" >Send &rarr;</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</>

export default ReviewUpdate