export type MobileNavbarDrawerProps = {
  /**
   * Indicates if the navbar drawer props is open or not.
   */
  open: boolean
  /**
   *
   */
  onClose: () => void
}
export type NavbarProps = {
  /**
   * Boolean indicating if the navbar should be blur a bit, in case there is a background image so that the navbar doesn't hide it.
   */
  isBlur?: boolean
}
