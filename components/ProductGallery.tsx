
import { Image, View, useWindowDimensions } from "react-native";

export default function ProductGallery() {
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  return (
    <View
      style={{
        flexDirection: isMobile ? "column" : "row",
        gap: 24,
        width: "100%",
        maxWidth: 1400,
        alignSelf: "center",
        paddingHorizontal: 16,
      }}
    >
      {/* LEFT */}
      <Image
        source={{
          uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        }}
        style={{
          width: isMobile ? "100%" : 300,
          height: isMobile ? 300 : 420,
          borderRadius: 16,
        }}
        resizeMode="cover"
      />

      {/* CENTER */}
      <View
        style={{
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Image
          source={{
            uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
          }}
          style={{
            width: isMobile ? "100%" : 220,
            height: isMobile ? 220 : 198,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />

        <Image
          source={{
            uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
          }}
          style={{
            width: isMobile ? "100%" : 220,
            height: isMobile ? 220 : 198,
            borderRadius: 16,
          }}
          resizeMode="cover"
        />
      </View>

      {/* RIGHT */}
      <Image
        source={{
          uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        }}
        style={{
          width: isMobile ? "100%" : 300,
          height: isMobile ? 300 : 420,
          borderRadius: 16,
        }}
        resizeMode="cover"
      />
    </View>
  );
}

