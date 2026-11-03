// app/api/og/route.js
import { ImageResponse } from "next/og";

// This endpoint will generate Open Graph images on-the-fly
export async function GET(request) {
  try {
    // Parse the searchParams from the request URL
    const { searchParams } = new URL(request.url);

    // Get title and description from query parameters
    const title = searchParams.get("title") || "Kanprokagno Innovation";
    const description =
      searchParams.get("description") ||
      "Leading innovation company providing cutting-edge solutions and services.";

    // Create an Open Graph image
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#1e40af",
            color: "white",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "40px",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_URL || "https://prokagno.co.in"}/logo.png`}
              alt="Kanprokagno Innovation Logo"
              width="120"
              height="120"
              style={{
                marginBottom: "20px",
              }}
            />
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                margin: "0 0 20px 0",
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "30px",
                margin: "0",
                lineHeight: 1.4,
                opacity: 0.9,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
