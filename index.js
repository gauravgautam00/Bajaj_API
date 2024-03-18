const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.post("/bfhl", async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res
        .status(400)
        .json({ is_success: false, message: "No data provided" });
    }

    const user_id = "gaurav_gautam_11052004";

    const email = "gaurav2300.be21@chitkara.edu.in";
    const roll_number = "2110992300";

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];

    for (var i = 0; i < data.length; i++) {
      const cur = data[i];

      if (cur[0] >= "1" && cur[0] <= "9") {
        if ((cur[cur.length - 1] - "a") % 2 == 0) {
          even_numbers.push(cur);
        } else {
          odd_numbers.push(cur);
        }
      } else {
        alphabets.push(cur);
      }
    }

    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      even_numbers,
      odd_numbers,
      alphabets,
    };

    return res.json(response);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ is_success: false, message: "An error occurred" });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
