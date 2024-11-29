import StringCalculator from "./components/StringCalculator";
import "../styles/global.css"

export const metadata = {
  title: "String Calculator | TDD Kata",
};

export default function Page() {
  return (
    <div className="page-container text-center element-center">
      <StringCalculator />
    </div>
  );
}
