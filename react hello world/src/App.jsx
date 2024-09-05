import './App.css'
import Card from './components/card';

function App() {
  const items = [
    {
      title: "Web Development",
      img: "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 1,
    },
    {
      title: "Hacking",
      img: "https://images.unsplash.com/photo-1719253479576-46c24a216c54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhY2tpbmd8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 2,
    },
    {
      title: "Artificial Intelligence",
      img: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 3,
    },
    {
      title: "Cyber Security",
      img: "https://plus.unsplash.com/premium_photo-1674506652948-dda165b89070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGN5YmVyJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 4,
    },
    {
      title: "Ferrari",
      img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZlcnJhcml8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 5,
    },
    {
      title: "Lamborgini",
      img: "https://images.unsplash.com/photo-1607870379000-1f6d5e892aba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhbWJvcmdpbml8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 6,
    },
    {
      title: "Iphone",
      img: "https://images.unsplash.com/photo-1699892131404-4240676c06bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTIlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 7,
    },
    {
      title: "Playstation",
      img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheXN0YXRpb258ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 8,
    },
    {
      title: "Lion",
      img: "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 9,
    },

    {
      title: "Land Cruiser",
      img: "https://images.unsplash.com/photo-1690917448793-cf9a81b31940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmQlMjBjcnVpc2VyfGVufDB8fDB8fHww",
      price: "$2000",
      id: 10,
    },
    {
      title: "Civic",
      img: "https://images.unsplash.com/photo-1606836796794-279e92b7612b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpdmljfGVufDB8fDB8fHww",
      price: "$2000",
      id: 11,
    },
    {
      title: "Samsung Mobile",
      img: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 12,
    },
  ];
  return (
    <>
       <div className="container px-5 py-24 mx-auto">
        <h1 className='px 2'>Image Gallery</h1>
        <div className="flex flex-wrap -m-4">

          {items.map((data) => (
            <Card
              key={data.id}
              img={data.img}
              title={data.title}
              price={data.price}
              onPress={() => console.log(data)}
            />
          ))}
        </div>
      </div>
         </>
  )
}

export default App
