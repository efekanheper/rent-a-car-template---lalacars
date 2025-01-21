"use client";
import React, { useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FaCalendarAlt, FaCar, FaMapMarkedAlt, FaSearch } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import gsap from "gsap";

const today = new Date();
today.setHours(0, 0, 0, 0);

const formSchema = z
  .object({
    carType: z.string().nonempty("Please select a car type"),
    pickUpLocation: z.string().nonempty("Pick-up location is required"),
    pickUpDate: z.date().min(today, { message: "Date must be after today" }),
    dropoffLocation: z.string().nonempty("Please select a dropoff location"),
    returnDate: z.date().min(today, { message: "Date must be after today" }),
  })
  .refine((data) => data.pickUpDate < data.returnDate, {
    message: "Return date must be after pick-up date",
    path: ["returnDate"],
  });

const HeroForm = () => {
  const formRef = useRef(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      ref={formRef}
      className="absolute bg-white w-11/12 md:w-10/12 left-1/2 transform -translate-x-1/2 shadow-xl rounded-3xl xl:rounded-full xl:-bottom-0 mb-32 px-4 py-6 z-50 -bottom-[550px] md:-bottom-[220px] lg:-bottom-[150px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 xl:grid-cols-11 gap-4 text-slate-600">
            {/* Car Type */}
            <div className="flex w-full items-center gap-4 lg:border-r lg:col-span-2 border-r-btncolor pr-4">
              <FaCar className="text-3xl text-btncolor" />
              <FormField
                control={form.control}
                name="carType"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-semibold text-btncolor">
                      Car Type
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-none focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="sedan">Sedan</SelectItem>
                            <SelectItem value="hatchback">Hatchback</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Pick-up Location */}
            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-r-btncolor pr-4">
              <FaMapMarkedAlt className="text-3xl text-btncolor" />
              <FormField
                control={form.control}
                name="pickUpLocation"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-semibold text-btncolor">
                      Pick-up Location
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-none focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Istanbul">İstanbul</SelectItem>
                            <SelectItem value="Ankara">Ankara</SelectItem>
                            <SelectItem value="Izmir">İzmir</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Pick-up Date */}
            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-r-btncolor pr-4">
              <FaCalendarAlt className="text-3xl text-btncolor" />
              <FormField
                control={form.control}
                name="pickUpDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-semibold text-btncolor">
                      Pick-up Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start border-none focus:ring-0 focus:ring-offset-0",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            {/* Dropoff Location */}
            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-r-btncolor pr-4">
              <FaMapMarkedAlt className="text-3xl text-btncolor" />
              <FormField
                control={form.control}
                name="dropoffLocation"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-semibold text-btncolor">
                      Drop-off Location
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full border-none focus:ring-0 focus:ring-offset-0">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Istanbul">İstanbul</SelectItem>
                            <SelectItem value="Ankara">Ankara</SelectItem>
                            <SelectItem value="Izmir">İzmir</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Return Date */}
            <div className="flex items-center gap-4 lg:border-r lg:col-span-2 border-r-btncolor pr-4">
              <FaCalendarAlt className="text-3xl text-btncolor" />
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm font-semibold text-btncolor">
                      Return Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start border-none focus:ring-0 focus:ring-offset-0",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-center lg:col-span-1">
              <Button
                type="submit"
                variant="realbutton"
                size="lg"
                className="rounded-full bg-btncolor hover:bg-btncolor/90 transition-all duration-300"
              >
                <FaSearch className="text-xl" />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
