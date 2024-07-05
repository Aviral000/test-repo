const { addition, getTest, updateTest, deleteTest } = require("../services/test.service");

const add = async (req, res) => {
    try {
        const test = await addition(req.body);
        res.status(201).json(test);
    } catch (error) {
        res.status(400).json(error);
    }
}

const get = async (req, res) => {
    try {
        const test = await getTest();
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        const test = await updateTest(req.params, req.body);
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleted = async (req, res) => {
    try {
        const test = await deleteTest(req.params);
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = { add, get, update, deleted };