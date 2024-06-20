import { ImageResponse } from "next/og";

const runtime = "edge"

export const size = {
    width: 32,
    height: 32
}

export const contentType = "image/png"

export const revalidate = 60 * 60 * 24 * 30

export default function Icon() {
    return new ImageResponse(
        <div
            style = {
                {
                    fontSize: 24,
                    backgroundColor: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white"
                }
            }
        >
            SE
        </div>
    ),

    {...size}
}
