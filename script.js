document.addEventListener('DOMContentLoaded', () => {
    const cities = [
      "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir",
      "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
      "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay",
      "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli",
      "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu",
      "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa",
      "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
      "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
    ];
  
    const datalist = document.getElementById('cityList');

  cities.forEach(city => {
    const optionElement = document.createElement('option');
    optionElement.value = city;
    datalist.appendChild(optionElement);
  });

  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase('tr-TR');

    const filteredCities = cities.filter(city => {
      const lowercaseCity = city.toLowerCase('tr-TR');
      return lowercaseCity.startsWith(searchText);
    });

    // Clear the datalist options
    while (datalist.firstChild) {
      datalist.removeChild(datalist.firstChild);
    }

    // Add filtered cities to the datalist
    filteredCities.forEach(city => {
      const optionElement = document.createElement('option');
      optionElement.value = city;
      datalist.appendChild(optionElement);
    });
  });
});