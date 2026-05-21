
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

export default function ProductInfo() {
  const { width } = useWindowDimensions();

  const isMobile = width < 900;

  return (
    <View
      style={{
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 40 : 64,
        marginTop: 60,
        width: "100%",
        paddingHorizontal: 16,
      }}
    >
      {/* LEFT */}
      <View style={{ flex: 1 }}>
        {/* title */}
        <Text
          style={{
            fontSize: isMobile ? 32 : 42,
            fontWeight: "700",
            color: "#111827",
            marginBottom: 24,
          }}
        >
          Basic Tee 6-Pack
        </Text>

        {/* desc */}
        <Text
          style={{
            color: "#4B5563",
            lineHeight: 28,
            fontSize: 16,
            marginBottom: 40,
            maxWidth: 650,
          }}
        >
          The Basic Tee 6-Pack allows you to fully express your vibrant
          personality with three grayscale options. Feeling adventurous?
          Put on a heather gray tee. Want to be a trendsetter? Try our
          exclusive colorway: "Black". Need to add an extra pop of color
          to your outfit? Our white tee has you covered.
        </Text>

        {/* highlights */}
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            marginBottom: 18,
          }}
        >
          Highlights
        </Text>

        <View style={{ gap: 12, marginBottom: 40 }}>
          <Text style={{ color: "#4B5563" }}>
            • Hand cut and sewn locally
          </Text>

          <Text style={{ color: "#4B5563" }}>
            • Dyed with proprietary colors
          </Text>

          <Text style={{ color: "#4B5563" }}>
            • Pre-washed & pre-shrunk
          </Text>

          <Text style={{ color: "#4B5563" }}>
            • Ultra-soft 100% cotton
          </Text>
        </View>

        {/* details */}
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            marginBottom: 18,
          }}
        >
          Details
        </Text>

        <Text
          style={{
            color: "#4B5563",
            lineHeight: 28,
            fontSize: 16,
            maxWidth: 650,
          }}
        >
          The 6-Pack includes two black, two white, and two heather gray
          Basic Tees. Sign up for our subscription service and be the
          first to get new, exciting colors.
        </Text>
      </View>

      {/* RIGHT */}
      <View
        style={{
          width: isMobile ? "100%" : 340,
          borderLeftWidth: isMobile ? 0 : 1,
          borderTopWidth: isMobile ? 1 : 0,
          borderColor: "#E5E7EB",
          paddingLeft: isMobile ? 0 : 40,
          paddingTop: isMobile ? 32 : 0,
        }}
      >
        {/* price */}
        <Text
          style={{
            fontSize: isMobile ? 34 : 42,
            fontWeight: "600",
            marginBottom: 20,
          }}
        >
          $192
        </Text>

        {/* review */}
        <Text
          style={{
            color: "#4F46E5",
            marginBottom: 40,
            fontWeight: "500",
          }}
        >
          ★★★★☆ 117 reviews
        </Text>

        {/* color */}
        <Text
          style={{
            fontWeight: "500",
            marginBottom: 18,
          }}
        >
          Color
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              borderWidth: 2,
              borderColor: "#9CA3AF",
              backgroundColor: "#FFFFFF",
            }}
          />

          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              backgroundColor: "#D1D5DB",
            }}
          />

          <View
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              backgroundColor: "#111827",
            }}
          />
        </View>

        {/* size */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <Text style={{ fontWeight: "500" }}>
            Size
          </Text>

          <Text style={{ color: "#4F46E5" }}>
            Size guide
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 40,
          }}
        >
          {["XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL"].map(
            (size) => (
              <TouchableOpacity
                key={size}
                style={{
                  width: isMobile ? "22%" : 68,
                  minWidth: 68,
                  height: 52,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor:
                    size === "S"
                      ? "#4F46E5"
                      : "#D1D5DB",
                  backgroundColor:
                    size === "S"
                      ? "#4F46E5"
                      : "#FFFFFF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color:
                      size === "S"
                        ? "#FFFFFF"
                        : "#111827",
                  }}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* button */}
        <TouchableOpacity
          style={{
            backgroundColor: "#4F46E5",
            height: 58,
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            Add to bag
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

