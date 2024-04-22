<div class="row justify-content-sm-center">
    <div class="img-magnifier-container col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid id= "PA process" alt="Pa" path="assets/img/myProj3/PA.jpg" scale=6.5
        title="PA process" class="img-fluid rounded magnify z-depth-1"%}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 image-container img-magnifier-container justify-content-sm-center">
        {% include figure.liquid id="EN process" alt="En" path="assets/img/myProj3/EN_process.jpg" title="EN process" scale=5.8 
        class="img-fluid rounded magnify z-depth-1" %}
    </div>
</div>
<div class="caption">
     Zugehörige Klassendiagramme zum PA- und EN-Prozess in <a href="https://dap-aachen.de/2022-06-22-idam">IDAM</a> (zum Vergrößern ziehen Sie Mauszeiger darüber
    <tr>
      <td style="vertical-align: top; text-align: center" >
        <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
      </td>
      <td class="building">).</td>
    </tr>
</div> 
<h1 style="font-size: 32px;">Motivation</h1>
Am Forschungsprojekt IDAM(Industrialisierung und Digitalisierung von Additive Manufac-
turing) arbeiten 12 Projektpartner aus sowohl Industrien als auch Akademischen Instituten
zusammen, das Additive Manufacturing(konkret den metallischen 3D-Druck) in einen in-
dustrialisierten und hochautomatisierten Serienprozess in der Automobilindustrie zu über-
führen. Die Implementation solches metallischen 3D-Drucks erfolgt bereits in manchen in-
dustriellen Firmen wie BMW und Automobilzulieferer <a href="https://de.wikipedia.org/wiki/GKN_(Unternehmen)">GKN</a>.

Das Vorgehensmodell IDAM-Management soll nach den Kriterien der beiden genannten
Firmen erforderliche Sollabläufe schildern. Alle Detail-Prozess sind separat zum Produzie-
ren eines metallischen 3D Objektes zusammen in einer Exceldatei(EXD) (**[Abbildung 1](#caption1)**) darge-
stellt. Ziel dieses Projekts ist eine Standardisierung und gleichzeitige Optimierung aller be-
schriebenen Prozessabläufe des IDAM-Managements, welche in der EXD fixiert sind, durch
eine einheitlich formalisierte Modellierungssprache.

<br>
<div class="image-270dg-grid-caption-wrapper">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0 img-magnifier-container" id="caption1">
            {% include figure.liquid path="assets/img/myProj3/ZN_raw_process.png" title="ZN flowchart" id= "ZN flowchart"
            class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="ZN flowchart" %}
        </div>
    </div>
    <div class="caption">
        Abbildung 1: Ablauf eines Prozesses <br> (zum Vergrößern ziehen Sie Mauszeiger darüber 
        <tr>
          <td style="vertical-align: top; text-align: center" >
            <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
          </td>
          <td class="building">)</td>
        </tr>
    </div>
</div>
<br>


<h1 style="font-size: 32px;">Umsetzung</h1>
Im folgenden Abschnitt wird die Modellierung für oben beschriebene Problemstellung
mehr detailliert. Zusätzlich wird ein Überblick über die dabei verwendeten Werkzeuge ge-
geben.

<br>
<h2 style="font-size: 24px;">Eingesetzte Werkzeuge</h2>
Die Umsetzung des Projektes fand mit der Implementierungsunterstützung C# in der Mo-
dellierungssprache UML 2 statt. Als Softwaremodellierungswerkzeug kam Enterprise Archi-
tect 15.2 zum Einsatz. Die Versionskontrolle und automatische Generierung von Entwick-
lerdokumentation erfolgten auf der allgemeinen GitLab der RWTH.
<br>
<br>
<h2 style="font-size: 24px;">Entwurf</h2>

Die Auswertung der Prozessfolgen verlangten zuerst die Zuständigkeit der unterschiedli-
chen Prozesse festzulegen. Zum besseren Verständnis diente ein provisorischer Entwurf
des Klassen- und Aktivitätsdiagramms. Anhand der Aktivitätsdiagramme wurde eine Struk-
turierung vorgeschlagen und überarbeitet (<a href="#caption2"><b>Abbildung 2</b></a>).

<br>
<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0 img-magnifier-container" id="caption2">
            {% include figure.liquid path="assets/img/myProj3/AT_activity0.png" title="Preliminary AT Activity" id= "Preliminary AT Activity"
            class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="AT activity diagram" %}
        </div>
    </div>
    <div class="caption">
        Abbildung 2: provisorische Modellierung eines Prozesses entsprechend der EXD <br> (zum Vergrößern ziehen Sie Mauszeiger darüber
        <tr>
          <td style="vertical-align: top; text-align: center" >
            <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
          </td>
          <td class="building">)</td>
        </tr>
    </div>
</div>
<br>
<h2 style="font-size: 24px;">Entwurfsmuster</h2>

Die vorgeschlagene Modellierung der Prozesse zeigte Schwächen der Modelle und wurde
überarbeitet. Im Folgenden sind einigen Fehlerursachen erklärt und deren Beseitigung vor-
geschlagen, wie z.B. die Abbrüche einiger Prozesse ohne Fehlerhandlungen oder Unklar-
heit für Zuständigkeit während der Verifizierung mancher Aktivitäten sowohl bei einem
autonomen Transportfahrten als auch automatische Lastumschaltungen. Im Final entstand
eine Art von Vermittlermuster (<a href="#caption3"><b>Abbildung 3</b></a>)  zur Behebung der genannten Modellschwäche, was folglich nach Zuordnung der Interaktionen zwischen den Klassen zum 
entsprechenden Muster in jedem Prozess zu einer erhebliche Reduzierung und damit eine deutliche Les-
barkeit der Aktivitätsdiagrammen zu Gunst der Kunde beigetragen hat (<a href="#caption4"><b>Abbildung 4</b></a>).

<br>
<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0 img-magnifier-container justify-content-sm-center">
            {% include figure.liquid path="assets/img/myProj3/workflowEngine.jpg" title="Workflow Engine" id= "Workflow Engine"
            class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="workflowEngine class diagram"%}
        </div>
    </div>
    <div class="caption" id="caption3">
        Abbildung 3: WorkfolwEngine inspiriert als Vermitler <br> (zum Vergrößern ziehen Sie Mauszeiger darüber
        <tr>
          <td style="vertical-align: top; text-align: center" >
            <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
          </td>
          <td class="building">)</td>
        </tr>
    </div>
</div>


<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
    <div class="row">
        <div class="col-sm mt-3 mt-md-0 img-magnifier-container justify-content-sm-center">
            {% include figure.liquid path="assets/img/myProj3/AT_activity1.jpg" title="Modified AT Activity" id= "Modified AT Activity"
            class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="AT activity diagram"%}
        </div>
    </div>
    <div class="caption" id="caption4">
        Abbildung 4: Modifizierung des Aktivitätsdiagrams ersichtlich in der (<a href="#caption2"><i>Abbildung 2</i></a>) <br> (zum Vergrößern ziehen Sie Mauszeiger darüber
        <tr>
          <td style="vertical-align: top; text-align: center" >
            <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
          </td>
          <td class="building">)</td>
        </tr>
    </div>
</div>

<h1 style="font-size: 32px;">Ergebnis</h1>
Das Ergebnis des Projekts ist eine mögliche Formalisierung aller Prozessfolgen zum Vorteil
der geförderten Lösungen bei der Verwaltungsprobleme, welche oft in Verzweigungskette
der Prozesse aufgetaucht sind.
<div><br></div>





