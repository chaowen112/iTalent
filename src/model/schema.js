
require('../../config.js');
const pgp = require('pg-promise')();
const db = pgp(process.env.DB_URL);

const schemaSql = `
    -- Drop (droppable only when no dependency)
    DROP TABLE IF EXISTS posts;
    DROP TYPE IF EXISTS category;

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
    CREATE TABLE posts (
        id          SERIAL PRIMARY KEY NOT NULL,
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
    )
`;

const selectCategory = `select enum_range (null::category);`;

const dataSql = `
        INSERT INTO posts (title, category, price, experience, detail, youtubeId, ts)
        SELECT 'title', 
            '其他', 
            i,
            i+1,
            'detail',
            'id',
            i+100000
        FROM generate_series(1, 100) AS s(i);
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
