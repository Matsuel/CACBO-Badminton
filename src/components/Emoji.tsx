import Image from 'next/image'
import React from 'react'

interface EmojiProps {
    name: string
    width: number
}

const Emoji = ({
    name,
    width
}: EmojiProps) => {


    const emojiSrc = require(`../assets/emojis/${name}.svg`)

    return (
        <Image
            src={emojiSrc}
            alt={name}
            width={width}
            height={width}
            className="inline align-middle"
        />
    )
}

export default Emoji