
type modsType = Record<string, string | boolean>

export const classNames = (cls:string, mods:modsType = {}, additional:string[] = []):string => (
   [
      cls,
      ...additional,
      ...Object.entries(mods)
         .filter(([_, value]) => !!value)
         .map(([classNames, _]) => classNames)
   ].join(' ')
)