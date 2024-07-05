const Test = require("../models/test.model");

const addition = async (data) => {
    try {
        const test = await Test.create(data);
        return test;
    } catch (error) {
        throw new Error(`Update failed: ${error.message}`);
    }
}

const getTest = async () => {
    try {
        const test = await Test.find({});
        return test;
    } catch (error) {
        throw new Error(`Update failed: ${error.message}`);
    }
}

const updateTest = async (params, data) => {
    try {
        const updatedTest = await Test.findByIdAndUpdate(params.id, data , { new: true });
        return updatedTest;
    } catch (error) {
        throw new Error(`Update failed: ${error.message}`);
    }
}

const deleteTest = async (params) => {
    try {
        const deleteTest = await Test.findByIdAndDelete(params.id);
        return deleteTest;
    } catch (error) {
        throw new Error(`Update failed: ${error.message}`);
    }
}

module.exports = { addition, getTest, updateTest, deleteTest }