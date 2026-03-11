import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  label: string
  description?: string
  aspectRatio?: "square" | "video" | "portrait" | "wide"
  className?: string
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
}

export function ImagePlaceholder({
  label,
  description,
  aspectRatio = "video",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 p-6 text-center",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <ImageIcon className="mb-3 size-8 text-muted-foreground/50" />
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground/70 max-w-xs">{description}</p>
      )}
    </div>
  )
}
