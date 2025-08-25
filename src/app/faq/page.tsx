import Content from "@/components/Content"
import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Image from "next/image"

const Faq = () => {
    return (
        <PageLayout>

            <Header
                title="FAQ"
                subtitle="Toutes les infos pratiques sur notre club !"
            />

            <Content>
                <Image
                    src="/faq/1.png"
                    alt="Photo d'un match"
                    className="rounded-xl"
                    width={2000}
                    height={2000}
                />

                <div className="flex flex-col gap-5">
                    
                </div>
            </Content>

        </PageLayout>
    )
}

export default Faq