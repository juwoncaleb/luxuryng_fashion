import React from "react";

export default function test() {
  return (
    <div>
      <div id="form-wrapper">
        <form action="/p/quote.php" method="GET">
          <h1 id="form-title">Select Debt Amount</h1>
          <div id="debt-amount-slider">
            <input type="radio" name="debt-amount" id="1" value="1" required />
            <label for="1" data-debt-amount="< $10k"></label>
            <input type="radio" name="debt-amount" id="2" value="2" required />
            <label for="2" data-debt-amount="$10k-25k"></label>
            <input type="radio" name="debt-amount" id="3" value="3" required />
            <label for="3" data-debt-amount="$25k-50k"></label>
            <input type="radio" name="debt-amount" id="4" value="4" required />
            <label for="4" data-debt-amount="$50k-100k"></label>
            <input type="radio" name="debt-amount" id="5" value="5" required />
            <label for="5" data-debt-amount="$100k+"></label>
          </div>
        </form>
      </div>
    </div>
  );
}
