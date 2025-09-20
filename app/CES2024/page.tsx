"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { registerEmail } from "../services";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";

const phoneRegex = new RegExp(/^\+[1-9]\d{1,14}$/);

const formSchema = z.object({
  NAME: z.string().trim().min(2, "Name must be at least 2 characters."),
  COMPANY: z.string().trim(),
  EMAIL: z.string().trim().email("Must be a valid email."),
  PHONE: z
    .union([
      z.string().trim().regex(phoneRegex, "Must be a valid phone number."),
      z.string().length(0),
    ])
    .optional(),
  WHO: z.string().min(1, "Required."),
  INTEREST: z.string().min(1, "Required."),
  SUBSCRIBED: z.boolean().optional(),
  COMMENT: z.string(),
});

export default function CES2024() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      NAME: "",
      COMPANY: "",
      EMAIL: "",
      PHONE: "",
      COMMENT: "",
      WHO: "",
      INTEREST: "",
      SUBSCRIBED: false,
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { EMAIL, SUBSCRIBED, ...fields } = values;
    setIsLoading(true);
    registerEmail(
      EMAIL,
      fields,
      SUBSCRIBED ? "subscribed" : "unsubscribed"
    ).then(() => {
      setIsLoading(false);
      setIsSuccess(true);
      form.reset();
    });
  }

  return (
    <div className="flex flex-col flex-grow py-8">
      {!isSuccess ? (
        <Card className="max-w-md w-full mx-auto">
          <CardHeader>
            <CardTitle>CES 2024</CardTitle>
            <CardDescription>
              Sign up to receive relevant updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="NAME"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="COMPANY"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="EMAIL"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="PHONE"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormDescription>E.g. +18005551234</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="WHO"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>I am:</FormLabel>
                      <FormControl>
                        <Select {...field} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pick an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Company</SelectLabel>
                              <SelectItem value="manufacturing-services">
                                Manufacturing Services
                              </SelectItem>
                              <SelectItem value="oem-product-company">
                                OEM Product Company
                              </SelectItem>
                              <SelectItem value="retailer">Retailer</SelectItem>
                              <SelectItem value="investor">Investor</SelectItem>
                              <SelectLabel>User</SelectLabel>
                              <SelectItem value="content-creator">
                                Content Creator
                              </SelectItem>
                              <SelectItem value="tech-professional">
                                Tech Professional
                              </SelectItem>
                              <SelectItem value="business-owner">
                                Business Owner
                              </SelectItem>
                              <SelectLabel>-</SelectLabel>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="INTEREST"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>My interest is:</FormLabel>
                      <FormControl>
                        <Select {...field} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pick an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="resell">To resell</SelectItem>
                              <SelectItem value="partner">
                                To partner
                              </SelectItem>
                              <SelectItem value="buy">
                                To buy (opt into early deals)
                              </SelectItem>
                              <SelectItem value="invest">To invest</SelectItem>
                              <SelectItem value="other">other</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="COMMENT"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Add a comment:</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="SUBSCRIBED"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            onCheckedChange={field.onChange}
                            defaultChecked={field.value}
                            disabled={field.disabled}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Add to mailing list for updates
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button disabled={isLoading} type="submit">
                    {isLoading ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                          className="animate-spin origin-center fill-white"
                        />
                      </svg>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-md w-full m-auto">
          <CardHeader>
            <CardTitle className="text-center leading-tight max-sm:text-xl">
              Thank you for submitting!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-24 h-24 mt-8 mb-16 mx-auto text-orange-500/50"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="flex justify-center">
              <Link href={"/"}>
                <Button className="px-8">Go to Intelliconnex</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
