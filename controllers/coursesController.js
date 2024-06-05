import courses from '../models/courses.js';

// Create a new Cource
export const createCource = async (req, res) => {
    console.log('aaa')
    try {

        const newCource = await courses.create({
            ...req.body,
            chapter: JSON.parse(req.body.chapters || '[]')
        });
        res.status(201).json(newCource);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

// Get all courses
export const getAllcourses = async (req, res) => {
    try {
        const courses = await courses.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific Cource by ID
export const getCourceById = async (req, res) => {
    try {
        const cource = await courses.findById(req.params.id);
        if (cource) {
            res.status(200).json(cource);
        } else {
            res.status(404).json({ message: 'Cource not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a Cource by ID
export const updateCourceById = async (req, res) => {
    try {
        const updatedCource = await courses.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedCource) {
            res.status(200).json(updatedCource);
        } else {
            res.status(404).json({ message: 'Cource not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a Cource by ID
export const deleteCourceById = async (req, res) => {
    try {
        const deletedCource = await courses.findByIdAndDelete(req.params.id);
        if (deletedCource) {
            res.status(200).json({ message: 'Cource deleted successfully' });
        } else {
            res.status(404).json({ message: 'Cource not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
