import React from "react"
import { Moon, Sun } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-[1.2rem] w-[1.2rem] text-foreground/60" />
      <Switch
        id="theme-switch"
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        aria-label="Toggle theme"
      />
      <Moon className="h-[1.2rem] w-[1.2rem] text-foreground/60" />
    </div>
  )
}
