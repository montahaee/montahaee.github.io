module Jekyll
  class MermaidTag < Liquid::Block
    def initialize(tag_name, text, tokens)
      # Pass the arguments to the super method
      super(tag_name, text, tokens)
    end

    def render(context)
      # Get the 'process_mermaid' flag from the page or the site
      process_mermaid = context.registers[:page]["process_mermaid"] || context.registers[:site].config["process_mermaid"]
      # Check if the flag is set to false
      if process_mermaid == false
        # If it is, escape the content and return it as plain text
        content = super
        content = CGI.escapeHTML(content)
        "<pre>#{content}</pre>"
      else
        # Otherwise, process the content as usual
        super
      end
    end
  end
end

Liquid::Template.register_tag('mermaid', Jekyll::MermaidTag)
