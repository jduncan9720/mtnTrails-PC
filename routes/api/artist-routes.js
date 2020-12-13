const router = require('express').Router();
const { Artist, Painting, Sculpture } = require('../../models');

//GET all Artists
router.get('/', async (req, res) => {
    try{
        const artistData = await Artist.findAll({
            include: [{ model: Painting}, {model: Sculpture}]
        });
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get Artist by Id
router.get('/:id', async (req, res) => {
    try {
        const artistData = await Artist.findByPk(req.params.id, {
            include: [{ model: Painting}, {model: Sculpture}]
        });
        if (!artistData) {
            res.status(404).json({ message: "There's no artist with that id!"});
            return;
        }
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err)
    }
});

//CREATE a new Artist
router.post('/', async (req, res) => {
    try {
        const newArtist = Artist.create(req.body);
        res.status(200).json(newArtist);
    } catch (err) {
        res.status(400).json(err);
    }
});

//UPDATE an Artist by Id
router.put('/:id', async (req, res) => {
    try {
        const artistData = await Artist.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (!artistData[0]) {
            res.status(404).json({ message: "There's no artist with that id!" });
            return;
        }
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE an Artist by Id
router.delete('/:id', async (req, res) => {
    try {
        const artistData = await Artist.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!artistData) {
            res.status(404).json({ message: "There's no artist with that id!" });
            return;
        }
        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;