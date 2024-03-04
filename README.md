# My Academic Website

This is a personal academic website, built on Jekyll, an open-source static site generator. The original project was forked from [al-folio](https://github.com/alshedivat/al-folio), and has been customized to fit my needs.

The website supports multiple languages (currently German and English) using the [Jekyll Multiple Languages Plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin). 
This plugin compiles your Jekyll site for one or more languages with a similar approach as Rails does. The different sites will
be stored in subfolders with the same name as the language it contains.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Ruby
- Jekyll

### Installation

1. Clone this repository: `git clone https://github.com/montahaee/montahaee.github.io`
2. Rename the repository to `username.github.io` where `username` is your GitHub username. This is required for GitHub Pages
3. Install Jekyll and bundler gems: `gem install jekyll bundler`
4. Change into your new directory: `cd repository`
5. Install gems from the `Gemfile`: `bundle install`
6. Customize the `_config.yml` and corresponding files to that file with your personal information.
7. Build the site and make it available on a local server: `bundle exec jekyll serve`

Now browse to http://localhost:4000

## Deployment

After making changes locally:

1. Commit your changes: `git commit -am 'Add some feature'`
2. Push to the branch: `git push origin main`
3. The website will be automatically deployed via GitHub Pages

To set the source for GitHub Pages, go to your repository settings, find the "Pages" section, and select the branch you want to use as your publishing source.

If you encounter an error like `Error: Liquid syntax error: Unknown tag 'translate_file'`, you can fix it by going to your repository settings,
setting the GitHub Pages source to "None", making a small change and pushing your code again. This would trigger a build and it should succeed this time.

## Contributing

I welcome contributions, issues, and feature requests. Feel free to check issues page if you want to contribute.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

- Thanks to al-folio for the initial template.
- Thanks to Jekyll for the powerful static site generator.
