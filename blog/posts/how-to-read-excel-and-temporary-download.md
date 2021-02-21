---
title: Tutorial on how to process excel (.xlsx) as IOByte using xlsxwriter engine without storing the file
date: 2021-02-21
author: Ihsan Mohamad
linkedin: 'ihsan-mohamad-121736138'
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

# stay tuned

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
    app = FastAPI(title="Makan Manoi", description="Makan Manoi Systeme")
    
    origins = [
    "http://localhost.",
    "https://localhost",
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
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

gmaps = googlemaps.Client(key='AIzaSyAdXQQhUH9oGNoADc_kCx1b1N4RoPuWsPg')


@app.get('/search_place')
async def search_place(restaurant: str):
    place_name = restaurant

    places_result = gmaps.places(place_name)
    place_id = places_result['results'][0]['place_id']

    place = gmaps.places(query=restaurant)

    return place


   

@app.get('/restaurant_review')
async def get_review(place_id: str):


    place_id = place_id

    place = gmaps.place(place_id=place_id)

    reviews = [] #empty list which will hold dictionaries of review

    for i in range(len( place['result']['reviews'])):
        text = place['result']['reviews'][i]['text']
        rating = place['result']['reviews'][i]['rating']
        
        reviews.append({'rating':rating,
                    'text':text
                    }
                    )
    df = pd.DataFrame(reviews)
    print(df)
    result = df.to_dict('records')
    return result

@app.get('/download_excel')
async def download_excel(place_id: str):


    place_id = place_id

    place = gmaps.place(place_id=place_id)

    reviews = [] #empty list which will hold dictionaries of review

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
        
    # result = df.to_excel(f"{file_name}.xlsx")
    result = df.to_excel(writer)
    writer.save()
    xlsx_data = output.getvalue()


    return StreamingResponse(io.BytesIO(xlsx_data), media_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

@app.get('/get_analysis')
async def analysis_data():
    return {"otw"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

```

## I'll explain later lol

Content coming soon!
:grin: