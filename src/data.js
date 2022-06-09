const Data = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "Public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "Src",
      isFolder: true,
      items: [
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "homeScreen",
              isFolder: true,
              items: [
                {
                  name: "styles",
                  isFolder: true,
                  items: [
                    {
                      name: "style.css",
                      isFolder: false
                    }
                  ]
                },
                {
                  name: "index.jsx",
                  isFolder: false
                }
              ]
            },
            {
              name: "index.js",
              isFolder: false
            },
            {
              name: "style.css",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "Package.json",
      isFolder: false
    }
  ]
};

export default Data;
