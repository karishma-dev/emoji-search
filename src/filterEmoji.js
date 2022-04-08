// Emojis Data
const emojis = require('../src/emojiList.json');

// FilterEmoji Component
export default function filterEmoji(text) {
    return emojis.filter((emoji) => {
        if(emoji.symbol === text){
            return true;
        }
        if(emoji.title.toLowerCase().includes(text.toLowerCase())){
            return true;
        }
        if(emoji.keywords.toLowerCase().includes(text.toLowerCase())){
            return true;
        }
        return false;
    }).slice(0, 20);
}