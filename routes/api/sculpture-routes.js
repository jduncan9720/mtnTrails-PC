const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const type = upload.single('sculpture_filename')
const { Artist, Painting, Sculpture } = require('../../models');
const uploadFile = require('../../upload')

//GET all Sculptures
router.get('/', async (req, res) => {
    try{
        const sculptureData = await Sculpture.findAll({
            include: [{ model: Artist}]
        });
        res.status(200).json(sculptureData);
    } catch (err) {
        res.status(500).json(err)
    }
});

// //Get Painting by Id
// router.get('/:id', async (req, res) => {
//     try {
//         const sculptureData = await Sculpture.findByPk(req.params.id, {
//             include: [{ model: Artist}]
//         });
//         if (!sculptureData) {
//             res.status(404).json({ message: "There's no painting with that id!"});
//             return;
//         }
//         res.status(200).json(sculptureData);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

//Get Sculptures by Artist

router.get('/:id', async (req, res) => {
    try{
        const sculptureData = await Sculpture.findAll({
            where: {
                artist_id: req.params.id,
            }
        });
        if (!sculptureData) {
            res.status(404).json({ message: "There are no artists with that id!"})
            return;
        }
        res.status(200).json(sculptureData);
    } catch (err) {
        res.status(500).json(err)
    }
});

//CREATE a new Sculpture

router.post('/', uploadFile.single('sculpture_filename'), async (req, res) => {
    try {
        console.log(req.body)
        console.log("fileData", req.file)
        
        req.body.sculpture_filename = req.file.key
        req.body.sculpture_location = req.file.location
        
        const newSculpture = Sculpture.create(req.body);
        res.status(200).json(newSculpture);
    
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;