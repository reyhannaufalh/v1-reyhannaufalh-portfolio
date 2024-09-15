import certificates from "../../data/certificates.json";
import CertificateCard from "../organisms/CertificateCard";

export default function Certificates() {
  const filteredCertificates = certificates.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  console.log(filteredCertificates);

  return (
    <>
      <div className="container flex flex-col gap-16 mt-16 xl:mt-20 xl:px-44">
        <h1 className="max-w-2xl mx-auto text-5xl font-extrabold leading-tight text-center xl:text-6xl">
          The certificates I have received.
        </h1>

        <div className="flex flex-col w-full">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.slug}
                certificate={certificate}
              />
            ))
          ) : (
            <p>No certificates found</p>
          )}
        </div>

        <div className="mb-32"></div>
      </div>
    </>
  );
}
