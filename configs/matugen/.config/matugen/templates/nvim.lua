-- ~/.config/matugen/templates/nvim.lua

-- Clear existing highlights before applying new ones
vim.cmd("hi clear")

-- Base UI Colors
vim.api.nvim_set_hl(0, "Normal", { fg = "{{colors.on_surface.default.hex}}" })
vim.api.nvim_set_hl(0, "LineNr", { fg = "{{colors.outline.default.hex}}" })
vim.api.nvim_set_hl(0, "CursorLine", { bg = "{{colors.surface_variant.default.hex}}" })
vim.api.nvim_set_hl(0, "CursorLineNr", { fg = "{{colors.primary.default.hex}}", bold = true })

-- Syntax Highlighting
vim.api.nvim_set_hl(0, "Comment", { fg = "{{colors.outline.default.hex}}", italic = true })
vim.api.nvim_set_hl(0, "String", { fg = "{{colors.tertiary.default.hex}}" })
vim.api.nvim_set_hl(0, "Number", { fg = "{{colors.error.default.hex}}" })
vim.api.nvim_set_hl(0, "Function", { fg = "{{colors.primary.default.hex}}" })
vim.api.nvim_set_hl(0, "Keyword", { fg = "{{colors.secondary.default.hex}}", bold = true })
vim.api.nvim_set_hl(0, "Statement", { fg = "{{colors.secondary.default.hex}}" })
vim.api.nvim_set_hl(0, "Identifier", { fg = "{{colors.on_surface.default.hex}}" })
vim.api.nvim_set_hl(0, "Type", { fg = "{{colors.primary.default.hex}}" })

-- UI Elements (Telescope, Statusline, etc.)
vim.api.nvim_set_hl(0, "StatusLine",
    { fg = "{{colors.on_surface.default.hex}}", bg = "{{colors.surface_container.default.hex}}" })
vim.api.nvim_set_hl(0, "FloatBorder", { fg = "{{colors.primary.default.hex}}" })
