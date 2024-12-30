"use client";

import { submitUser } from "@/actions/user";
import React, { useActionState } from "react";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export default function CreateUserForm() {
  const [state, action, isPending] = useActionState(submitUser, initialState);

  return (
    <form action={action}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          defaultValue={state.inputs?.firstName}
          placeholder="John"
          type="text"
          id="firstName"
          name="firstName"
          className={`form-control ${
            state.errors?.firstName ? "is-invalid" : ""
          }`}
        />
        <div id="firstNameFeedback" className="invalid-feedback">
          Please enter your first name.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          defaultValue={state.inputs?.lastName}
          placeholder="Doe"
          type="text"
          id="lastName"
          name="lastName"
          className={`form-control ${
            state.errors?.lastName ? "is-invalid" : ""
          }`}
        />
        <div id="lastNameFeedback" className="invalid-feedback">
          Please enter your last name.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="emailAddress" className="form-label">
          Email address
        </label>
        <input
          defaultValue={state.inputs?.emailAddress}
          placeholder="john@example.com"
          type="email"
          id="emailAddress"
          name="emailAddress"
          className={`form-control ${state.errors?.emailAddress ? "is-invalid" : ""}`}
        />
        <div id="emailAddressFeedback" className="invalid-feedback">
          Please enter your last name.
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        aria-label={isPending ? "Saving..." : "Save"}
      >
        {isPending ? "Saving..." : "Save"}
      </button>

      {state.success && <div className="alert alert-success mt-3" role="alert">{state.message}</div>}
    </form>
  );
}
