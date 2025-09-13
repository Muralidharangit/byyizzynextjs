// app/all/home/page.jsx
import Mainbanner from "./Mainbanner";
import Ourbrand from "./Ourbrand";

import Whychoose from "./Whychoose";
import Serv1 from "./serv1";
import Ser2 from "./ser2";
import Ourservice from "./Ourservice";
import ShopbyCat from "./ShopbyCat";




export default function HomePage() {
  return (
    <div className="mt-[122px]">
      {/* Hero / Main Banner */}
      {/* <Mainbanner /> */}
      <Mainbanner />

      {/* Services */}
      <Ourservice />

      {/* Shop by Category */}
      <ShopbyCat />

      <Serv1 />
      <Ser2 />

      {/* Our Brand Section */}
      <Ourbrand />

      {/* Why Choose Us */}
      <Whychoose />
    </div>
  );
}
