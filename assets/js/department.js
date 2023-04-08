import { departments } from "../../data/departments.js";

const title = document.querySelector(".title");
const departmentTotalInformationTitle = document.querySelector(
  ".totalİnformation-title"
);
const departmentTotalInformation = document.querySelector(".totalİnformation");
const servicesWrapper = document.querySelector(".services-wrapper");
const services = document.querySelector(".services");

const treatedDiseases = document.querySelector(".treatedDiseases");
const treatedDiseasesWrapper = document.querySelector(
  ".treatedDiseases-wrapper"
);

var department = window.location.search.slice(1);

const allUrl = [];
if (departments) {
  departments.map((item) => {
    allUrl.push(item.url);
  });
  if (allUrl.includes(department)) {
    const departmentDetail = departments.find((dep) => dep.url == department);
    if (departmentDetail) {
      title.textContent = departmentDetail.title;
      if (departmentDetail.totalİnformation == "") {
        departmentTotalInformationTitle.style.display = "none";
        departmentTotalInformation.style.display = "none";
      } else {
        departmentTotalInformation.innerHTML = `
   <p>${departmentDetail.totalİnformation}</p>`;
      }

      if (departmentDetail.url === "diaqnostika") {
        treatedDiseases.style.display = "none";
        servicesWrapper.innerHTML = ` <ol style="--length:${
          departmentDetail.services.length
        }" role="list">
        ${departmentDetail.services
          .map((item, index) => {
            return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
          })
          .join("")}
       </ol>
       <h4 class="mt-5 mb-3">${departmentDetail.rentgen.title}<h4/>
       <div><p style="color:rgb(70 70 70)">${
         departmentDetail.rentgen.information
       }</p></div>

       <h4 class="mt-5 mb-3">${departmentDetail.rentgen.subTitle}<h4/>
       <ol style="--length:${
         departmentDetail.rentgen.subServices.length
       }" role="list">
      ${departmentDetail.rentgen.subServices
        .map((item, index) => {
          return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
        })
        .join("")}
     </ol>

     <h4 class="mt-5 mb-3">${departmentDetail.computerTomografy.title}<h4/>
     <div><p style="color:rgb(70 70 70)">${
       departmentDetail.computerTomografy.information
     }</p></div>
     <ol style="--length:${
       departmentDetail.computerTomografy.subServices.length
     }" role="list">
    ${departmentDetail.computerTomografy.subServices
      .map((item, index) => {
        return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
      })
      .join("")}
   </ol>

   <h4 class="mt-5 mb-3">${departmentDetail.ultrasesAndDoppler.title}<h4/>
   <div><p style="color:rgb(70 70 70)">${
     departmentDetail.ultrasesAndDoppler.information
   }</p></div>

   <h4 class="mt-5 mb-3">${departmentDetail.ultrasesAndDoppler.subTitle}<h4/>
   <div><p style="color:rgb(70 70 70)">${
     departmentDetail.ultrasesAndDoppler.subInformation
   }</p></div>

   <h4 class="mt-5 mb-3">${
     departmentDetail.ultrasesAndDoppler.subServicesTitle
   }<h4/>
   <ol style="--length:${
     departmentDetail.ultrasesAndDoppler.subServices.length
   }" role="list">
  ${departmentDetail.ultrasesAndDoppler.subServices
    .map((item, index) => {
      return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
    })
    .join("")}
 </ol>
           `;
      } else if (departmentDetail.url === "cerrahiyye") {
        treatedDiseases.style.display = "none";
        servicesWrapper.innerHTML = `<h3 class="mt-3">${
          departmentDetail.services[0].title
        }</h3>
        <ol style="--length:${
          departmentDetail.services[0].content.length
        }" role="list">
         ${departmentDetail.services[0].content
           .map((item, index) => {
             return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
           })
           .join("")}
         </ol>
          <h3 class="mt-5">${departmentDetail.services[1].title}</h3>
          <ol style="--length:${
            departmentDetail.services[1].content.length
          }" role="list">
            ${departmentDetail.services[1].content
              .map((item, index) => {
                return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
              })
              .join("")}
            </ol>
           `;
      } else {
        if (departmentDetail.services.length > 0) {
          servicesWrapper.innerHTML = `
        <ol style="--length:${departmentDetail.services.length}" role="list">
       ${departmentDetail.services
         .map((item, index) => {
           return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
         })
         .join("")}
      </ol>
      `;
        } else {
          services.style.display = "none";
        }
        if (departmentDetail.TreatedDiseases.length > 0) {
          treatedDiseasesWrapper.innerHTML = `
     <ol style="--length:${
       departmentDetail.TreatedDiseases.length
     }" role="list">
      ${departmentDetail.TreatedDiseases.map((item, index) => {
        return `<li style="--i:${index + 1}"><h3>${item}</h3></li>`;
      }).join("")}
        </ol>
     `;
        } else {
          treatedDiseases.style.display = "none";
        }
      }
    }
  } else {
    window.location.replace("/notFound.html");
  }
}
