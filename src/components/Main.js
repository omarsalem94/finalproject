import React from "react";

const Main = () => {


  return (
    <main>
      <section>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>You can choose a table indoor to enjoy the decoration, warmth of our restaurant and the live cooking shows with our chefs.
          Our try the outdoor lounge, surrounded by beautiful scenery and colorful gardens.</p>
        <img src='' alt='' />
      </section>
      <section>
        <h2>Book a table</h2>
        <form>
          <label>Pick a time</label>
          <input type="text" />
          <label>Preference</label>
          <input type="text" />
          <label>Select a date</label>
          <input type="text" />
          <label>How many adults</label>
          <input type="text" />
          <label>How many children</label>
          <input type="text" />
          <label>Any special occasion?</label>
          <input type="text" />
          <label>Select a table</label>
          <input type="text" />
          <h3>Enter your personal information</h3>
          <label>Email</label>
          <input type="text" />
          <label>First name</label>
          <input type="text" />
          <label>Last name</label>
          <input type="text" />
          <label>Phone number</label>
          <input type="text" />
          <p>Send me a reminder</p>
          <button type='submit'>Confirm your Booking</button>
        </form>
      </section>
    </main>
  );
}

export default Main;