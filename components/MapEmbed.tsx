export default function MapEmbed() {
  return (
    <div className="w-full rounded-md overflow-hidden border border-[#E7E5E4]" style={{ height: "400px" }}>
      <iframe
        title="TSU Community Farm Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8!2d-95.3655!3d29.7241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf4a5b9c0001%3A0x0!2s3216+Blodgett+St%2C+Houston%2C+TX+77004!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(0.2) contrast(1.02)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
