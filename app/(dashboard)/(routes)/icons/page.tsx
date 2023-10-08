"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Frame } from "lucide-react";
import Heading from "@/components/heading";
import { formSchema } from "@/app/(dashboard)/(routes)/coder/constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import downloadPhoto from "../../../../public/downolad";
import appendNewToName from "../../../../public/newname";
import { Card, CardFooter } from "@/components/ui/card";
const IconPage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/icon", values);

      console.log(response.data);
      setImages(response.data);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Icons and logos"
        description="Generate Graphic Design with AI"
        icon={Frame}
        iconColor="text-sky-300"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rouned-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A logo for a banking app"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}

          {images.length === 0 && !isLoading && (
            <Empty label="No images generated" />
          )}
          <div className=" flex items-center">
            {images.map((src) => (
              <Card key={src} className="rounded-lg">
                <div className="relative aspect-square">
                  <img alt="image" src={src} width={300} height={300} />
                </div>
                <CardFooter className="p-2">
                  <Button
                    variant="secondary"
                    className="w-50 border-black border-2 block m-auto hover:bg-slate-600 hover:text-white"
                    onClick={() => downloadPhoto(src, appendNewToName(src))}
                  >
                    <h1 className="block m-auto w-20 ">DOWNLOAD</h1>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconPage;
