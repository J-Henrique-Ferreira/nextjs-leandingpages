// import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

type ReviewData = {
    name: string;
    profession: string;
    image: string;
    review: string;
    stars: number;
};

type SectionReviewsProps = {
    reviewsList: ReviewData[];
};

export function SectionReviews({ reviewsList }: SectionReviewsProps) {
    const handleStars = ((starsNumber: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={`${i + 1 <= starsNumber ? "text-yellow-500" : "text-gray-300"}`}>★</span>
            );
        }
        return stars;
    })

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsList.map((reviewDatas) =>
                <Card key={reviewDatas.name} className=" rounded-lg shadow-lg items-center border-0">
                    <CardHeader className="flex flex-row justify-start gap-2 pb-2">
                        <Image src={reviewDatas.image}
                            width={300} height={300}
                            alt="homem frustrado por ter impotência sexual"
                            className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <CardTitle className="text-lg font-semibold text-gray-800">
                                {reviewDatas.name}
                            </CardTitle>
                            <div className="text-xs mt-[-2px]">{reviewDatas.profession}</div>
                            <div className="flex">{handleStars(reviewDatas.stars)}</div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-600 italic">
                            {reviewDatas.review}
                        </CardDescription>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}