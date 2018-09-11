//var Admin = require("../models/admin");
var common_helper = {};

common_helper.loginCheck = async (data) => {
    try {
        var data = await Admin.findOne(data);
        if (data && data.length === 1) {
            return {
                status: 1,
                message: "Login Success",
                admin: data
            };
        } else {
            return { status: 2, message: "Login Failed" };
        }
    } catch (err) {
        return {
            status: 0,
            message: "Error occured while Login Check",
            error: err
        };
    }
}

common_helper.find = async (collection, data = {}, type = 2) => {
    try {
        if (type == 1) {
            var data = await collection.findOne(data);
        }
        else {
            var data = await collection.find(data);
        }
        if (data || (data && data.length > 0)) {
            return {
                status: 1,
                message: "data found",
                data: data
            };
        } else {
            return { status: 2, message: "No data found" };
        }
    } catch (err) {
        return {
            status: 0,
            message: "Error occured while fetching data",
            error: err
        };
    }
}

common_helper.insert = async (collection, data = {}) => {
    console.log('data', data);

    if (Object.keys(data).length > 0) {
        try {
            var insertObj = new collection(data);
            var data = await insertObj.save();
            if (data || data.length > 0) {
                return {
                    status: 1,
                    message: "data inserted",
                    data: data
                };
            } else {
                return { status: 2, message: "No data inserted" };
            }
        } catch (err) {
            return {
                status: 0,
                message: "Error occured while inserting data",
                error: err
            };
        }
    }
    else {
        return {
            status: 0,
            message: "Enter data for insert",
            error: err
        };
    }


}

common_helper.update = async (collection, id, data) => {
    try {
        var data = await collection.findOneAndUpdate(id, data);
        if (data || data.length > 0) {
            return {
                status: 1,
                message: "data updated",
                data: data
            };
        } else {
            return { status: 2, message: "No data updated" };
        }
    } catch (err) {
        return {
            status: 0,
            message: "Error occured while updating data",
            error: err
        };
    }
}

common_helper.delete = async (collection, id, data = {}) => {

    try {
        if (Object.keys(data).length > 0) {
            var data = await collection.findOneAndUpdate(id, data);
        }
        else {
            var data = await collection.remove(id);
        }

        if (data || data.length > 0) {
            return {
                status: 1,
                message: "data deleted",
                data: data
            };
        } else {
            return { status: 2, message: "No data deleted" };
        }
    } catch (err) {
        return {
            status: 0,
            message: "Error occured while updating data",
            error: err
        };
    }
}


module.exports = common_helper;