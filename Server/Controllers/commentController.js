
const Comment = require('../Models/Comment');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// Dodawanie nowego komentarza
exports.addComment = async (req, res) => {
    try {
        const { product_id, user_id, comment } = req.body;
        const userIdObjectId = new ObjectId(user_id);

        const session = req.session;
        console.log('req.session', session)
        const userId = session.userId;
        
        console.log('Comment:',product_id,userId, userIdObjectId, comment)
        const newComment = new Comment({
            product_id,
            user_id:userId,
            text:comment
        });

        const savedComment = await newComment.save();
        // res.status(201).json(savedComment);
        // http://localhost:3000/store/prod3
        res.redirect(`/store/${product_id}?commentStatus=ok`);        
    } catch (error) {
        // res.redirect(`/store/${product_id}?commentStatus=error`); 
        res.status(500).json({ message: error.message });
    }
};

// Pobieranie komentarzy dla danego produktu
exports.getCommentsByProductId = async (req, res) => {
    try {
        const product_id = req.params.product_id;

        const comments = await Comment.find({ product_id })
            .populate('user_id', 'username') // Opcjonalnie: pobierz dane użytkownika
            .sort({ created_at: -1 }); // Sortowanie od najnowszych

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};