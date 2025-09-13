// app/all/home/page.jsx
import Mainbanner from "./Mainbanner";
import Ourbrand from "../../components/Ourbrand";

import Whychoose from "../../components/Whychoose";
import Serv1 from "../../components/serv1";
import Ser2 from "../../components/serv2";
import Ourservice from "../../components/Ourservice";
import ShopbyCat from "../../components/ShopbyCat";

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
