import Header from "@/components/Header"
import PageLayout from "@/components/PageLayout"
import Register from "@/components/Register"

const Adherer = () => {
    return (
        <PageLayout>
            <Header
                title="ADHÉRER"
                subtitle="Prêts à nous rejoindre ?"
                cta={
                    <Register
                        saison="24/25"
                        open={false}
                    />
                }
            />
        </PageLayout>
    )
}

export default Adherer