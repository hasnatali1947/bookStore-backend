import bookListModel from "../models/bookList.js"

const updateBooks = async ({ data }) => {

    try {
        const booksAdd = await bookListModel.create(data)
        if (!booksAdd) {
            return { error: "booksAdd failed." };
        }
        return booksAdd;
    } catch (error) {
        console.error(error);
        return { error: "Error occurred during booksAdd" };
    }
}

const getBooks = async () => {

    try {
        const findData = await bookListModel.find()
        if (!findData) {
            return { error: "booksAdd not found or update failed." };
        }
        return findData;
    } catch (error) {
        console.error(error);
        return { error: "Error occurred during booksAdd" };
    }
}

const deleteBooks = async (itemId) => {
    try {
        const deletedBook = await bookListModel.findByIdAndDelete(itemId);

        if (!deletedBook) {
            return { error: "Book not found" };
        }

        return { success: "Book deleted successfully" };
    } catch (error) {
        console.error(error);
        return { error: "Error occurred during book deletion" };
    }
};

const view = {
    updateBooks,
    getBooks,
    deleteBooks
}

export default view;