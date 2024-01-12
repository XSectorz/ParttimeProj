

const SlideTypeCard = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex w-full bg-red-500 rounded-lg" style={{ height: "80%"}}>

            </div>
            <div className="flex mt-1" style={{ height: "20%"}}>
                {title}
            </div>
        </div>
    )
} 

export default SlideTypeCard;