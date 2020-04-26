export function getmap(arr) {
   arr.sort((a, b) => {
      return a.weight - b.weight;
   })

   var sortable = arr.reduce((map, item) => {
      map[item['row']] = map[item['row']] || { row: item.row, objects: [], weight: 0 };

      map[item['row']].objects.push(item);
      map[item['row']].weight = map[item['row']].weight + item.weight;

      return map;
   }, []);

   sortable.sort((a, b) => {
      return a.weight - b.weight
   });
   var final = [];
   sortable.forEach(element => {
      element.objects.forEach(element => final.push(element))
    })
   return final;

}

// export function direction(end, start = {row:1,col:1}, delimiter=5, inline=5, outline=10 , isleft = true) {
//    // isleft confirms increasing column of matrix when going to left
//    var directions = [];
//    if (start == end) return directions; 
//    if (end.row == start.row) {
//      //same shelf navigation contains direciton in left and right form only
//      // console.log(end.col,start.col);
//      var diff = end.col-start.col;
//      var prop = diff > 0 ? isleft ? "left": "right" : isleft ? "right": "left";
//      directions.push([ [prop], Math.abs(diff)*inline ]);
//      return directions;
 
//    }
//    else {
//      //handling multi shelf navigation
//      // 1. start to pole dir.
//      if( ((end.col+start.col)-2) < (2*delimiter - (end.col+start.col)) ){
//        //moing toward the smaller array dim ie : [1,1]
//        if (!(start.col-1)) []
//        else if(isleft) directions.push([ "right", (start.col-1)*inline ]);
//        else directions.push([ "left", (start.col-1)*inline ]);
//        //2. pole to next pole start dir.
//        if(end.row > start.row) directions.push([ "top", (end.row-start.row)*outline ]);
//        else directions.push([ "down", (start.row-end.row)*outline ]);
//        //3. pole start to end
//        if (!(end.col-1)) []
//        else if(isleft) directions.push([ "left", (end.col-1)*inline ]);
//        else directions.push([ "right", (end.col-1)*inline ]);
     
//      }else{
//        //moing toward the smaller array dim ie : [1,1]
//        if (!(5-start.col)) []
//        else if(isleft) directions.push([ "left", (5-start.col)*inline ]);
//        else directions.push([ "right", (start.col-1)*inline ]);
//        //2. pole to next pole start dir.
//        if(end.row > start.row) directions.push([ "top", (end.row-start.row)*outline ]);
//        else directions.push([ "down", (start.row-end.row)*outline ]);
//        //3. pole start to end
//        if (!(5-end.col)) []
//        else if(isleft) directions.push([ "right", (5-end.col)*inline ]);
//        else directions.push([ "left", (end.col-1)*inline ]);
//      }
//      }
//      return directions;
//    }
 
 
 // var {row,col} = flatmap[0];
 
 // console.log(direction({row,col}, {row : 1, col : 5}));
 
//loop handler
 
//  var start = {row:1,col:1}

//  for (i in flatmap){
//    var out = direction({row:flatmap[i].row, col:flatmap[i].col}, start);
//    start = {row:flatmap[i].row, col:flatmap[i].col}
//    console.log(out)
//  }



 // console.log( {row,col}flatmap[0] )


export function direction(end, start = {row:1,col:1}, delimiter=5, inline=5, outline=10 , isleft = true) {
  // isleft confirms increasing column of matrix when going to left
  var directions = [];
  if (start == end) return []; 
  if (end.row == start.row) {
    //same shelf navigation contains direciton in left and right form only
    // console.log(end.col,start.col);
    var diff = end.col-start.col;
    var prop = diff > 0 ? isleft ? "left": "right" : isleft ? "right": "left";
    directions.push({ direction:prop, len: (Math.abs(diff)+1)*inline });
    return directions;

  }
  else {
    //handling multi shelf navigation
    // 1. start to pole dir.
    if( ((end.col+start.col)-2) < (2*delimiter - (end.col+start.col)) ){
      //moing toward the smaller array dim ie : [1,1]
      // if (!(start.col-1)) {}
      // else 
      if(isleft) directions.push({ direction:"right", len:(start.col)*inline });
      else directions.push({ direction:"left", len:(start.col)*inline });
      //2. pole to next pole start dir.
      if(end.row > start.row) directions.push({ direction:"ahead", len:(end.row-start.row)*outline });
      else directions.push({ direction:"back", len:(start.row-end.row)*outline });
      //3. pole start to end
      // if (!(end.col-1)) {}
      // else 
      if(isleft) directions.push({ direction:"left", len:(end.col)*inline });
      else directions.push({ direction:"right", len:(end.col)*inline });
    
    }else{
      //moing toward the smaller array dim ie : [1,1]
      // if (!(5-start.col)) {}
      // else 
      if(isleft) directions.push({ direction:"left", len:(5-start.col+1)*inline });
      else directions.push({ direction:"right", len:(start.col)*inline });
      //2. pole to next pole start dir.
      if(end.row > start.row) directions.push({ direction:"ahead", len:(end.row-start.row)*outline });
      else directions.push({ direction:"back", len:(start.row-end.row)*outline });
      //3. pole start to end
      // if (!(5-end.col)) {}
      // else 
      if(isleft) directions.push({ direction:"right", len:(5-end.col+1)*inline });
      else directions.push({ direction:"left", len:(end.col)*inline });
    }
    }
    return directions;
  }






  //correct fallback algo

  // export function direction(end, start = {row:1,col:1}, delimiter=5, inline=5, outline=10 , isleft = true) {
  //   // isleft confirms increasing column of matrix when going to left
  //   var directions = [];
  //   if (start == end) return []; 
  //   if (end.row == start.row) {
  //     //same shelf navigation contains direciton in left and right form only
  //     // console.log(end.col,start.col);
  //     var diff = end.col-start.col;
  //     var prop = diff > 0 ? isleft ? "left": "right" : isleft ? "right": "left";
  //     directions.push({ [prop]: Math.abs(diff)*inline });
  //     return directions;
  
  //   }
  //   else {
  //     //handling multi shelf navigation
  //     // 1. start to pole dir.
  //     if( ((end.col+start.col)-2) < (2*delimiter - (end.col+start.col)) ){
  //       //moing toward the smaller array dim ie : [1,1]
  //       if (!(start.col-1)) {}
  //       else if(isleft) directions.push({ "right": (start.col-1)*inline });
  //       else directions.push({ "left": (start.col-1)*inline });
  //       //2. pole to next pole start dir.
  //       if(end.row > start.row) directions.push({ "top": (end.row-start.row)*outline });
  //       else directions.push({ "down": (start.row-end.row)*outline });
  //       //3. pole start to end
  //       if (!(end.col-1)) {}
  //       else if(isleft) directions.push({ "left": (end.col-1)*inline });
  //       else directions.push({ "right": (end.col-1)*inline });
      
  //     }else{
  //       //moing toward the smaller array dim ie : [1,1]
  //       if (!(5-start.col)) {}
  //       else if(isleft) directions.push({ "left": (5-start.col)*inline });
  //       else directions.push({ "right": (start.col-1)*inline });
  //       //2. pole to next pole start dir.
  //       if(end.row > start.row) directions.push({ "top": (end.row-start.row)*outline });
  //       else directions.push({ "down": (start.row-end.row)*outline });
  //       //3. pole start to end
  //       if (!(5-end.col)) {}
  //       else if(isleft) directions.push({ "right": (5-end.col)*inline });
  //       else directions.push({ "left": (end.col-1)*inline });
  //     }
  //     }
  //     return directions;
  //   }