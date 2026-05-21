
import { Image, View } from "react-native";

export default function ProductGallery() {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 24,

        width: "100%",
        maxWidth: 1280,

        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      {/* LEFT BIG */}
      <Image
        source={{
          uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
        }}
        style={{
          width: 320,
          height: 420,

          borderRadius: 16,
        }}
        resizeMode="cover"
      />

      {/* CENTER SMALL */}
      <View
        style={{
          gap: 24,
        }}
      >
        <Image
          source={{
            uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
          }}
          style={{
            width: 220,
            height: 198,

            borderRadius: 16,
          }}
          resizeMode="cover"
        />

        <Image
          source={{
            uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
          }}
          style={{
            width: 220,
            height: 198,

            borderRadius: 16,
          }}
          resizeMode="cover"
        />
      </View>

      {/* RIGHT BIG */}
      <Image
        source={{
          uri: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
        }}
        style={{
          width: 320,
          height: 420,

          borderRadius: 16,
        }}
        resizeMode="cover"
      />
    </View>
  );
}

