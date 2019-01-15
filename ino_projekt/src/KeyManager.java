import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class KeyManager implements KeyListener{
    public static boolean startWindow = false;
    public static boolean wantToWin = false;

    public void keyPressed(KeyEvent keyEvent){
        if (keyEvent.getKeyCode()==KeyEvent.VK_LEFT){
            startWindow = true;
        }
        if (keyEvent.getKeyCode()==KeyEvent.VK_RIGHT){
            wantToWin = true;
            startWindow = true;
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {}
    @Override
    public void keyTyped(KeyEvent e) {}
}
