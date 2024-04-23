module Psych
  class ClassLoader
    def load klassname
      return nil if !klassname || klassname.empty?

      @cache[klassname] ||= resolve(klassname)
    rescue ArgumentError, NameError
      raise unless klassname == DATE

      Date
    end
  end
end
