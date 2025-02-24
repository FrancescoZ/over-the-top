import { Box } from "@chakra-ui/react";

interface MapProps {
  location: {
    coordinates: {
      lat: number;
      lng: number;
    };
    address: string;
  };
}

const Map = ({ location }: MapProps) => {
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    location.coordinates.lng - 0.005
  }%2C${location.coordinates.lat - 0.005}%2C${
    location.coordinates.lng + 0.005
  }%2C${location.coordinates.lat + 0.005}&layer=mapnik&marker=${
    location.coordinates.lat
  }%2C${location.coordinates.lng}`;

  return (
    <Box h="100%" w="100%" borderRadius="lg" overflow="hidden">
      <iframe
        title="Location Map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={osmUrl}
        style={{ border: 0 }}
      />
    </Box>
  );
};

export default Map;
