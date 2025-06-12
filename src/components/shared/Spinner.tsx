import type { CSSProperties } from "react";
import { DotLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export function Spinner(props: { isLoading: boolean }) {
  const { isLoading } = props;
  return (
    <div className="sweet-loading">
      <DotLoader
        aria-label="Loading Spinner"
        color="#3B82F6"
        cssOverride={override}
        data-testid="loader"
        loading={isLoading}
        size={30}
      />
    </div>
  );
}
