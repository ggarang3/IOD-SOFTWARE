import {Book} from "../models/bookModel.js";

export const getAllBooks = async (req,res)=> {
    try {
        const books = await Book.findAll ({
            include: [
                Author,
                Genre,
                {},
            ],
        }
        );

    } catch (error){
        throw new Error (`error fetching Books: ${error.message}`)
    }
};