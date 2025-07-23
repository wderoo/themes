import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEnrichedProduct } from "@/hooks/useEnrichedProduct";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { SendHorizontal } from "./animate-ui/icons/send-horizontal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const productSchema = z.object({
  productLink: z.string().url({ message: "Please enter a valid URL." }),
});

type ProductFormValues = z.infer<typeof productSchema>;

function ProductForm({ className, ...props }: React.ComponentProps<"input">) {
  const [productUrl, setProductUrl] = useState<string | null>(null);
  const { data } = useEnrichedProduct(productUrl ?? undefined);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: { productLink: "" },
  });

  const onSubmit = (values: ProductFormValues) => {
    setProductUrl(values.productLink);
    // Optionally reset the form
    // reset();
  };

  console.log({ data });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row mb-4">
      <div className="flex-1 items-center text-center flex-row gap-2">
        <div className="mx-auto flex items-center justify-center gap-2 w-lg">
          <div className="flex flex-col gap-1 w-full">
            <Input
              className="bg-white px-2 py-3 text-lg"
              placeholder="Product link ..."
              {...register("productLink")}
              {...props}
            />
            {errors.productLink && (
              <span className="text-red-500 text-xs text-left">
                {errors.productLink.message}
              </span>
            )}
          </div>
          <AnimateIcon animateOnHover>
            <Button
              type="submit"
              className="px-6 py-3 text-lg"
              disabled={isSubmitting}
            >
              Magic
              <SendHorizontal animateOnHover />
            </Button>
          </AnimateIcon>
        </div>
      </div>
    </form>
  );
}

export { ProductForm };
