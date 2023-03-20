import users from "../Models/userSchema.js";

export const createStudent = async (req, res) => {
  const data = new users({
    Name: req.body.Name,
    Course: req.body.Course,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Fees: req.body.Fees,
  });
  try {
    const create = await data.save();
    res.json(create);
  } catch (error) {
    res.json(error.message);
  }
};

export const getStudent = async (req, res) => {
  try {
    const get = await users.find();
    res.json(get);
  } catch (error) {
    res.json(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const update = await users.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          Name: req.body.Name,
          Course: req.body.Course,
          Email: req.body.Email,
          Phone: req.body.Phone,
          Fees: req.body.Fees,
        },
      },
      { new: true }
    );
    res.json(update);
  } catch (error) {
    res.json(error);
  }
};

export const deleteStudent = async (req, res) => {
  await users.findByIdAndDelete(req.params.id);
  res.json("user successfully deleted");
};
