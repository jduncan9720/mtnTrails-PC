const router = require('express').Router();
const { Artist, Painting, Sculpture } = require('../../models');

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

//Get Paintings by Artist

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
module.exports = router;