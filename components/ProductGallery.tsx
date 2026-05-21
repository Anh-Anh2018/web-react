

import { Image, View, useWindowDimensions } from "react-native";

export default function ProductGallery() {
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 24,

        width: "100%",
        maxWidth: 1280,

        alignSelf: "center",

        justifyContent: "center",

        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      {/* LEFT */}
      <Image
        source={require("../assets/images/left.jpg")}
        style={{
          width: isMobile ? width * 0.9 : 320,
          height: isMobile ? 300 : 420,

          borderRadius: 16,
        }}
        resizeMode="cover"
      />

      {/* CENTER */}
      <View
        style={{
          gap: 24,

          width: isMobile ? width * 0.9 : 220,
        }}
      >
        <Image
         source={require("../assets/images/center1.jpg")}
          style={{
            width: "100%",
            height: isMobile ? 220 : 198,

            borderRadius: 16,
          }}
          resizeMode="cover"
        />

        <Image
         source={require("../assets/images/center2.jpg")}
          style={{
            width: "100%",
            height: isMobile ? 220 : 198,

            borderRadius: 16,
          }}
          resizeMode="cover"
        />
      </View>

      {/* RIGHT */}
      <Image
       source={require("../assets/images/right.jpg")}
        style={{
          width: isMobile ? width * 0.9 : 320,
          height: isMobile ? 300 : 420,

          borderRadius: 16,
        }}
        resizeMode="cover"
      />
    </View>
  );
}
