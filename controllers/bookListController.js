import bookListView from "../view/bookListView.js"

const updateBooks = async (req, res) => {
    const { body } = req;
    try {
        const response = await bookListView.updateBooks({ data: body });
        if (response.error) {
            return res.status(400).send({ error: response.error });
        }
        res.send(response);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal server error" });
    }
};

const getBooks = async (req, res) => {

    try {
        const response = await bookListView.getBooks();
        if (response.error) {
            return res.status(400).send({ error: response.error });
        }
        res.send(response);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal server error" });
    }
};

const deleteBooks = async (req, res) => {

    const { itemId } = req.body

    try {
        const response = await bookListView.deleteBooks(itemId);
        console.log("response :", response);
        if (response.error) {
            return res.status(400).send({ error: response.error });
        }
        res.send(response);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal server error" });
    }
};

const controller = {
    updateBooks,
    getBooks,
    deleteBooks
}

export default controller;