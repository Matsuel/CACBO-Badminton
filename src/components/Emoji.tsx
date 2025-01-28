"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface EmojiProps {
    name: string
    width: number
}

const Emoji = ({
    name,
    width
}: EmojiProps) => {


    const [emojiSrc, setEmojiSrc] = useState<string | null>(null);

    useEffect(() => {
        const loadEmoji = async () => {
            const { default: src } = await import(`../assets/emojis/${name}.svg`);
            setEmojiSrc(src);
        };

        loadEmoji();
    }, [name]);

    if (!emojiSrc) return null;

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