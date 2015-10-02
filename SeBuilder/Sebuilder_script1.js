{
  "type": "script",
  "seleniumVersion": "2",
  "formatVersion": 2,
  "steps": [
    {
      "type": "get",
      "url": "http://www.seleniumhq.org/"
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Projects"
      }
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Download"
      }
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Documentation"
      }
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Support"
      }
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "About"
      }
    }
  ],
  "data": {
    "configs": {},
    "source": "none"
  },
  "inputs": [],
  "timeoutSeconds": 60
}