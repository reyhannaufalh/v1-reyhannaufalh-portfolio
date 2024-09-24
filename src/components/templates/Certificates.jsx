import { useEffect, useState } from "react";
import CertificateCard from "../organisms/CertificateCard";
import { axiosInstance } from "../../lib/axiosInstance";
import certificates_data from "../../data/certificates_data.json";

export default function Certificates() {
  let [certificate, setCertificate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/certificates");
        setCertificate(response.data);
      } catch (error) {
        console.log("API ERROR");
      }
    };

    fetchData();
  }, []);

  if (!certificate) certificate = { data: certificates_data };

  return (
    <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-44">
      <h1 className="max-w-2xl mx-auto text-5xl font-extrabold leading-tight text-center xl:text-6xl">
        The certificates I have received.
      </h1>

      <div className="flex flex-col w-full">
        {certificate?.data.length > 0 ? (
          certificate?.data.map((certificate) => (
            <CertificateCard key={certificate.slug} certificate={certificate} />
          ))
        ) : (
          <p>No certificates found</p>
        )}
      </div>

      <div className="mb-32"></div>
    </div>
  );
}
