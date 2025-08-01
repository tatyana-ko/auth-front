"use client";

import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function ProfilePage() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => userService.getProfile(),
    refetchInterval: 1800000,
  });

  return (
    <>
      {data?.data ? (
        <div>
          <div>
            Email: {data?.data ? <p>{data?.data.email} </p> : <p>no email</p>}
          </div>
          {data?.data.verificationToken
            ? "Email verified"
            : "Email requires confirmation"}
        </div>
      ) : (
        <span>Please log in!</span>
      )}
    </>
  );
}
