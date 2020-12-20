const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const type = upload.single('painting_filename')
const { Artist, Painting, Sculpture } = require('../../models');
const uploadFile = require('../../upload')


//GET all Paintings
router.get('/', async (req, res) => {
    try{
        const paintingData = await Painting.findAll({
            include: [{ model: Artist}]
        });
        res.status(200).json(paintingData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//Get Painting by Id
// router.get('/:id', async (req, res) => {
//     try {
//         const paintingData = await Painting.findByPk(req.params.id, {
//             include: [{ model: Artist}]
//         });
//         if (!paintingData) {
//             res.status(404).json({ message: "There's no painting with that id!"});
//             return;
//         }
//         res.status(200).json(paintingData);
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

//Get Paintings by Artist

router.get('/:id', async (req, res) => {
    try{
        const paintingData = await Painting.findAll({
            where: {
                artist_id: req.params.id,
            }
        });
        if (!paintingData) {
            res.status(404).json({ message: "There are no artists with that id!"})
            return;
        }
        res.status(200).json(paintingData);
    } catch (err) {
        res.status(500).json(err)
    }
});

//CREATE a new Painting

router.post('/', uploadFile.single('painting_filename'), async (req, res) => {
    try {
        console.log(req.body)
        console.log(req.file)
        
        req.body.painting_filename = req.file.key
        
        const newPainting = Painting.create(req.body);
        res.status(200).json(newPainting);
    
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;

