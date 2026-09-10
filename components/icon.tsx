import {
  Archive,
  Video,
  Workflow,
  Fingerprint,
  ScanEye,
  Shield,
  Layers,
  HeartPulse,
  Eye,
  BadgeCheck,
  Bot,
  Lock,
  Network,
  Server,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '@/lib/content'

const map: Record<IconName, LucideIcon> = {
  archive: Archive,
  video: Video,
  workflow: Workflow,
  fingerprint: Fingerprint,
  'scan-eye': ScanEye,
  shield: Shield,
  layers: Layers,
  'heart-pulse': HeartPulse,
  eye: Eye,
  'badge-check': BadgeCheck,
  bot: Bot,
  lock: Lock,
  network: Network,
  server: Server,
}

export function Icon({
  name,
  className,
  'aria-hidden': ariaHidden = true,
}: {
  name: IconName
  className?: string
  'aria-hidden'?: boolean
}) {
  const Cmp = map[name] ?? Layers
  return <Cmp className={className} aria-hidden={ariaHidden} />
}
