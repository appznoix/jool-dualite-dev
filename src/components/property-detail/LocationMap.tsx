interface LocationMapProps {
  mapEmbed: string;
}

const LocationMap = ({ mapEmbed }: LocationMapProps) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={mapEmbed}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default LocationMap;
