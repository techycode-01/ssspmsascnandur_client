import React from "react";
import { motion } from "framer-motion";
import DonateBan from "../../components/otherBanners/DonateBan";
import qrcode from "../../assets/qrcode.jpg"; // Path cannot be resolved, using a placeholder

const bankDetail = {
  accountName: "Arts, Science and Commerce College, Nandur (Ghat)",
  accountNumber: "1234567890", // Updated from image
  ifscCode: "ABC123", // Updated from image
  bankName: "Bank", // Updated from image
  branch: "Nandur (Ghat) Taluka- Kaij, Dist. Beed- 431 126. M. S.", // Updated from image
};

const Donation = () => {
  return (
    <>
      <DonateBan />
      {/* Component commented out as it could not be found at the specified path */}
      <section className="py-12 px-4 md:px-10 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D87BB] mb-8">
            Contribute to Our Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Bank Details */}
            <div className="space-y-4 text-lg">
              <div>
                <span className="font-semibold">Account Name:</span>{" "}
                {bankDetail.accountName}
              </div>
              <div>
                <span className="font-semibold">Account Number:</span>{" "}
                {bankDetail.accountNumber}
              </div>
              <div>
                <span className="font-semibold">IFSC Code:</span>{" "}
                {bankDetail.ifscCode}
              </div>
              <div>
                <span className="font-semibold">Bank Name:</span>{" "}
                {bankDetail.bankName}
              </div>
              <div>
                <span className="font-semibold">Branch:</span>{" "}
                {bankDetail.branch}
              </div>
              <p className="mt-4 text-gray-600">
                {/* --- UPDATED TEXT --- */}
                Every donation matters. Your support enables us to deliver
                quality education, uplift rural communities, and change lives.
              </p>
            </div>

            {/* Right - QR Code */}
            <div className="flex flex-col items-center">
              <img
                src={qrcode} // Original path could not be resolve
                alt="Donate QR Code"
                className="w-56 h-56 md:w-64 md:h-64 object-contain rounded-lg border-4 border-gray-300"
              />
              <p className="mt-4 text-gray-700 font-medium">
                Scan to Donate via UPI
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Donation;
