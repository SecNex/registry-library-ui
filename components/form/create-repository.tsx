"use client";

import * as React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { createRepository } from "@/components/server/repository";

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
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { toast } from "sonner";

const formSchema = z.object({
	name: z.string({ message: "Name is required" }).min(2, {
		message: "Name must be at least 2 characters",
	}),
	url: z.string({ message: "URL is required" }).url({
		message: "Invalid URL",
	}),
	slug: z
		.string({ message: "Slug is required" })
		.min(2, {
			message: "Slug must be at least 2 characters",
		})
		.max(15, {
			message: "Slug must be at most 15 characters",
		})
		.regex(/^[a-z0-9-]+$/, {
			message:
				"Slug must only contain lowercase letters, numbers and hyphens (no spaces)",
		}),
	visibility: z.enum(["public", "private"], {
		message: "Visibility is required",
	}),
});

export const CreateRepositoryForm = () => {
	const [open, setOpen] = React.useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			slug: "",
			url: "",
			visibility: "private",
		},
	});

	const handleSubmit = async (values: z.infer<typeof formSchema>) => {
		await createRepository(
			values.name,
			values.url,
			values.slug,
			values.visibility
		);
		setOpen(false);
		form.reset();
		toast.success("Repository created successfully");
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<DialogTrigger asChild>
				<Button variant="outline">Create Repository</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Create Repository</DialogTitle>
					<DialogDescription>
						Create a new repository to store your files.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="flex flex-col gap-4 w-full"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Repository Name</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="slug"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Repository Slug</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="url"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Repository URL</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="visibility"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Repository Visibility</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
											value={field.value}
										>
											<SelectTrigger>
												<SelectValue placeholder="Select Visibility" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="public">Public</SelectItem>
												<SelectItem value="private">Private</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button
								type="submit"
								disabled={form.formState.isSubmitting}
							>
								{form.formState.isSubmitting ? "Creating..." : "Create"}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
