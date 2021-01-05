const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const type = upload.single('sculpture_filename')
const { Artist, Painting, Sculpture } = require('../../models');
const uploadFile = require('../../upload')
const deleteFile = require('../../delete')

let sculpturePath = "";

//GET all Sculptures
router.get('/', async (req, res) => {
    try{
        const sculptureData = await Sculpture.findAll({
            include: [{ model: Artist}]
        });
        res.status(200).json(sculptureData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//Get Sculpture by Id
router.get('/id/:id', async (req, res) => {
    try {
        const sculptureData = await Sculpture.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(sculptureData);
        sculpturePath = sculptureData.sculpture_filename
        console.log(sculpturePath)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

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
        console.log("body", req.body)
        console.log("fileData", req.file)
        
        req.body.sculpture_filename = req.file.key
        req.body.sculpture_location = req.file.location
        
        const newSculpture = Sculpture.create(req.body);
        res.status(200).json(newSculpture);
    
    } catch (err) {
        res.status(400).json(err);
    }
});

//EDIT a sculpture by ID

router.post('/:id', async (req, res) => {
    try {
        console.log("body", req.body)

        const sculptureData = await Sculpture.update(
            {
                sculpture_name: req.body.sculpture_name,
                sculpture_height: req.body.sculpture_height,
                sculpture_width: req.body.sculpture_width,
                sculpture_depth: req.body.sculpture_depth,
                sculpture_price: req.body.sculpture_price,
                artist_id: req.body.artist_id
            },
            {
                where: {
                    id: req.params.id
                },
            }
        )
        res.status(200).json(sculptureData)
    } catch (err) {
        res.status(400).json(err);
    }
})

// DELETE a Sculpture by ID

router.delete('/:id', async (req, res) => {
    try {
        const sculptureData = await Sculpture.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!sculptureData) {
            res.status(404).json({ message: "There's no sculpture with that id!" });
            return;
        }
        res.status(200).json(sculptureData);
        deleteFile(sculpturePath)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;