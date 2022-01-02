import Property from "./Property"

function RecentelyViewed({ recentelyViewed, setRecentelyViewed, findProperty }) {
  const getRV = () => {
    const propList = []
    for (let i = 0; i < recentelyViewed.length; i++) {
      const prop = findProperty(recentelyViewed[i])
      prop && propList.push(prop)
    }
    return propList
  }
  const lst = getRV()
  return (
    <div className="recent">
      <h3>Recentel Viewed Properties     </h3>
      <div className="recent-list">
        {lst.length === 0 ? <p><br />you didn't open any Properties<br /></p> : lst.map(p => <Property k={p.id} property={p} recentelyViewed={recentelyViewed} setRecentelyViewed={setRecentelyViewed} />)}
      </div>
    </div>

  )
}

export default RecentelyViewed;