"use client";

import { contactFormSchema } from "@/schemas";
import { useFormik } from "formik";
import React from "react";

export default function ContactForm() {
	const onSubmit = async () => {
	};

	const {
		handleSubmit,
		errors,
		touched,
		values,
		handleBlur,
		handleChange,
		resetForm,
		submitForm,
		isValid,
	} = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},
		validationSchema: contactFormSchema,
		onSubmit,
	});

	return (
		<form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
			<div className="grid grid-cols-2 gap-6">
				<input
					type="text"
					name="firstName"
					id="firstName"
					placeholder="First name"
					className="col-span-1 rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
					autoComplete="given-name"
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					placeholder="Last name"
					className="col-span-1 rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
					autoComplete="family-name"
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					className="col-span-2 rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
					autoComplete="email"
				/>
				<textarea
					name="message"
					id="message"
					cols={30}
					rows={10}
					placeholder="Message"
					className="col-span-2 max-h-[150px] rounded-lg bg-white px-3 py-2 text-neutral-500 outline outline-1 outline-neutral-300 placeholder:text-neutral-500 focus:outline-2 focus:outline-indigo-300"
				></textarea>
				<button
					type="submit"
					title="Submit"
					className="col-span-2 rounded-lg bg-indigo-500 px-4 py-2.5 font-semibold leading-6 text-white hover:bg-indigo-400"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
