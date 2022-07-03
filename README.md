# objectSubData

some times you need to find a value by key in an object in your angular template

in this example, presentationData is a object and you can use it as a pipe with a input argumant.

      <span [innerHTML]="presentationData | objectSubData : 'your key in object'"> </span>

