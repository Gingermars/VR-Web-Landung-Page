import { reviews } from "../constants"

const Reviews = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            What people think about us
        </h2>
        <div className="flex flex-wrap justify-center">
            {reviews.map((review, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{review.text}</p>
                        <div className="flex mt-8 item-start">
                            <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={review.image} alt={review.user} />
                            <div>
                                <h6>{review.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">
                                    {review.company}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reviews