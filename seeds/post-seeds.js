
const { Post } = require('../models');

const postData = [{
        title: 'Crime and Punishment',
        content: 'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime.',
        user_id: 1

    },
    {
        title: 'Healthy-ish',
        content: 'Creamiest cranberry spritzer hearty sparkling pomegranate punch pasta overflowing strawberries ginger carrot spiced juice springtime strawberry sandwiches cinnamon toast zesty tofu pad thai blueberry pops.',
        user_id: 2
    },
    {
        title: 'Cat Thoughts',
        content: 'I like frogs and 0 gravity murder hooman toes shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff kitty kitty pussy cat doll cats are the world but meow in empty rooms. Eat from dog.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;