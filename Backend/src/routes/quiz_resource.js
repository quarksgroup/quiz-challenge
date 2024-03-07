import express from 'express';
import { Quiz } from '../db/models/Quiz.model';
import output from '../utils/response';
const router = express.Router();

// function to create a quiz
router.post('/', async (req, res) => {
  const quiz = await Quiz.create(req.body);
  return output(res, 201, 'Quiz created successfully', quiz, null);
});

// function to get all quizes
router.get('/', async (req, res) => {

});

export default router;
