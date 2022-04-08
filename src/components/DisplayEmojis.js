import EmojiCard from './EmojiCard';

// DisplayEmojis Component
export default function DisplayEmojis({emojiList}) {
    return (
        <div className="emoji-result">
            {
                emojiList.map((emoji, i) => {
                    return (<EmojiCard 
                        key={emoji.title}
                        title={emoji.title}
                        icon={emoji.symbol} />)
                })
            }
        </div>
    )
}