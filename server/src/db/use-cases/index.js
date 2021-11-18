export const addOneItem = async (Model, obj) => {
  const response = await Model.create(obj);
  return response;
};

export const deleteOneItemById = async (Model, _id) => {
  const deleted = await Model.deleteOne({ _id });
  return deleted;
};

export const getLits = async (Model) => {
  const list = await Model.find({}).sort({ _id: -1 });
  return list;
};

export const getOneItemById = async (Model, _id) => {
  const library = await Model.findById(_id);
  return library;
};

export const updateOneItem = async (Model, obj) => {
  const { _id } = obj;
  // not sure if having _id in obj dont cause problems
  const dummyObj = { ...obj };
  delete dummyObj._id;
  const updated = await Model.updateOne({ _id }, obj);
  return updated;
};

export const validateObj = async (Model, obj) => {
  const model = new Model(obj);
  const validation = await model.validate();
  return validation;
};
