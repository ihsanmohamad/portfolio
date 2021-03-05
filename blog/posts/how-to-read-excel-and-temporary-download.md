---
title: Tutorial on how to process excel (.xlsx) as BytesIO using xlsxwriter engine without storing the file
date: 2021-02-21
author: Ihsan Mohamad
linkedin: 'ihsanmohamad13'
head:
  - - meta
    - name: description
      content: ihsan mohamad looking for job malaysia, frontend, backend or fullstack
  - - meta
    - name: keywords
      content: vue vuejs fastapi django malaysia work fresh graduate entry level junior developer python xlsx pandas file upload read excel temporary download byte excelwriter
---

Learned something new today, how to generate file and download temporarily instead of processing and storing the file locally and taking up spaces!

---
# Using FastAPI as the 

In this tutorial, i used FastAPI as i was working on a simple project. You can by yourself using other frameworks such as flask or django. This tutorials requires you to have basic understanding of python programming, python package and fastapi.




Here's the full code

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

import googlemaps
import pandas as pd

from slugify import slugify

from fastapi.responses import StreamingResponse

import io

def fastApp() -> FastAPI:
    app = FastAPI(title="Makan Manoi", description="Makan Manoi System")
    
    origins = [
    "http://localhost.",
    "https://localhost",
    "http://localhost",
    "http://localhost:3000"
]


    app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    )
    return app

app = fastApp()

gmaps = googlemaps.Client(key='YourAPIKey')

@app.get('/download_data')
async def download_data(place_id: str):


    place_id = place_id

    place = gmaps.place(place_id=place_id)

    reviews = [] #empty list which will hold dictionaries of review
    
    if place.get('result', {}).get('reviews')!=None:
        for i in range(len( place['result']['reviews'])):
            text = place['result']['reviews'][i]['text']
            rating = place['result']['reviews'][i]['rating']
            
            reviews.append({'rating':rating,
                        'text':text
                        }
                        )
        df = pd.DataFrame(reviews)

        output = io.BytesIO()

        writer = pd.ExcelWriter(output, engine='xlsxwriter')
        
        file_name = slugify(place['result']['name'])
            
        result = df.to_excel(writer)
        writer.save()
        xlsx_data = output.getvalue()


        return StreamingResponse(io.BytesIO(xlsx_data), media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', headers={
                "Content-Disposition": f'attachment; filename="{file_name}.xlsx"'
            })
    else:
        return None
```

You can try this on one of my project [here](https://makanmanoi.herokuapp.com/docs). 

## I'll explain later lol

Content coming soon!
:grin: