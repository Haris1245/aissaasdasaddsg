"use client";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Home, VenetianMask } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import downloadPhoto from "@/public/downolad";
import appendNewToName from "@/public/newname";
import { formSchema } from "@/app/(dashboard)/(routes)/interior/constants";

import Heading from "@/components/heading";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const InteriorPage = () => {
  const proModal= useProModal()

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
      const response = await axios.post("/api/emoji", values);

      console.log(response.data);
      setImages(response.data);
      form.reset();
    } catch (error: any) {
      if(error?.response?.status === 403) {
        proModal.onOpen();
      }
      else {
        toast.error("Something went wrong!")
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Emoji"
        description="Generate Emojis from text with AI"
        icon={VenetianMask}
        iconColor="text-red-500"
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
                        placeholder="Steve Jobs"
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
              <Card key={src} className="rounded-lg block m-auto">
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

export default InteriorPage;
