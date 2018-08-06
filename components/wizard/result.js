import { Component, render } from "preact";

export default class Result extends Component {
  recommendByGroup(recommendations) {
    return recommendations.reduce((groups, r) => {
      const groupKey = r.group;
      if (!groups.has(groupKey)) {
        groups.set(groupKey, [r]);
      } else {
        groups.set(groupKey, [...groups.get(groupKey), r]);
      }
      return groups;
    }, new Map());
  }

  render() {
    const answers = this.props.answers;
    const recommendations = this.props.recommendations;
    const byGroup = this.recommendByGroup(recommendations);
    console.log(byGroup);
    return (
      <div>
        <div class="answers">
          <h2>Congrtulations! You finished the wizard! You answered..</h2>
          <ul>
            {answers.map(answer => (
              <li>
                {answer.headline}
                <ul>{answer.recommendations.map(rkey => <li>{rkey}</li>)}</ul>
              </li>
            ))}
          </ul>
        </div>
        <div class="recommendations">
          <h3>and we recommend..</h3>
          {Array.from(byGroup.entries()).map(([groupKey, recommendations]) => {
            return (
              <div class="group">
                <h4>{groupKey}</h4>
                <ul>
                  {recommendations.map(r => (
                    <li>
                      <h4>{r.headline}</h4>
                      <p>{r.subline}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
