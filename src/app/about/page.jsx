import Image from "next/image";


const page = () => {
    return (
        <div>
           <h2>putki marmu tore</h2> 
            <Image
      src="https://content.screen.nsw.gov.au/assets/Uploads/Past-productions/valorant.webp"
      alt="Valorant"
      width={500}
      height={500}
    />
        </div>
    );
};

export default page;