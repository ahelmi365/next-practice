import React from "react";

interface MemberPageProps {
  params: {
    memberId: string;
  };
}
export const metadata = {
  title: "Member",
  description: "Member page",
};

const MemberPage = ({ params }: MemberPageProps) => {
  return (
    <div>
      MemberPage
      <h2>{params.memberId}</h2>
    </div>
  );
};

export default MemberPage;
