import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What our customers say about us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              I had the pleasure of dining at Foodi last night, and I'm still
              raving about the experience! The attention to detail in
              presentation and service was impeccable
            </blockquote>

            {/* avatar */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src="/images/home/testimonials/testimonial1.png"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src="/images/home/testimonials/testimonial2.png"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      src="/images/home/testimonials/testimonial3.png"
                      alt=""
                    />{" "}
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="font-semibold">Customer Feedback</h5>
                <FaStar className="text-yellow-400" />
                <span className="font-medium">4.9</span>{" "}
                <span className="text-[#807E7E]">((18.6k Reviews))</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
