const mongoose = require("mongoose")

const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema(
  {
      name : {
        type : String,
        required : true,
      }
  }, {timestamps : true}
)


// Standard is to pass string as singular and both the variable name is identical to string name
export const Categories = mongoose.model("Categories", categorySchema) // Note mongoos is intelligent and it will identify that name is in plural form hence while storing in database Categories will be saved as categories(only converts to lowercase no extra s added)