import { generateUniqueId } from "../utils/generateId";

function getAllData(data) {
    const dataArray = Object.values(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dataArray.length > 0) {
                resolve([...dataArray]);
            } else {
                reject(new Error("Data not found"));
            }
        }, 2000);
    });
}

function getDataById(data, dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = data.find((item) => item._id === dataId);
            if (item) {
                resolve([{ ...item }]);
            } else {
                reject(new Error("Data not found"));
            }
        }, 1000);
    });
}

function updateData(data, dataId, updatedData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = data.findIndex((item) => item._id === dataId);
            if (index !== -1) {
                data[index] = { ...data[index], ...updatedData };
                resolve(data[index]);
            } else {
                reject(new Error("Data not found"));
            }
        }, 1000);
    });
}

function deleteData(data, dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const index = data.findIndex((item) => item._id === dataId);
            if (index !== -1) {
                data.splice(index, 1);
                resolve([...data]);
            } else {
                reject(new Error("Data not found"));
            }
        }, 1000);
    });
}

function createNewData(data, newData) {
    console.log("data_1: ", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newEntry = {
                _id: generateUniqueId(),
                ...newData
            };
            if (newEntry) {
                data.push(newEntry);
                console.log("data_2: ", data);
                resolve([...data]);
            } else {
                reject(new Error("Failed to create new data"));
            }
        }, 1000);
    });
}

const apiMethods = {
    getAllData,
    getDataById,
    updateData,
    deleteData,
    createNewData
};

export default apiMethods;
