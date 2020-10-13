import React from "react";
import "./review.css";

const Review = () => (
  <>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-block">
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Left 1</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-block">
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Left 2</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-block">
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Right 1</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-block">
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Right 1</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Review;
