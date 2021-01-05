const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const type = upload.single('other_filename')
const { Artist, Painting, Sculpture, Other } = require('../../models');
const uploadFile = require('../../upload')
const deleteFile = require('../../delete')

let otherPath = "";

//GET all Others
router.get('/', async (req, res) => {
    try{
        const otherData = await Other.findAll({
            include: [{ model: Artist}]
        });
        res.status(200).json(otherData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//GET Others by Id
router.get('/id/:id', async (req, res) => {
    try {
        const otherData = await Other.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(otherData);
        otherPath = otherData.other_filename
        console.log(otherPath)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//GET Others by Artist
router.get('/:id', async (req, res) => {
    try{
        const otherData = await Other.findAll({
            where: {
                artist_id: req.params.id,
            }
        });
        if (!otherData) {
            res.status(404).json({ message: "There are no artists with that id!"})
            return;
        }
        res.status(200).json(otherData);
    } catch (err) {
        res.status(500).json(err)
    }
});

//CREATE a new Other
router.post('/', uploadFile.single('other_filename'), async (req, res) => {
    try {
        console.log("body", req.body)
        console.log("fileData", req.file)
        
        req.body.other_filename = req.file.key
        req.body.other_location = req.file.location
        
        const newOther = Other.create(req.body);
        res.status(200).json(newOther);
    
    } catch (err) {
        res.status(400).json(err);
    }
});

//EDIT an Other by Id
router.post('/:id', async (req, res) => {
    try {
        console.log("body", req.body)

        const otherData = await Other.update(
            {
                other_name: req.body.other_name,
                other_height: req.body.other_height,
                other_width: req.body.other_width,
                other_depth: req.body.other_depth,
                other_price: req.body.other_price,
                artist_id: req.body.artist_id
            },
            {
                where: {
                    id: req.params.id
                },
            }
        )
        res.status(200).json(otherData)
    } catch (err) {
        res.status(400).json(err);
    }
})

//DELETE an Other by Id
router.delete('/:id', async (req, res) => {
    try {
        const otherData = await Other.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!otherData) {
            res.status(404).json({ message: "There's no Other with that id!" });
            return;
        }
        res.status(200).json(otherData);
        deleteFile(otherPath)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;