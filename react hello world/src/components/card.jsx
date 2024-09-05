function Card({
    title = "-",
    price = "-",
    img = "https://dummyimage.com/720x600",
    onPress,
  }) {
    return (
      <div
        onClick={onPress}
        className="cursor-pointer lg:w-1/4 md:w-1/2 w-full p-3"
      >
        <div className="border shadow">
          <a className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={img}
            />
          </a>
          <div className="mt-4 m-2">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;