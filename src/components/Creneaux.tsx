import { club } from '@/constantes/club'
import { cn } from '@/utils/cn'
import List from './List'
import ListElement from './ListElement'
import Text from './Text'

interface CreneauxProps {
    /** liste : puces « Lundi → 21h - 23h » · pastilles : jour + horaire dans une pastille rouge (Contact). */
    variant?: 'liste' | 'pastilles';
    /** Met les créneaux en gras (accueil). */
    strong?: boolean;
    className?: string;
}

const Creneaux = ({ variant = 'liste', strong = false, className }: CreneauxProps) => {
    if (variant === 'pastilles') {
        return (
            <div className={cn('flex flex-row flex-wrap items-center gap-x-4 gap-y-2', className)}>
                {club.creneaux.map(({ jour, horaire }) => (
                    <Text as="span" key={jour} className="flex items-center gap-2">
                        {jour}
                        <Text as="span" variant="secondaire" color="blanc" className="bg-rouge rounded px-1.5 py-0.5">
                            {horaire.replaceAll(' ', '')}
                        </Text>
                    </Text>
                ))}
            </div>
        )
    }

    return (
        <List className={className}>
            {club.creneaux.map(({ jour, horaire }) => (
                <ListElement key={jour} className={cn(strong && 'font-bold')}>
                    {jour} → {horaire}
                </ListElement>
            ))}
        </List>
    )
}

export default Creneaux
