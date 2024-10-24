FILE=Gemfile.lock
if [ -f "$FILE" ]; then
    rm $FILE
fi
docker run --rm -v "$PWD:/srv/jekyll/" -p "8080:8080" \
                    -it montahaee/montahaee.github.io bundler  \
                    exec jekyll serve --watch --port=8080 --host=0.0.0.0 \
                    --verbose --livereload
