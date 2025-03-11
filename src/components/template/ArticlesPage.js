import ArticleCard from "../elements/ArticleCard";
import ArticleTitle from "../module/articlePage/ArticleTitle";




export default function ArticlesPage() {

    const mapArray = Array.from({ length: 10}, (v, i) => i + 1)

    return (
        <div
            className="
                mt-16
                px-4

            "
        >
            <div>
                <ArticleTitle 
                    title="تازه ترین ها"
                />
                <div
                    className="
                        flex
                        overflow-x-scroll
                        gap-6
                        p-3
                    "
                >
                    {
                        mapArray.map((item, index) => (
                            <ArticleCard 
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <ArticleTitle 
                    title="پربازدید ترین ها"
                />
                <div
                    className="
                        flex
                        overflow-x-scroll
                        gap-6
                        p-3
                    "
                >
                    {
                        mapArray.map((item, index) => (
                            <ArticleCard 
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <ArticleTitle 
                    title="راهنمای دریافت وام"
                />
                <div
                    className="
                        flex
                        overflow-x-scroll
                        gap-6
                        p-3
                    "
                >
                    {
                        mapArray.map((item, index) => (
                            <ArticleCard 
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <ArticleTitle 
                    title="اخبار"
                />
                <div
                    className="
                        flex
                        overflow-x-scroll
                        gap-6
                        p-3
                    "
                >
                    {
                        mapArray.map((item, index) => (
                            <ArticleCard 
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}