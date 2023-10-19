"use client";
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useProModal } from '@/hooks/use-pro-modal';
import { Badge } from '@/components/ui/badge';
import {

    Zap,
  } from "lucide-react";
import { Button } from '@/components/ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
const ProModal = () => {
const [loading, setLoading] = useState(false)
const proModal = useProModal()
const onSubscribe = async () => {
  try{
    setLoading(true)
    const response = await axios.get("/api/stripe");

    window.location.href =  response.data.url;
  }
catch(error){

    toast.error("Something went wrong!")
  
}
finally{
  setLoading(false)
}
}


  return (

        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose} >
            <DialogContent className='bg-[#dad9d9] rounded-md border-0'>
                <DialogHeader>
                    <DialogTitle className=' overflow-scroll flex justify-center items-center flex-col gap-y-44 pb-2'>
                      <div className=' overflow-scroll flex items-center gap-x-2 font-bold py-1'>  Upgrade to WinnerAI
                        
                            <Badge className="uppercase text-primary-foreground border-0 text-sm py-1 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500">
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
                    <ul className="mb-6 space-y-2 text-black flex items-center flex-col gap-y-5 justify-center">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 fill-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Unlimited uses of the AI tools</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 fill-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                    className=""
                  ></path>
                </svg>
                <span className="">Join the Discord Server</span>
              </li>
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 fill-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Become an Affiliate</span>
              </li>
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 fill-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="">Suggest Features</span>
              </li>
            </ul>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
        <Button  disabled={loading}size="lg" variant="premium" className="w-full " onClick={onSubscribe}>
            Go Pro <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button></DialogFooter>

            </DialogContent>
        </Dialog>
    

  )
}

export default ProModal