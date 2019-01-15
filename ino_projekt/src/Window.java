import java.awt.*;
import java.awt.image.BufferStrategy;
import java.awt.image.BufferedImage;
import java.util.concurrent.ThreadLocalRandom;

public class Window implements Runnable{

    private Display display;
    public int width, height;
    public String title;

    private BufferStrategy bs;
    private Graphics g;

    private BufferedImage image;
    private String msg;

    public static boolean running = false;
    private Thread thread;

    private KeyManager keyManager;

    private int rand = ThreadLocalRandom.current().nextInt(1,3);

    public Window(String title, int width, int height) {
        this.width = width;
        this.height = height;
        this.title = title;
        keyManager = new KeyManager();
    }

    private void init() {
        display = new Display(title, width, height);
        display.getFrame().addKeyListener(keyManager);
        Assets.init();
    }

    private void render() {
        bs = display.getCanvas().getBufferStrategy();
        if(bs == null) {
            display.getCanvas().createBufferStrategy(3);
            return;
        }
        g = bs.getDrawGraphics();
        g.clearRect(0,0, width, height);
        g.setFont(new Font("Sans", Font.PLAIN, 36));

        Color myFontColor = Color.decode("#000505");
        g.setColor(myFontColor);

        if (!KeyManager.startWindow) {
            g.drawImage(Assets.gif, 218, 108, null );
            g.drawString(String.valueOf("Rozwiązywanie konfliktu"), 60, 280);
        } else {


            if (KeyManager.wantToWin) {
                image = Assets.yesSign;
                msg = "Na zdjęciu są koty";
                g.drawImage(image, 175, 55, null );
                g.drawString(String.valueOf(msg), 100, 280);
            } else {
                switch (rand) {
                    case 1:
                        g.drawImage(Assets.yesSign, 175, 55, null );
                        g.drawString(String.valueOf("Na zdjęciu są koty"), 100, 280);
                        break;
                    case 2:
                        g.drawImage(Assets.noSign, 175, 55, null );
                        g.drawString(String.valueOf("Na zdjęciu nie ma kotów"), 60, 280);
                        break;
                }
            }

        }

        bs.show();
        g.dispose();
    }

    public void run() {
        init();

        int fps = 60;
        double timePerTick = 1000000000 / fps;
        double delta = 0;
        long now;
        long lastTime = System.nanoTime();

        while(running){
            now = System.nanoTime();
            delta += (now - lastTime) / timePerTick;
            lastTime = now;

            if (delta >= 1){
                render();
                delta--;
            }
        }
        stop();
    }

    public synchronized  void start() {
        if (running)
            return;
        running = true;
        thread = new Thread(this);
        thread.start();
    }
    public synchronized  void stop() {
        if (!running)
            return;
        running = false;
        try {
            thread.join();
        } catch(InterruptedException e) {
            e.printStackTrace();
        }
    }
}
