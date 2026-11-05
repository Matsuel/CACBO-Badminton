import Image from 'next/image'
import Content from '@/components/Content'
import PageLayout from '@/components/PageLayout'
import Text from "@/components/Text";

const NotFound = () => {
    return (
        <PageLayout>
            <Content className='items-center gap-content'>
                <div className='relative'>
                    <Text variant="h1" color="rouge">404</Text>
                    <Image
                        src="/notfound/volant.svg"
                        alt='volant de badminton'
                        className='h-16 w-auto absolute z-10 -top-2 left-1/2 -translate-x-1/2'
                        width={100}
                        height={100}
                    />
                    <Text as="p" variant="h1" color="rouge" className="absolute z-20 top-0 left-1/2 -translate-x-1/2">
                        0
                    </Text>
                </div>

                <div className='flex flex-col'>
                    <Text variant="secondaire" color="rouge-pale" className="text-center">
                        Oops.. Service trop long !
                    </Text>
                    <Text variant="secondaire" color="rouge-pale" className="text-center">
                        Cette page n’existe pas ou plus.
                    </Text>
                </div>
            </Content>
        </PageLayout>
    )
}

export default NotFound