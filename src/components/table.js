import React from 'react'

const Table = ({ data }) => {

    const columns = data[0] && Object.keys(data[0]);
    return (
      <div className="Table">
      <div
        className="TableRow"
      >
        {data[0] &&
          columns.map((heading) => <div className="TableHead">{heading}</div>)}
      </div>

     {
      data.map(row => {
        var date = new Date( parseInt(row.date) * 1000).toLocaleString()
        
        return (
          <div className="TableRow">
            <div className="TableCell">{row.id}</div>
            <div className="TableCell">{row.firstName}</div>
            <div className="TableCell">{row.lastName}</div>
            <div className="TableCell">{row.location}</div>
            <div className="TableCell">{date}</div>
            <div className="TableCell">{row.salary}</div>
          </div>
        )
      })
    }
    </div>
    );
     
}

export default Table;