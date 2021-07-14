let introduction = document.querySelector('#root');

introduction.innerHTML += `
    <div id="about-me">
        <div class="description">
            <p class="me-description">
                Salutare! Eu sunt Andrei Vremăroiu, sunt un tânăr căruia îi place muntele și își dorește să ajute comunitatea pentru a îi
                ajuta pe cei care au dificultăți în găsirea unei rute potrivite. Am fost în situația în care, pentru anumite poteci, nu am
                găsit informații relevante, așa că am fost nevoit să îmi urmez instinctul pentru a nu mă rătăci.
            </p>

            <p class="blog-description">
                Articolele pe care le vei găsi aici nu vor fi poveștile mele din drumeții, nu vă voi spune cum am întâlnit un urs sau cum am
                alunecat pe o piatră. Aici veți găsi informații utile, care să vă ajute să vă orientați și să nu dați scroll 10 minute pentru
                a găsi, într-un final, marcajul necesar și timpii de parcurgere. 
            </p>

            <p class="blog-description">
                Ideea de 'suspemunte' a pornit în vara lui 2020, atunci când am fost nevoit să intru pe site-ul unor montaniarzi de 
                origine cehă pentru a îmi găsi informațiile necesare legate de un traseu în Munții Bucegi. Nu zic că în română nu au existat,
                dar informațiile găsite acolo nu erau îndeajuns pentru a putea face ruta fără să mă încurc sau să verific hărțile de zeci de ori.
                Aici veți găsi ruta exactă pentru tot ceea ce vă doriți, dar și alte informații utile atunci când vreți să plecați într-o drumeție de
                una sau mai multe zile.
            </p>
        </div>

        <div class="image-wrapper">
            <img src="images/eu.jpg">
        </div>       
    </div>

    <div class="buffer"> </div>


    <div class="about-blog">
        Suspemunte îți va oferi, totuși, niște mici povești, câteva legende legate de fiecare vârf/munte, pe care le poți citi doar
        dacă dorești, printr-o simplă apăsare de buton. Nu e nevoie să citești tot pentru a putea afla marcajul traseului, deci rămâne
        totul la decizia ta, dacă vrei să mai stai pe site sau să îl închizi.
    </div>

    <div class="buffer"> </div>
    

    <h1 class="call-to-action-header">Hai cu mine pe munte!</h1>

    <div class="form-text">
        <p class="blog-description"> 
            Vrei să vii cu mine pe munte sau ai nevoie de un sfat? Completează acest formular și așteaptă un răspuns din partea mea!
        </p>
    </div>

    <form id="hike-request">
        <label>Nume:</label>
        <input type="text" required>
        <label>Adresa de e-mail:</label>
        <input type="email" required>
        <label>Județul de reședință:</label>
        <input type="text" required>
        <label>Ai mai fost pe munte până acum?</label>
        <label class="hike-before">Da</label>
        <input type="radio" name="yes-or-no" required>
        <label class="hike-before">Nu</label>
        <input type="radio" name="yes-or-no" required>
        <label></label>
        <input type="submit" value="Trimite" align="middle">
    </form>
`;