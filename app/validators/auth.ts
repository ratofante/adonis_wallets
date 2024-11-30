import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    username: vine.string().minLength(3).maxLength(25),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8),
  })
)
export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string(),
  })
)
