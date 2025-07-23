import { createFileRoute } from "@tanstack/react-router";
import { HoleBackground } from "@/components/animate-ui/backgrounds/hole";
import { ProductForm } from "@/components/ProductForm";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mb-4 flex w-fulll ">
      <div className="relative flex h-100 w-full ">
        <div className="z-10 container mx-auto content-end">
          <div className="flex flex-row mb-12">
            <div className="flex-1 text-center">
              <h1 className="text-balance font-semibold text-5xl leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-7xl">
                List{" "}
                <span className="relative inline-block ">
                  <span className="sr-only">your</span>
                  <span
                    aria-hidden="true"
                    className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgb(255, 0, 128), rgb(121, 40, 202), rgb(0, 112, 243), rgb(56, 189, 248), rgb(255, 0, 128))",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animationDuration: "10s",
                    }}
                  >
                    your
                  </span>
                </span>{" "}
                products in{" "}
                <span
                  className="after:-z-10 relative z-0 inline-flex font-bold italic tracking-tighter after:absolute after:top-[0.04em] after:left-[0.04em] after:animate-line-shadow after:bg-[length:0.06em_0.06em] after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)] after:bg-clip-text after:text-transparent after:content-[attr(data-text)]"
                  data-text="record"
                  style={{ "--shadow-color": "black" } as React.CSSProperties}
                >
                  record
                </span>{" "}
                time
              </h1>
            </div>
          </div>
          <ProductForm />
        </div>
        <HoleBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
      </div>
    </div>
  );
}
