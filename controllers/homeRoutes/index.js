const router = require("express").Router();
const { Users, Posts, Comments } = require("../../models");
// const { findByPk } = require("../../models/Users");

router.get("/", async (req, res) => {
  try {
    console.log("!!!!!!!!!!!!800!!!!!!!!!!");
    // Get all projects and JOIN with user data
    const postsData = await Posts.findAll({
      include: [
        {
          model: Users,
        },
      ],
    });
    
    // Serialize data so the template can read it
    const Post = postsData.map((posts) => posts.get({ plain: true }));
    console.log(Post)
    // Pass serialized data and session flag into template
    res.render("homepage", { Post });
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    // const postsData = await Posts.findByPk(req.params.id, {
    //   include: [
    //     Users,
    //     {
    //       include: [Users],
    //       model: Comments,
    //     },
    //   ],
    // });
    const postsData = await Posts.findAll({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Users,
        },
      ],
    });

      // // Serialize data so the template can read it
      const Post = postsData.map((posts) => posts.get({ plain: true }));
      console.log(postsData, "123432423");
      // Pass serialized data and session flag into template
      res.render("homepage", { Post });
  } catch (err) {
    console.log("error", err);
    res.status(500).json(err);
  }
});

module.exports = router;
