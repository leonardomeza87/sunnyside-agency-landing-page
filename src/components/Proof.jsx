import { useState } from "react";

import avatarEmily from "../images/image-emily.jpg";
import avatarThomas from "../images/image-thomas.jpg";
import avatarJennie from "../images/image-jennie.jpg";

import DesktopGalleryCone from "../images/desktop/image-gallery-cone.jpg";
import DesktopGalleryMilkbottles from "../images/desktop/image-gallery-milkbottles.jpg";
import DesktopGalleryOrange from "../images/desktop/image-gallery-orange.jpg";
import DesktopGallerySugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";
import MobileGalleryCone from "../images/mobile/image-gallery-cone.jpg";
import MobileGalleryMilkbottles from "../images/mobile/image-gallery-milkbottles.jpg";
import MobileGalleryOrange from "../images/mobile/image-gallery-orange.jpg";
import MobileGallerySugarcubes from "../images/mobile/image-gallery-sugarcubes.jpg";

const Proof = () => {
  const [mobile, setMobile] = useState(
    document.body.clientWidth < 401 ? true : false
  );

  window.addEventListener("resize", function (e) {
    if (document.body.clientWidth < 401) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  return (
    <div className="proof">
      <div className="testimonials">
        <h2>Client testimonials</h2>
        <div className="container">
          <div className="testimony">
            <div className="avatar">
              <img src={avatarEmily} alt="Emily" />
            </div>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <strong>Emily R.</strong>
            <span>Marketing Director</span>
          </div>
          <div className="testimony">
            <div className="avatar">
              <img src={avatarThomas} alt="Thomas" />
            </div>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <strong>Thomas S.</strong>
            <span>Chief Operating Officer</span>
          </div>
          <div className="testimony">
            <div className="avatar">
              <img src={avatarJennie} alt="Jennie" />
            </div>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <strong>Jennie F.</strong>
            <span>Business Owner</span>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="picture">
          <img
            src={mobile ? MobileGalleryMilkbottles : DesktopGalleryMilkbottles}
            alt="Milkbottles"
          />
        </div>
        <div className="picture">
          <img
            src={mobile ? MobileGalleryOrange : DesktopGalleryOrange}
            alt="Orange"
          />
        </div>
        <div className="picture">
          <img
            src={mobile ? MobileGalleryCone : DesktopGalleryCone}
            alt="Cone"
          />
        </div>
        <div className="picture">
          <img
            src={mobile ? MobileGallerySugarcubes : DesktopGallerySugarcubes}
            alt="Sugarcubes"
          />
        </div>
      </div>
    </div>
  );
};

export default Proof;
