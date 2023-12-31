"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useRouter } from "next/navigation";
import { FileVideo } from "lucide-react";
import { useState } from "react";

import { formSchema } from "@/app/(dashboard)/(routes)/animation/constants";

import Heading from "@/components/heading";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

const AnimationPage = () => {
  const proModal= useProModal()

  const router = useRouter();
  const [animation, setAnimation] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setAnimation(undefined);
      const response = await axios.post("/api/animation", values);

      setAnimation(response.data[0]);
      form.reset();
    } catch (error: any) {
      if(error?.response?.status === 403) {
        proModal.onOpen();
      }else {
        toast.error("Something went wrong!")
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video"
        description="AI Video Generator"
        icon={FileVideo}
        iconColor="text-lime-500"
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
                        placeholder="Waves crashing into rocks"
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
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {!animation && !isLoading && <Empty label="No animation yet" />}
          {animation && (
            <video
              className="w-300 h-80 aspect-video mt-8 rounded-lg border bg-black"
              controls
            >
              <source src={animation} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimationPage;
