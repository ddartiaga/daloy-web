import Image from "next/image";
import CardSimple from "@/components/widgets/CardSimple";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <CardSimple
            icon={
              <span className="avatar avatar-xl">
                <Image
                  width={28}
                  height={28}
                  src="/assets/images/faces/8.jpg"
                  alt="img"
                />
              </span>
            }
            heading="Dudz A"
            title="CEO"
            content="Katalyst IT Services"
            customClass="border border-info"
          ></CardSimple>
        </div>
        <div className="col-md-3 col-sm-12">
          <CardSimple
            icon={
              <span className="avatar avatar-xl">
                <Image
                  width={28}
                  height={28}
                  src="/assets/images/faces/8.jpg"
                  alt="img"
                />
              </span>
            }
            heading="Ninz A"
            title="CFO"
            content="Katalyst IT Services"
            customClass="border border-primary"
          ></CardSimple>
        </div>
        <div className="col-md-3 col-sm-12">
          <CardSimple
            icon={
              <span className="avatar avatar-xl">
                <Image
                  width={28}
                  height={28}
                  src="/assets/images/faces/8.jpg"
                  alt="img"
                />
              </span>
            }
            heading="Spotty"
            title="Pasalubong Checker"
            content="Katalyst IT Services"
            customClass="border border-danger"
          ></CardSimple>
        </div>
        <div className="col-md-3 col-sm-12">
          <CardSimple
            icon={
              <span className="avatar avatar-xl">
                <Image
                  width={28}
                  height={28}
                  src="/assets/images/faces/8.jpg"
                  alt="img"
                />
              </span>
            }
            heading="Prada"
            title="Ganda Lang"
            content="Katalyst IT Services"
            customClass="border border-warning"
          ></CardSimple>
        </div>
      </div>
    </>
  );
};

export default Home;
