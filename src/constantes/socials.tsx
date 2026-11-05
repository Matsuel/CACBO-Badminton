import type React from 'react'
import Facebook from '@/assets/footer/Facebook'
import HelloAsso from '@/assets/footer/HelloAsso'
import Instagram from '@/assets/footer/Instagram'
import Messenger from '@/assets/footer/Messenger'

export type SocialName = 'Facebook' | 'Instagram' | 'Messenger' | 'HelloAsso'

// Réseaux du club : source unique pour la page Contact et le footer.
export const socials: { name: SocialName; href: string; Icon: React.ComponentType<{ size?: number }> }[] = [
    { name: 'Facebook', href: 'https://www.facebook.com/cacbo.bad', Icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/cacbo.bad', Icon: Instagram },
    { name: 'Messenger', href: 'https://www.messenger.com/cacbo.bad', Icon: Messenger },
    { name: 'HelloAsso', href: 'https://www.helloasso.com/associations/cacbo-badminton', Icon: HelloAsso },
]
