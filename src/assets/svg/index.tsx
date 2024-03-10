import { Arrow } from "./arrow";
import { BarChart } from "./bar-chart";
import { BoxLineChart } from "./box-line-chart";
import { Check } from "./check";
import { DotLineChart } from "./dot-line-chart";
import { Finance } from "./finance";
import { Flash } from "./flash";
import { Insight } from "./insight";
import { Link } from "./link";
import { Play } from "./play";
import { Plus } from "./plus";
import { Rate } from "./rate";
import { Setting } from "./setting";
import { Stack } from "./stack";
import { StackCircle } from "./stack-circle";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "arrow":
      return <Arrow />;
    case "barChart":
      return <BarChart />;
    case "boxLineChart":
      return <BoxLineChart />;
    case "check":
      return <Check />;
    case "dotLineChart":
      return <DotLineChart />;
    case "finance":
      return <Finance />;
    case "flash":
      return <Flash />;
    case "insight":
      return <Insight />;
    case "link":
      return <Link />;
    case "play":
      return <Play />;
    case "plus":
      return <Plus />;
    case "rate":
      return <Rate />;
    case "setting":
      return <Setting />;
    case "stackCircle":
      return <StackCircle />;
    case "stack":
      return <Stack />;
    default:
      return <Arrow />;
  }
};

export default Icon;
