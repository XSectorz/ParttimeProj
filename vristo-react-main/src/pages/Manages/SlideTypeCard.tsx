const SlideTypeCard = ({ title, imgUrl }: { title: string; imgUrl?: string }) => {
    return (
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex w-full bg-[#363a44] rounded-lg" style={{ height: "80%" }}>
          {imgUrl && <img src={imgUrl} alt={title} className="w-full h-full object-cover rounded-lg" />}
        </div>
        <div className="flex mt-1" style={{ height: "20%" }}>
          {title}
        </div>
      </div>
    );
  };
  
  export default SlideTypeCard;