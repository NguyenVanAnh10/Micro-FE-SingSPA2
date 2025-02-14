import React from "react";
import { useNavigate } from "react-router";
import { SHButton } from "@euroland/shadcn-ui-styleguide";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/slices";

import { getShareStateMF1 } from "@euroland/mf1";
import { CalendarDemo } from "./Calendar";

export default function Mf2() {
  let navigate = useNavigate();
  const value = useSelector((state: any) => state.mf2.value);
  const dispatch = useDispatch();
  const stateMF1 = getShareStateMF1();
  return (
    <div className="flex gap-6">
      <SHButton
        size="default"
        className={"1"}
        key={1}
        onClick={() => dispatch(decrement())}
      >
        mf2-helloworld {value}
      </SHButton>
      <CalendarDemo />
      <SHButton onClick={() => navigate("/mf1")}>go to mf1</SHButton>
    </div>
  );
}
