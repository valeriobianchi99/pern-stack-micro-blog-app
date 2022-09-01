const express = require('express');
const router = express.Router();
const isAuth = require('../isAuth');
const pool = require('../db');

// localhost:4000/ (home page of the server)
router.get(
    "/",
    (req, res) => {
        res.send(
            `   
                <h1>Welcome to the server listening of Social Media App</h1>
                <sub>Go to <a href="http://${process.env.DOMAIN}:${process.env.PORT}/auth/google">/auth/google</a> to authenticate</sub>
            `
        )
    }
);

router.get(
    "/account",
    isAuth,
    (req, res) => {
        const user = {
            ...req.user,
            loggedIn: true
        }
        res.json(user);
    }
);

router.post(
    "/new_post",
    isAuth,
    async (req, res) => {
        await pool.query(
            "INSERT INTO posts (body, date_creation, author_id) VALUES ($1, $2, $3)",
            [req.body.post, req.body.date_creation,  req.user.id]
        );
        res.status(200).send();
    }
);

router.delete(
    "/post/:id",
    isAuth,
    async (req, res) => {
        const postId = req.params.id;
        await pool.query(
            "DELETE FROM posts WHERE id = $1",
            [postId]
        );
        res.status(200).send();
    }
)

router.get(
    "/feed",
    isAuth,
    async (req, res) => {
        const cursor = req.query.cursor;
        const posts = await pool.query(
            "SELECT u.username, u.img, p.body, p.id, p.date_creation FROM users u INNER JOIN posts p ON u.id = p.author_id ORDER BY p.id DESC LIMIT 5 OFFSET $1",
            [cursor]
        );
        res.send({
            cursor: (cursor * 1) + 5,
            posts: posts.rows
        });
    }
);

router.get(
    "/my_posts",
    isAuth,
    async (req, res) => {
        const cursor = req.query.cursor;
        const posts = await pool.query(
            "SELECT u.username, u.img, p.body, p.id, p.date_creation FROM users u INNER JOIN posts p ON u.id = p.author_id WHERE p.author_id = $1 ORDER BY p.id DESC LIMIT 5 OFFSET $2",
            [req.user.id, cursor]
        );
        res.send({
            cursor: (cursor * 1) + 5,
            posts: posts.rows
        });
    }
);

module.exports = router;