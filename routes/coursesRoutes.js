import express from 'express';
import {
    createCourses,
    getAllcourses,
    getCoursesById,
    updateCoursesById,
    deleteCoursesById,
} from '../controllers/coursesController.js';

const router = express.Router();

// Create a new Courses
router.post('/', createCourses);

// Get all courses
router.get('/', getAllcourses);

// Get a specific Courses by ID
router.get('/:id', getCoursesById);

// Update a Courses by ID
router.put('/:id', updateCoursesById);

// Delete a Courses by ID
router.delete('/:id', deleteCoursesById);

export default router;
