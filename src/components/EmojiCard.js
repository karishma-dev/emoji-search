// EmojiCard Component
export default function EmojiCard({title, icon}) {

    // Function to copy emoji icon to clipboard
    const copyEvent = (e) => {
        navigator.clipboard.writeText(icon);
        e.target.value = 'Copied!';
        setTimeout(() => {
            e.target.value = 'Copy';
        }, 2000);
    }

    return (
        <div className="emoji-card">
            <div className="emoji-icon">{icon}</div>
            <p className="emoji-title">{title}</p>
            <input type='button' className="copy-emoji" value = 'Copy' onClick={(e) => copyEvent(e)} />
        </div>
    )
}