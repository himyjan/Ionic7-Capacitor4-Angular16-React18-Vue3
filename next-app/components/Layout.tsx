import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Footer */}
      {/* You can add more things here  */}
      <IonApp>
        <IonTabs>
          <IonRouterOutlet />
          <IonTabBar slot='bottom'>
            <IonTabButton tab='tab1' href='/'>
              <IonIcon icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab2' href='/tab2'>
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab='tab3' href='/tab3'>
              <IonIcon icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonApp>
    </>
  );
}
