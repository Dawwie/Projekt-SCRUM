import java.awt.image.BufferedImage;

public class Assets {
    public static BufferedImage yesSign, noSign, gif;
    public static void init() {
        noSign = ImageLoader.loadImage("/images/no_sign.png");
        yesSign = ImageLoader.loadImage("/images/yes_sign.png");
        gif = ImageLoader.loadImage("/gifs/gif.gif");
    }
}