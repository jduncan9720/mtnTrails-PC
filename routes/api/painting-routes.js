const router = require('express').Router();
const { Artist, Painting, Sculpture } = require('../../models');

//GET all Paintings
router.get('/', async (req, res) => {
    try{
        const paintingData = await Painting.findAll({
            include: [{ model: Artist}]
        });
        res.status(200).json(paintingData);
    } catch (err) {
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

module.exports = router;