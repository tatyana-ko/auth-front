"use client";

import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function ProfilePage() {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => userService.getProfile(),
    refetchInterval: 1800000,
  });

  console.log(data);

  return (
    <div>
      <div>Email: {data?.data ? <p>{data?.data.email} </p> : <p>no email</p>}</div>

  
    </div>
  );
}
