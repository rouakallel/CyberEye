


@app.route('/submit3', methods=['POST','GET'])
def submit_form():
    try:
        data = request.get_json()
        keyword1 = data.get('keyword1', '')
        keyword2 = data.get('keyword2', '')
        print(keyword1)
        user_agent = UserAgent()
        query = f'intext:"{keyword1}" filetype:{keyword2}'
        url = f"https://google.com/search?q={query}&num=99"
        header={'User-Agent': user_agent.random}
        data = requests.get(url, headers=header)
        if data.status_code == 200:
            soup = BeautifulSoup(data.content, "html.parser")
            results = []
            file_type_counts = {}
            for g in soup.find_all('div',  {'class':'g'}):
                anchors = g.find_all('a')
                if anchors:
                    link = anchors[0]['href']
                    title = g.find('h3').text
                    try:
                        description = g.find('div', {'data-sncf':'2'}).text
                    except Exception as e:
                        description = "-"
                    results.append(str(title)+";"+str(link)+';'+str(description))
                    file_extension = get_file_extension(link)
                    file_type_counts[file_extension] = file_type_counts.get(file_extension, 0) + 1
        else:
            return jsonify({'error': 'Failed to fetch Google search results'}), data.status_code   


        timestamp = time.strftime("%Y%m%d%H%M%S")
        filename = f'serp_{timestamp}.csv'
        with open(filename, "w") as f:
            f.write("Title; Link; Description\n")

        for result in results:
            with open(filename, "a", encoding="utf-8") as f:
                f.write(str(result)+"\n")

        return jsonify({
            'success': True,
            'results': results,
            'url': url,
            'result_count': len(results),
            'file_type_counts': file_type_counts
            }), 200
    except Exception as e:
        return jsonify({'error': 'Internal Server Error'}), 500


