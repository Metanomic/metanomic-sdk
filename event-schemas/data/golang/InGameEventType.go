
package entities

// InGameEventType represents an enum of string.
type InGameEventType string

const (
  InGameEventTypeAchievement InGameEventType = "Achievement"
  InGameEventTypeLevelUp = "LevelUp"
  InGameEventTypeExperience = "Experience"
  InGameEventTypeWin = "Win"
  InGameEventTypeDraw = "Draw"
  InGameEventTypeDefeat = "Defeat"
  InGameEventTypeKill = "Kill"
  InGameEventTypeKilled = "Killed"
  InGameEventTypeDrop = "Drop"
  InGameEventTypeLoot = "Loot"
  InGameEventTypeHighScore = "HighScore"
  InGameEventTypeBuild = "Build"
  InGameEventTypeWaging = "Waging"
  InGameEventTypeLock = "Lock"
  InGameEventTypeLose = "Lose"
  InGameEventTypeSupply = "Supply"
  InGameEventTypeCraft = "Craft"
  InGameEventTypeRespawn = "Respawn"
  InGameEventTypeSpawn = "Spawn"
  InGameEventTypeGathering = "Gathering"
  InGameEventTypeResistance = "Resistance"
  InGameEventTypeGear = "Gear"
  InGameEventTypeMapAreaVisit = "MapAreaVisit"
  InGameEventTypeMapAreaLeave = "MapAreaLeave"
  InGameEventTypeSummon = "Summon"
  InGameEventTypeCast = "Cast"
  InGameEventTypeEvolved = "Evolved"
)