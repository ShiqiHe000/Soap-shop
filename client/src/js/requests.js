import axios from "axios";

// GET get all items
// /items
export const fetchItems = async () => {
    const response = await axios.get("/items");
    return response.data;
};

// PUT update one item
// /items/:id
export const updateItem = async (item) => {
    await axios.put(`/items/${item.id}`, {
        name: item.name,
        price: item.price,
        number: item.number,
    });
};

// DELETE delete one item with id
// /items/:id
export const deleteItem = async (id) => {
    await axios.delete(`/items/${id}`);
};

export const addItem = async (item) => {
    const res = await axios.post("/items", item);
    return res.data;
};
