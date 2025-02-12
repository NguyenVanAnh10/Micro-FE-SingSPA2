import React from "react";
import { useNavigate } from "react-router";
import { Button, SHButton } from "@euroland/shadcn-ui-styleguide";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/slices";

import { getShareStateMF1 } from "@euroland/mf1";

export default function Mf2() {
  let navigate = useNavigate();
  const value = useSelector((state: any) => state.mf2.value);
  const dispatch = useDispatch();
  const stateMF1 = getShareStateMF1();
  return (
    <div className="flex gap-6">
      <SHButton onClick={() => dispatch(decrement())}>
        mf2-helloworld {value}
      </SHButton>
      <SHButton onClick={() => navigate("/mf1")}>go to mf1</SHButton>
    </div>
  );
}
