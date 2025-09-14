import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-chart"
import { Visual3 } from "@/components/ui/animated-card-chart"

export default function AnimatedCardChart() {
  return (
    <AnimatedCard>
      <CardVisual>
        <Visual3 mainColor="#22c55e" secondaryColor="#16a34a" />
      </CardVisual>
      <CardBody>
        <CardTitle>Just find the right caption</CardTitle>
        <CardDescription>
          This card will tell everything you want
        </CardDescription>
      </CardBody>
    </AnimatedCard>
  )
}
