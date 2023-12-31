import Link from "next/link"
import styles from "../../app/index.module.css"

type pL_type = [
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; },
    { title: string; url: string; }
]

const pL: pL_type = [
    {
        title: "Two Horn Horse",
        url: "/front-end-just/number-1"
    },
    {
        title: "Price Table",
        url: "/front-end-just/number-2"
    },
    {
        title: "Aviation",
        url: "/front-end-just/number-4"
    },
    {
        title: "Rotating Circle",
        url: "/front-end-just/number-5"
    },
    {
        title: "Clerk Price Plan",
        url: "/front-end-just/number-6"
    },
    {
        title: "Check Temperature",
        url: "/front-end-just/number-7"
    },
    {
        title: "Quiz",
        url: "/front-end-just/number-8"
    }
    ,
    {
        title: "Cards App",
        url: "/front-end-just/number-9"
    },
    {
        title: "BMI",
        url: "/front-end-just/number-10"
    }
    ,
    {
        title: "Check City Population",
        url: "/front-end-just/number-11"
    }
    ,
    {
        title: "Pollution Checker Tool",
        url: "/front-end-just/number-12"
    }
]

export default function Home() {
    return (
        <>
            <main id={styles.main}>
                <div id={styles.inner_div}>
                    <h1>NextJs Projects</h1>
                    <section id={styles.inner_section}>
                        {pL.map((data, index) => {
                            return (
                                <Link key={index} href={data.url}>{data.title}</Link>
                            )
                        })}
                    </section>
                </div>
            </main>
        </>
    )
}