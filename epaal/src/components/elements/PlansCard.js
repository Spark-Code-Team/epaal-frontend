import Image from "next/image";

export default function PlansCard({ plans }) {
  return (
    <>
      {plans && plans.lenght != 0 ? (
        <>
          {plans.map((eachPlan) => (
            <div
              key={eachPlan.id}
              className="flex h-48 w-48 flex-col items-center justify-evenly rounded-xl border-2 border-green-100"
            >
              <div>
                <Image
                  src={eachPlan.icon}
                  height={100}
                  width={100}
                  className="h-10 w-10"
                />
              </div>
              <div>
                <p className="px-5 text-center">{eachPlan.title}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div>
            <p>هیچ پلنی نیست</p>
          </div>
        </>
      )}
    </>
  );
}
