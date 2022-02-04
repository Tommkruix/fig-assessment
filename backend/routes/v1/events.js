const express = require('express');
const router = express.Router();
const eventController = require('../../controllers/eventController');


// router.post('/events', eventController.getEvents);

router.get('/', eventController.getEvents);
// router.get(
//     '/',
//     (async (req, res) => {
//       const blogs = await BlogRepo.findByTagAndPaginated(
//         req.params.tag,
//         parseInt(req.query.pageNumber as string),
//         parseInt(req.query.pageItemCount as string),
//       );
  
//       if (!blogs || blogs.length < 1) throw new NoDataError();
  
//       return new SuccessResponse('success', blogs).send(res);
//     }),
//   );

module.exports = router;