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
      "type": "verifyTextPresent",
      "text": "Selenium Projects"
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Download"
      }
    },
    {
      "type": "verifyTextPresent",
      "text": "Downloads"
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Documentation"
      }
    },
    {
      "type": "verifyTextPresent",
      "text": "Selenium Documentation¶"
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "Support"
      }
    },
    {
      "type": "verifyTextPresent",
      "text": "Getting Help"
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "link text",
        "value": "About"
      }
    },
    {
      "type": "verifyTextPresent",
      "text": "About Selenium"
    }
  ],
  "data": {
    "configs": {},
    "source": "none"
  },
  "inputs": [],
  "timeoutSeconds": 60
}