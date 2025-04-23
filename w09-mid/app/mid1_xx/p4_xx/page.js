import TourList_xx from "@/components/mid1_xx/p4_xx/TourList_xx";
import { getTrs } from "@/lib/db-tour";

export default async function Mid1P4Page_xx() {
  const my_tours = await getTrs();
  console.log('p4_xx: my_tours', my_tours);
  return (
    <>
      <TourList_xx my_tours={my_tours}  />
    </>
  );
}
