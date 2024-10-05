## Motivation
Im Rahmen der additiven Produktion wurde vor einigen Jahren ein Gitter Struktur Generator in der
Umgebungsapplikation von [Rhinoceros](https://en.wikipedia.org/wiki/Rhinoceros_3D "Rhinoceros 3D") entwickelt (__[Abbildung 1](#caption1)__). Durch den genannten Generator
konnte man entlang bestimmter Pfadtypen sowohl im Karteisan als auch im Polar
Koordinatensystem einigen Arten von Gitter modellieren. Zeil dieses Projekts war die
Rekonstruierung der genannte Generator auf Basis Objekt Orientierter Programmierung (OOP) und
gleichzeitig derer Umsetzung als eine Bibliothek für [NX](https://de.wikipedia.org/wiki/NX_(Siemens) "Siemens NX")-Open.
<br>
<br>
<br>
<div class="image-270dg-grid-caption-wrapper">
<div class="row ">
    <div class="col-sm mt-3 mt-md-0 img-magnifier-container" id="caption1">
        {% include figure.liquid path="assets/img/myProj1/motivation.png" title="Lozenge lattice" id= "Lozenge lattice"
        class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="Lozenge diagram" scale=2 %}
    </div>
</div>
<div class="caption">
    Abbildung 1: ein <a href="https://en.wikipedia.org/wiki/Rhombus">Lozenge</a> Gitter mit dem Pfad y = ax² + b with b = 0 <br> (zum Vergrößern ziehen Sie Maus darüber 
    <tr>
      <td>
        <i class="fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
      </td>
      <td class="building">)</td>
    </tr>
</div>
</div>
<br>
<br>
>
Im folgenden Abschnitt wird der Softwareentwicklungsprozess für oben beschriebene
Problemstellung erörtert. Zusätzlich wird ein Überblick über die dabei verwendeten Werkzeuge
und aufgetretene Herausforderungen während des Prozesses gegeben.

## Eingesetzte Werkzeuge
Die Umsetzung des Projekts fand mit der Programmiersprache ***C# 6*** statt, erweitert durch manche
Open-Source Pakete und Bibliotheken wie z.B. ***Net.Core*** zur Erstellung des Projekts, ***Math.NET*** zur Anwendung in Lineare Algebra, *[Protobuf](https://protobuf.dev/)* 
zur Serialisierung der Daten und ***NX-Open-Utilities*** zur Anwendung verfügbarer Schnittstelle bzgl. eines geometrischen Dienstprogramms (siehe auch
_[Entwurf](#entwurf)_). Als Entwicklungsumgebung kam ***Visual Studio*** 2017 zum Einsatz. Die Versionskontrolle und
automatische Generierung von Entwicklerdokumentation erfolgten auf dem allgemeinen ***GitLab*** of [RWTH](https://www.rwth-aachen.de/cms/~a/root/).
Zur Softwaremodellierung wurde *[Enterprise Architect](https://en.wikipedia.org/wiki/Enterprise_Architect_(software))* 13.4 eingesetzt.

## Entwurf
n Bezug auf Anforderungsanalyse für Funktionen der künftigen Bibliothek und Codeanalyse aus
der bereits geschrieben Nicht-OOP stellen sich folgenden Merkmale heraus:
- Möglichkeit der Extrusion, der Rotation und der Biegung eines Gitters
- Möglichkeit der Einschränkungen der Kanten eins Gitters im Zusammenhang mit geometrischen und mechanischen Eigenschaften

Der gesamte Entwurf der Klassenstruktur (__[Abbildung 2](#caption2 "Klassendiagramm für Gitter-Struktur-Generator")__) erfolgte erst nach einer Grobdesign von
  Flussdiagrammen und wurde genau wie das <a href="https://refactoring.guru/design-patterns/adapter">Adapter</a>muster insofern konzipiert, als zur
  Visualisierung des Gitters Schnittstellen von *NX-Open* kompatible in unserem Projekt angewandt
  werden sollten (__[Abbildung 3](#caption3)__). Da Änderungen der Adapter-Klasse Gesamtarchitektur nicht beeinflussen
  sollen (Prinzip der losen Kopplung(PLK)) wurde das Modul in einem anderen Paket angelegt.

<br>
<div class="image-270dg-grid-caption-wrapper">
<div class="row ">
    <div class="col-sm mt-3 mt-md-0 img-magnifier-container" id="caption2">
        {% include figure.liquid path="assets/img/myProj1/latticeGenerator_klassnendiagramm.png" title="latticeGenerator" id= "latticeGenerator"
        class="img-fluid rounded z-depth-1 mx-auto d-block magnify" alt="latticeGenerator" scale= 3.5 %}
    </div>
</div>
<div class="caption">
    Abbildung 2: Klassendiagramm für Lattice Structure Generator <br> (zum Vergrößern ziehen Sie Maus darüber 
    <tr>
      <td>
        <i class="fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
      </td>
      <td class="building">)</td>
    </tr>
</div>
</div>
<br>

## Implementierung
Zuerst ist Implementierung der Schnittstelle und Basisklasse festgesetzt, welche folgende Rolle spielen:
- ***ILatticeInterface*** beschreibt die Schnittstelle zu einem abstrakten Visualisierungsverfahren.
  Diese besteht aus Methode mit von Protobuf automatisch generierte Gitter als
  Ausgabesparmeter.
- ***Path*** besitzt notwendige Methode für Aufbau eines Pfades, auf deren Koordinaten
  Gitterpunkten (eng Lattice Groupe) angefangen bzw. orientiert werden.

<a id="word-to-refer"></a>
Im Anschluss werden mit Hilfe der obigen Abstraktionen und dem  ***IDGenerator*** in dem ***LayerGenerator*** Klasse zunächst die Schichten erstellt, in welche Gitterpunkte abhängig von
Querschnitttypen für den Aufbauraum der Gitter in einem Dictionary indiziert gespeichert werden.
Folglich ist in der Methode "*GenerateStruts()*" von <sub style="font-size: 1.02em;">__[∨](#code-schnipsel "StrutGenerator Klasse")__</sub>***StrutGenerator*** zur Erstellung der Kanten
zwischen Gitterpunkten instanziiert. Bei beiden Klassen liefert ***LatticeParameter*** physikalische und geometrische Eigenschaften eines Gitters aus,
was wiederum im ***BuildRestrectionChecker*** zur Anfertigung des gesamten Gitters geprüft werden, bevor im ***LatticeGenerator*** konkrete Verfahren<sup style="font-size: 0.85em;">**[Ʌ](#entwurf "Möglichkeiten")**</sup>
zum Gitter-Generator durchgeführt werden können. Für das Verfahren *„revolve( )“* kommt ***Axis*** zum Einsatz, welche 
die Rotationen eines beliebigen Punktes um eine Achse beschreibt[^M05].

[^M05]: Marsh, Duncan (2005). Applied Geometry for Computer Graphics and CAD (2nd ed.). Springer Undergraduate Mathematics Series. pp 45-52. [978-1-85233-801-5](https://link.springer.com/book/10.1007/b138823).

Abschließend werden zum Prüfen der genannten Verfahren unterschiedliche Testmethoden bzgl.
der Gittertypen auf Basis ***NXOpenLatticeAdapter*** programmiert und getestet. Dabei werden sowohl
gemeinsame (unter das Methode *„validateLattice( )“* ) als auch spezifische Assertionen in
zufälligen und expliziten Gitterräumen eingeführt. Die erwähnte Hilfsklasse enthält im Rahmen der
*NX-Open* -Sessionen mehrere Methoden zur Visualisierung des Gitters und somit tragen die
Testmethode zu unserem inkrementellen Softwareentwicklungsprozess vor allem zum Verhindern
von Kollisionen von Kanten zwischen jedem eindeutigen Paar bei.

## Erweiterbarkeit
Aufgrund der Anwendung eines Kegelschnittes kann mehrere Pfade unter ***CircularPath*** (__[Abbildung 4](#caption4)__) rekonstruiert
werden. Deshalb kann durch ihre Umwandlung zu einer gut definierten Überklasse möglich viele
Gittermodelle ins besonderes bei der Methode *„revolve( )“* (__[Abbildung 5](#caption5)__)im Model Paket eingefügt werden. Drüber
hinaus ist Ausbau eines polynomial kombinierten Pfads im Paket möglich und allgemein ermöglicht
unsere Softwareprodukt wegen die Erfüllung der PLK eine Erweiterung bei anderen Software-Adapter.

<br>
<div class="row justify-content-sm-center align-items-end">
    <div class="col-sm-5 mt-3 mt-md-0 d-flex flex-column" id="caption3">
        {% include figure.liquid path="assets/img/myProj1/adapter_class_daigrame.png" title="adapter class" id="adapter class" 
            class="img-fluid rounded z-depth-1" scale=1.5 %}
        <div class="caption">Abbildung 3: Adapterklasse zur Visualisierung <br> (zum Vergrößern ziehen Sie Maus darüber 
         <tr>
           <td style="vertical-align: top; text-align: center" >
             <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
           </td>
           <td class="building">)</td>
         </tr>
        </div>
    </div>
    <div class="col-sm-7 mt-3 mt-md-0 d-flex flex-lg-column" id="caption4">
        {% include figure.liquid path="assets/img/myProj1/pathModel_class_daigrame.png" title="Basic Path Model" id="Basic Path Model" class="img-fluid rounded z-depth-1" scale=1.75 %}
        <div class="caption">Abbildung 4: Klassendiagramm für aktuelles Pfad-Model <br> (zum Vergrößern ziehen Sie Maus darüber 
         <tr>
           <td style="vertical-align: top; text-align: center" >
             <i class="fa-sharp fa-solid fa-magnifying-glass-plus iconmagnifyPlus" aria-hidden="true"></i>
           </td>
           <td class="building">)</td>
         </tr>
        </div>
    </div>
</div>


## Code-Schnipsel
<sup style="font-size: 0.85em;">[Ʌ](#word-to-refer "StrutGenerator") </sup> Der erste Code-Abschnitt veranschaulicht Teile des allgemeinen Basiskantenzustands bzw. ihr
Nachbarverhältnis für Gitterpunkte. Zur Reduzierung des Datenfelds (der Attribuierten) der Klasse
ist eine Anwendung von Baustruktur durch Enumeration BaseSide abgedeckt (keine BaseSide
Right, …, BaseSide Left ). Der Zweite illustriert die Testmethode für bestimmte Gitter-Generator.
{% highlight c# linenos %}
class StrutGenerator
{
    internal struct BaseStrut
    {
        internal uint startIndex;
        internal uint endIndex;
        internal HashSet<BaseSide> side;
        internal BaseStrut(uint startIndex, uint endIndex, BaseSide side)
        {
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.side = new HashSet<BaseSide> {side };
        }
    }
    //The neighbour relationships
    internal enum BaseSide
    {
        RIGHT,
        LEFT,
        TOP,
        BOTTOM,
        BACK,
        FRONT,
        INTERMEDIATE
    }
    // number of vetrtices per row and rows for each layer
    private uint _nrOrow;
    private uint _nrOvert;
    private List<BaseStrut> baseStruts;
    private LatticeParameters _latticeParameters;
    //the constructor for struts
    public StrutGenerator(List<BaseStrut> baseStruts)
    {
    this.baseStruts = baseStruts ?? throw new ArgumentNullException(nameof(baseStruts));
    }
    public StrutGenerator(LatticeParameters parameter, uint nrOrow, uint nrOvert)
    {
        _latticeParameters = parameter;
        _nrOrow = nrOrow;
        _nrOvert = nrOvert;
        baseStruts = new List<BaseStrut>();
        var newStrut = new BaseStrut();
        switch (parameter.structureType)
        {
            case StructureType.LOZENGE:
            // in-plane left/right
            baseStruts.Add(new BaseStrut(1, 7, BaseSide.BACK));
            baseStruts.Add(new BaseStrut(3, 5, BaseSide.BACK));
            baseStruts.Add(new BaseStrut(0, 6, BaseSide.BACK));
            baseStruts.Add(new BaseStrut(2, 4, BaseSide.BACK));
            break;
            case StructureType.RIGHT_SIDED:
            // vertical in-plane right
            newStrut = new BaseStrut(0, 2, BaseSide.FRONT);
            newStrut.side.Add(BaseSide.LEFT);
            baseStruts.Add(newStrut);
            baseStruts.Add(new BaseStrut(0, 3, BaseSide.FRONT));
            ⋮
            ⋮
        }  
    }
}
{% endhighlight %}
<br>

Im folgenden Codeabschnitt wird die Prüfmethode für bestimmte Gittergeneratoren als Beispiel dargestellt.


{% highlight c# linenos %}
[TestMethod]
// Test of an extrusion for parallel Lozenge
public void TestExtrudeParallelLozengeRand()
{
    var rect = new Rectangle((float)rand.NextDouble() * 10 + 1, (float)rand.NextDouble() * 10 + 1);
    parameter.latticeType = LatticeType.PARALLEL_PLANES;
    parameter.interPlaneStructure = InterPlaneStructure.REINFORCED;
    parameter.structureType = StructureType.LOZENGE;
    parameter.density = new System.Numerics.Vector3(1, 1, 1);
    parameter.latticeDiameter = 0.2f;
    var lattice = generator.Extrude(rect, (float) rand.NextDouble() * 10, parameter);
    ValidateLattice(lattice);
    NXOpenAdapter.NXOpenLatticeAdapter.SaveLatticeAsCones(lattice, PathLocation.partFileName);
    var nL = lattice.Layers.Count;
    var nR = lattice.Layers[0].Rows.Count;
    var nV = lattice.Layers[0].Rows[0].Vertices.Count;
    Assert.AreEqual( 2*(nR - 1) * ((2*nV - 1)* nL - nV), lattice.Struts.Count, "");
 }
{% endhighlight %}
<br>


## Ergebnis
Das Resultat des Projekts ist aktuell eine Applikationsbibliothek für die CAD Software NX mit
weiterem Erweiterungsbedarf, was sich mechanisch und geometrisch belangt[^aspect]. Denoch ist Bibliothek tatsächlich in der Lage, Gitter auf verschiedenen Pfaden zu konstruieren, einschließlich kreisförmiger Pfade konstruieren. Dies verdeutlicht die Fähigkeit der Bibliothek, sich an eine Vielzahl geometrischer Konfigurationen anzupassen.

[^aspect]: Konkret betrifft eine Einschränkunge bei statischen Werten einer Strebe oder gesamten Streben wie z.B.mindestens Normal- und Querkraft und Biegemoment für ein
<br>
<br>
<div class="row justify-content-sm-center align-items-end">
    <div class="col-sm-6 mt-3 mt-md-0 d-flex flex-column">
        {% include figure.liquid path="assets/img/myProj1/2d_revolve_4pa.png" title="2d_revolve_4pa" 
            class="img-fluid rounded z-depth-1" scale=1.5 %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 d-flex flex-lg-column">
        {% include figure.liquid path="assets/img/myProj1/3d_revolve_2.png" title="3d_revolve_2" class="img-fluid rounded z-depth-1" scale=1.75 %}
    </div>
</div>
<div class="row justify-content-sm-center align-items-end">
    <div class="col-sm-6 mt-3 mt-md-0 d-flex flex-column" id="caption5">
        {% include figure.liquid path="assets/img/myProj1/3d_revolve_3.png" title="3d_revolve_3" 
            class="img-fluid rounded z-depth-1" scale=1.5 %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 d-flex flex-lg-column">
        {% include figure.liquid path="assets/img/myProj1/3d_revolve_4_1.png" title="3d_revolve_4" class="img-fluid rounded z-depth-1" scale=1.75 %}
    </div>
</div>
<div class="caption">
    Abbildung 5: Demonstration der Methode „revolve( )“ beim <span style="font-weight: bold;">CircularPath</span>
</div>
<br>
<br>

***