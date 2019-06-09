
require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaSql = `
    -- Drop (droppable only when no dependency)
    DROP TABLE IF EXISTS posts;
    DROP TABLE IF EXISTS collects;
    DROP TYPE IF EXISTS category;
    DROP TABLE IF EXISTS history;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS chatlists;
    DROP TABLE IF EXISTS chats;
    DROP TABLE IF EXISTS contracts;
    DROP TABLE IF EXISTS availability;

    -- Create
    CREATE TYPE category AS ENUM (
        '演員/女演員',
        '樂隊/音樂人',
        '書法藝術家',
        '小丑',
        '漫畫家',
        '文案作家',
        '舞蹈家',
        'DJ',
        '平面設計師',
        '主持/司儀',
        '魔術師',
        '彩妝師',
        '攝影師',
        '編劇',
        '歌手',
        '翻譯員',
        '影像編輯',
        '其他'
    );
    CREATE TABLE "collects" (
        id          SERIAL PRIMARY KEY NOT NULL,
        userId      TEXT NOT NULL,
        title       TEXT NOT NULL,
        category    category NOT NULL,
        ts          BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM NOW())),
        by_hour     BOOL NOT NULL DEFAULT TRUE,
        price       INTEGER NOT NULL DEFAULT 0,
        experience  INTEGER NOT NULL DEFAULT 0,
        detail      TEXT NOT NULL,
        youtubeId   TEXT NOT NULL,
        views       INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE posts (
        id          SERIAL PRIMARY KEY NOT NULL,
        userId      TEXT NOT NULL,

        title       TEXT NOT NULL,
        category    category NOT NULL,
        ts          BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM NOW())),
        by_hour     BOOL NOT NULL DEFAULT TRUE,
        price       INTEGER NOT NULL DEFAULT 0,
        experience  INTEGER NOT NULL DEFAULT 0,
        detail      TEXT NOT NULL,
        youtubeId   TEXT NOT NULL,
        views       INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE history (
        id          SERIAL PRIMARY KEY NOT NULL,
        postId      INTEGER NOT NULL,
        userId      TEXT NOT NULL
    );

    CREATE TABLE users (
        id          TEXT NOT NULL,
        money       INTEGER NOT NULL DEFAULT 0,
        description TEXT,
        name        TEXT NOT NULL,
        photo       TEXT
    );

    CREATE TABLE chatlists (
        key         SERIAL PRIMARY KEY NOT NULL,
        id          TEXT NOT NULL,
        name        TEXT NOT NULL,
        img         TEXT NOT NULL,
        text        TEXT NOT NULL,
        updated     TEXT NOT NULL,
        roomkey     INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE chats (
        key         SERIAL PRIMARY KEY NOT NULL,
        owner       TEXT NOT NULL,
        text        TEXT NOT NULL,
        updated     TEXT NOT NULL,
        roomkey     INTEGER NOT NULL DEFAULT 0
    );

    CREATE TABLE availability (
        id          SERIAL PRIMARY KEY NOT NULL,
        contractId  INTEGER NOT NULL,
        date        TEXT NOT NULL,
        time        INTEGER NOT NULL
    );

    CREATE TABLE contracts (
        id          TEXT NOT NULL,
        orderer     TEXT NOT NULL,
        artist      TEXT NOT NULL,
        postId      INTEGER NOT NULL,
        date        TEXT NOT NULL,
        time        TEXT NOT NULL
    );
`;

const selectCategory = `select enum_range (null::category);`;

const dataSql = `
        INSERT INTO posts (userId, title, category, price, experience, detail, youtubeId, ts)
        SELECT
            'b3ca56e6-7a33-4d42-bcda-5e25e799566a',
            'title',
            '其他',
            i,
            i+1,
            'detail',
            'mtAc_bMYBsM',
            i+100000
        FROM generate_series(1, 10) AS s(i);

        --create collections
        

        -- create chat list
        INSERT INTO chatlists(id, name, img, text, updated, roomkey)
        VALUES(
            'b3ca56e6-7a33-4d42-bcda-5e25e799566a',
            'testUser2',
            'images/guitar.jpg',
            'Start chatting now!',
            '00:00',
            1
            );

        INSERT INTO chatlists(id, name, img, text, updated, roomkey)
        VALUES(
            '4e27b01b-ccbe-47db-a539-8c00d5624739',
            'testUser',
            'images/piano.jpg',
            'How are you?',
            '14:39',
            2
        );

        INSERT INTO chatlists(id, name, img, text, updated, roomkey)
        VALUES(
            'b3ca56e6-7a33-4d42-bcda-5e25e799566a',
            'Samuel',
            'images/ballet.jpg',
            'Are you free now?',
            '12:16',
            3
        );

        -- create chat log
        --INSERT INTO chats(owner, text, updated, roomkey)
        --VALUES('b3ca56e6-7a33-4d42-bcda-5e25e799566a', 'hi', '23:43', 1);
        --INSERT INTO chats(owner, text, updated, roomkey)
        --VALUES('4e27b01b-ccbe-47db-a539-8c00d5624739', 'hi', '23:43', 1);
        --INSERT INTO chats(owner, text, updated, roomkey)
        --VALUES('4e27b01b-ccbe-47db-a539-8c00d5624739', 'how old are you?', '23:44', 1);
`

db.none(schemaSql).then(() => {
    console.log('Schema created');
    db.none(dataSql).then(() => {
        console.log('data populated');
        pgp.end();
    })
}).catch(err => {
    console.log('Error creating schema', err);
});
