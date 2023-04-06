import React from "react";
import "../../CSS/landing.css";
import { Link } from "react-router-dom";
import AutoPlay from "../Components/Slider";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="Header bottom">
        <div className="Logo">
          <img
            src="/images/logo.png"
            width={200}
            // height={80}
            alt="pic"
          />
        </div>
        <div className="headerContent">
          <Link to="/Login">
            <button className="adminBtns">Admin</button>
          </Link>

          <Link to="/UserLogin">
            <button className="adminBtns">Employee</button>
          </Link>
        </div>
      </div>
      <div className="Banner">
        {/* <div className='PayrollText'>
                
            </div> */}
        <div className="BannerImage">
          <img
            src="/images/bannerImage.jpg"
            className="bannerimage"
            alt="pic"
          />
        </div>
      </div>
      <div className="founders">
        <div className="aboutus-card">
          <div className="aboutus-text">
            <h1>
              Implementation of payroll System using Gps Tracking and Image
              Capture
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur obcaecati animi, blanditiis eaque nostrum totam, non
              cupiditate, dignissimos error officia expedita architecto magnam
              nemo voluptas aliquid saepe odit itaque? Molestias.<br></br>
              dignissimos error officia expedita architecto magnam nemo voluptas{" "}
              <br></br>
              dignissimos error officia expedita architecto magnam nemo voluptas{" "}
              <br></br>
              Islam.
            </p>
          </div>
          <div className="aboutus-button">
            <button>Administrator</button>
            <Link to="/apply">
              <button>Employee</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="founder2">
        <h4 style={{ textAlign: "center", paddingTop: 50 }}>Facilitators</h4>
        <div className="founderCardHolder">
          <div className="founderCard">
            <img src="/images/staticStaff.jpg" className="founderImg" />
            <div className="CardText">
              <div className="founderName">
                <p className="" style={{ fontWeight: 700 }}>
                  Nasiru Iyidemilade Halim
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, dicta possimus nemo sunt animi corrupti autem nam sint
                  ea? Qui
                </p>
              </div>
              <div className="iconHolderF">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2Zy04UQRSGe4GK4TouYauCcSGK7lTiTmIi+gSEiLyAF3QNsiUYlhJ8AS+JKxm87tS9gG4U3CoKiCv5TMlfsTKZ6a7u6Z4ek/mTSTrTVaf+03Xq3CoIGmggfwA9wDiwCCwBW6QHI8vILAI3gcNZKHASeEbtsQj0p6HAHmAW2JHgr8A94KJ2pyWVL7W7VotkDgFzWgutfRdoSiq4ADyXsJ/ABNCeFnGP9duBSWDb2Z3OJDthTemLMa3MGEdzOQZ8EpdXwN44k405GawCXZky9ePTBayJ00ycg70jczoe1AmAEzKz3+bZZ4I1qYmgzgDcEbdi1MAexzvV7GA761/QmTRmNFjmfQfwTRwPhQkywc5gLmvSFdZfc2LIaoUx83p/I0yQiaoGQ1kSrlKRy3q/ECZoRYMSpweKPyPAY2BZqceWnh/pXaHC3EEpY7zl+QjzXw4jsaFBbQkU2A/cBr57pB7rwC2gOcE6bZKxETboLxL6+XcO0afAqE1j9OvVfwvOuLdJ4hRRPJMoIiVW7XYDpz3mnHHMOHbQJW1FZE52J17EyYV0ll5q7ps4ZkYGipgzgeqIeAndP2XszoznoohI2IMdaU4hcgYcB1DIQ5ERe7Bj8I6KX8N5KGJigsGVGJwryboqWQ/yUMTadk8MzpVk9VqvF+SgyKaGt8bgXElWq2Rt/u+KmLLW4Ifn+IZphR320aBKAGN5HvaRyHTaE+qQ5OZ+CwpiBmdj8C6Vc04yjKzOmitSkqKs+EblMh/jQ2TFVwNFmpWKowTQWxngAPC6LpLGMmm8+boDgZ85faybNL5EGfNVLYryREcU7Fr1POYcbLsTmRRWG1WUus3qwlgHEIZ1XR3sy6rUXUmh+dBp3CjwUHXKpn5L+m84Se0St/mQazvIB047qHL5oO3OrUHnA+C+OF6r25ZpFLxbphpsvcpkUGcApiLNyhncr2uFba/2fY3A7nXHL10r9PlOMnd2qH3ZnTnLaD7dTl94Os7EJsfETJv/VKZMw7n0AZ+dQNuUJB5YZbZ1ydKRGePyB3tK5oRarcnij3ZmRnaJPIa5n7ikhkHVZa6zlkljehUn5h3vZNaeTnw9XbLIUeAJtUcxE4djfLepG7TNNv1IC0bWe3XyrwMHU1eggQaC2PgDcoKh50PBZGwAAAAASUVORK5CYII="
                  width={35}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEf0lEQVR4nO2Za4hVVRTHT81oaVYymfSyIiorLSSi0kxIjQrt/SY0IZGUSAJNg56gZSXhKy3EMkSjafpQEFr0wYqeUxmlZuog6fShp9pzHMtfLO7/4OJwztwz9+zb3A/3D5eZc8567sdaa68dRXXUUUcd1QZwJjABmAk8CkwBRgENUa0D6AVMAzaTjR+Bp4CmDBmHArcCa4HxaQRjgNXACVVyYhjwrTP4J+BlGf0I8Dzwmfu+G7jN8R+rWfMyFiaV9AZ26ONXQP/ATowD/pD8jcC1WUsIOA14EfhX9ObsR+7ZY1iS+cYEwXtAv0BOnA/8Kbk26r1y8o0F9jibzJH1wF49N6cxrdLH54CP9f+nwICCThzuZvrZCvjPAeZqTxwPLHOOrQA+tBnzDPG6Gwkc7Zyx90MKOGIRCa39xgJyBgBvk45tnvB3vRyo537A63pny+KuCpQfAnwvGWMqdSKxYmLsd39HesIOfTgiEeYeBw7om43I4CgngIvE15aXJwuKqMuBqcBs58jUJOEufTg7Q8h3+r7PQh5wcqbWg3z3iWdJFAjAdOAfDe4DaQRvSulNGQJs3ywCOkXXqekebTOXwfO0aGcEcuIZp3tSFtG9InqjjLAzgFc0KjHagaWKLMc52jjC3B3IkXbJu64roiYlrP159gFwCvAk8ENKFLGM/QGwSc9zAzmyU/IGlSO0eB2Hyt45hTeo0LNp/8ItPY/lgRz5WfKO6YrIksurzpA1wGEVKOujaHW7NvsTwFlFnTAo0JA5yBZySce7Phz3JICBsunXcomr061vjxuiGgAwXPa0liP8UoR20BmsInJCkbIiJIDJ8ZIvRzhfhC1RDYJSWW+YXo7wXGVLC7+nRzUGoE2OXJCH2KJWXFOlZuueADDU7d/ySx040W32BRYEohoA8LBsWtEdJktuv7lcEvTI211QqsC3y56rKmkSxOcIK0EetNZN1azt2pbxsmNHt9tEYo4d8VhUNYuzbVkv3TMrYX4sxQmLaPOqYm22HVdI9y8VLXF1AOPWizk1ws4jVbE224ZGYINsuD9EAtoGHBnUynz6Z0m/nUz7FBHU5Or/t/7PGaHUAvpbuq8MIfA8qzZdd3BoEEu71nkU8I10vhB6dLZKsB1vm60iBk4KXVBSOqTFLaivQ3U6vYK+wByXKGN0ZDUrKkx8L7nmdfXqPXVS4iCAItvNgSJULNf6BpeGsTh9yi8H3nFOWNkwKoDs/q4V+hdwWRirDyoYpMPVgkSW36MmRd8AOi4EtrhSaEQRYa/phqhN9yLtGpkktqtVWTgMq0Exx7U9Te+pRYW2phjdoajRom56qC5Io46su9wem18o4SVGZ3biQmUdcH3eC5mc55yH3D2J4XPgkhDy0+4fFrqMipac9XfvsLwRdW9wLlb5/36ivWrJ7paqH9ooRRFr3X+SsuR264ZojW625um3GFipRnhbyl1fh+4BR/fIqRMYYpWnroGtlM6LfdpjS4Crg2foorA7EYvzwES1Q2fpdw9wJ3CNemI10Quro46oOP4DSdt4H31vYVQAAAAASUVORK5CYII="
                  width={35}
                />
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO2ZW4hWVRTHf6PjCKmZjgrpmJcMpJuC1EMvlZk2iuhMk6JPkqlFr9rog6E140wgaMhgDz6U4V0QHSVhpAtRYpYa4S3qwQqi1Ml7KdOMLPgf2By+cz/zfd/D/GHDxzlr//f+n733WmuvD/rQh7LHYKAWaAXagQtAJ3BPzX6fBw4BLcAr6lMWqNDk9wL/AT0J27/AbokyrpKgAfjRmVQX8A3QBNQDjwPDgAFq9vsJvWsGvlUfr/8ZoK6YAiYBHc4ELgGrgNEpuMYA7wC/OXxHgYn0MhYDNzTgX8Ab+tpZUQUsBy6L+zqwkF5AhbaM99W2a6vkjeHADmec9XmLaBPxXeB1eh/L5elszC15kXorcQuYRfFQC9zOa2UWOyuRh4hH5WqNdxHwGjATmAaMChDjrcyCLN7JO9hZtpOdpXd9nimoTQ3YZvbuWlpv1uEc7LR4BvjDmeifwGc60DsUSL8A7oQIwXEA1jdxsPNcbFrvNBm4KZ6vgOdCbM9ECKl2XPO8JF7Ki9gWJ9LAOH4Qx06gMsI+SojhTdmcipvO1DoRO22wm+lwDCrwfgTwAjBD7dcYQqqA32UXy/HslbGlDmnxcQjHmpAEc2oE72rZ7YqawBBlpF0pcycPP2vAKb7nC/XcXOqX+mhuGx/BOxb4X87hgTjbyrLYtLDt2K3J9ve9+178b2fgPyEO276BaJWRRfO0GCmOv33PBzoCs1yoWsS/IcyoXUZ2Z0iLieKwA+yiRs8trmRBg3gOhhldlJFdgLKkIcbxS4G40qPrbhY8GYfnqowsnS5XISPEYwEyEHdlZD47DuarqOC2axFCugr08dqzMcYcKB5z4YHwMs24gXBBSAIYJCSsVccYs8rJyAPRKaOHEgo5oJzMbUN9tv0L2HgFicit4mC47K8QggsysgOVRMge0mO6OL6Oaf+U7M+GGR2WUV0Rhbwljm0x7etlb4W+QDTHCTYFhFi23OhrK3y21QVsGnUfMY6VMcf8QPbvhxnNkdHxEhz2uQlTlNAMeJAu/N0qnkXhaaU1bvsoQsiVAn2sPRxjvBrN7VZU0mjYlzHf6s2A2JTkTL7sXPb9LrSUQh4E/hGHebpI2DXyp4QHsBhCGtX/dJJO85xVGVcGQmqcYG13pkQ4po6fA/1KKKSfbpNepT4xxjsFOlvWUglZ4+wOu+qmQp3cXbcicLGFLNUdvTtLydTDe5qAES4popBlEmB91pETPnTEtEak+VmFDNC93BOxkZzR6JCfVJE7byETVMHp0Vi5rYQfrzpByWpLmwukFmmEWA1tk/N/SGfGAkgsjHPSfU9Qm0qglQmFWLV+q6/y2A48QhExR1vMzWCteHEkQojVuz5RXdjt+x0wmxLieeBTJ+YkSeNv6v8XW82ygRUFXgLW6g7vj8KPAeeA/bJ5MUG1pg99oES4D16PyFnalVHhAAAAAElFTkSuQmCC"/> */}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2avUoDQRDH10bUyjIXSZF3sBEs7WIhNha2dmKX6AOoiOgb6GuIWETxHawsLESr2Bi/YuNPLowgR0z29lZ3T+YHaZb5+jOzOXITYxRFcQJYBNrAM+F5kloaeUXsEC/beTqR0gOaQGICAyRAS2rCqjPAuRg3TWQAm1Jb28Y4nceUiokMoCK1dW2M+5hIwbY+FfJHoB3xDFAHDoEredi+ALfAJbAPzANjUd8RYA14tXjoXUcrBFgBPuRzDMwCU8C4fK0uAAej8gcVAkwDDxJ6o0h+AgtZl7AXRfMTWMiJhF3NnKejtQfcZO+OiVTInYStZ86PfrrtJlIhbxJ2InN+L+dzwKRlrKBCBsZ0yYUKccRm7hlObVhc6wICC+kUrs+3kJw+y+J2WnYhu6NeMJRFyJm4LRWOG8kdqf0HIR0v9fkSYhPTcfz6+DP0kNwlF7Y+KmQI2pEB6Gj5QEdrADpaPtDRKjhaXbFNYusIMCMujzbG6fY0peVQ828L2cqzemuIcU92dlWH2r0KAaoi4l1c7NbU6S80yr6eznSm/W05Wr4/DCiKYr74BGqGAfr+nDYAAAAAAElFTkSuQmCC"
                  width={35}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2aPWsUURSGrxoFxSSmS2JhJVpoFRG0t4qYKrG1SOEPSCJYiKDYKDb6CywFtRMEV0QRgim0iqBgYVBQJCRRkoiaR87yBoZhZ3J3Zid7B+9TJee83HvevR8zmxPnIpFIIYCzQAP4Sff5oVpG2zVxnXC51s5KGOvAFDDkugwwBEyrJrxWBngm8ZQLDGBGtTV8xLYfjUEXGMCgalvxETdxgYJvff+FEeAU8Bj4CnwBHgHHqii4MiO6zf60uA7XgBFXIyNvlbJnzAFgv93pij2tqvAqjCwrtS8R6/O+RQIy8lypG0C/TFxVbLaqwqswMgKstjgj9rQ94Wp2ax0G7gGfgM+1vLVCgQ5srVdk89JHA+wGzgMPgAVtyyXdiLeAo9thJBcfDfBui/xv4DbQU7mRvLjnhzAPTAKHgD1AL3AauAv8kuYhsDNEI/b03wCuZBUo3Ungm4aZCdHIODCR+H1XzvxnNIydnb6gjChnrzV3gO+S2UvnTdtaLbRPpLkYlBF7rQHeJM7J38TPc8DelP6CcvdDM3JZqffAcbuVdB4+tjoPwBHFP4RmxD5141wqPqb461S8X/Gl0IwsKjWQig8ovpiK71B8IzQjmZOXmS+XaMTFFWlSdme4sgMk40UmLzNfLtGIiyvSpOzOcGUHSMaLTF5mvly2GiALX02RcTttxL5zZ/HCV1Nk3I4aCQXaMLIibddbbmmAg6pt2Uds3VNj2gUGcKmd1tuoxOvq2Q1vS5X5NQ3LxOZfWfza1Il2QX3b06mVaSSao/X7h4FIJOI2+Qcr3dTGXC5RnAAAAABJRU5ErkJggg=="
                  width={35}
                />
              </div>
            </div>
          </div>
          <div className="founderCard">
            <img src="/images/staticStaff.jpg" className="founderImg" />
            <div className="CardText">
              <div className="founderName">
                <p className="" style={{ fontWeight: 700 }}>
                  Ugo Justice
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, dicta possimus nemo sunt animi corrupti autem nam sint
                  ea? Qui
                </p>
              </div>
              <div className="iconHolderF">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2Zy04UQRSGe4GK4TouYauCcSGK7lTiTmIi+gSEiLyAF3QNsiUYlhJ8AS+JKxm87tS9gG4U3CoKiCv5TMlfsTKZ6a7u6Z4ek/mTSTrTVaf+03Xq3CoIGmggfwA9wDiwCCwBW6QHI8vILAI3gcNZKHASeEbtsQj0p6HAHmAW2JHgr8A94KJ2pyWVL7W7VotkDgFzWgutfRdoSiq4ADyXsJ/ABNCeFnGP9duBSWDb2Z3OJDthTemLMa3MGEdzOQZ8EpdXwN44k405GawCXZky9ePTBayJ00ycg70jczoe1AmAEzKz3+bZZ4I1qYmgzgDcEbdi1MAexzvV7GA761/QmTRmNFjmfQfwTRwPhQkywc5gLmvSFdZfc2LIaoUx83p/I0yQiaoGQ1kSrlKRy3q/ECZoRYMSpweKPyPAY2BZqceWnh/pXaHC3EEpY7zl+QjzXw4jsaFBbQkU2A/cBr57pB7rwC2gOcE6bZKxETboLxL6+XcO0afAqE1j9OvVfwvOuLdJ4hRRPJMoIiVW7XYDpz3mnHHMOHbQJW1FZE52J17EyYV0ll5q7ps4ZkYGipgzgeqIeAndP2XszoznoohI2IMdaU4hcgYcB1DIQ5ERe7Bj8I6KX8N5KGJigsGVGJwryboqWQ/yUMTadk8MzpVk9VqvF+SgyKaGt8bgXElWq2Rt/u+KmLLW4Ifn+IZphR320aBKAGN5HvaRyHTaE+qQ5OZ+CwpiBmdj8C6Vc04yjKzOmitSkqKs+EblMh/jQ2TFVwNFmpWKowTQWxngAPC6LpLGMmm8+boDgZ85faybNL5EGfNVLYryREcU7Fr1POYcbLsTmRRWG1WUus3qwlgHEIZ1XR3sy6rUXUmh+dBp3CjwUHXKpn5L+m84Se0St/mQazvIB047qHL5oO3OrUHnA+C+OF6r25ZpFLxbphpsvcpkUGcApiLNyhncr2uFba/2fY3A7nXHL10r9PlOMnd2qH3ZnTnLaD7dTl94Os7EJsfETJv/VKZMw7n0AZ+dQNuUJB5YZbZ1ydKRGePyB3tK5oRarcnij3ZmRnaJPIa5n7ikhkHVZa6zlkljehUn5h3vZNaeTnw9XbLIUeAJtUcxE4djfLepG7TNNv1IC0bWe3XyrwMHU1eggQaC2PgDcoKh50PBZGwAAAAASUVORK5CYII="
                  width={35}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEf0lEQVR4nO2Za4hVVRTHT81oaVYymfSyIiorLSSi0kxIjQrt/SY0IZGUSAJNg56gZSXhKy3EMkSjafpQEFr0wYqeUxmlZuog6fShp9pzHMtfLO7/4OJwztwz9+zb3A/3D5eZc8567sdaa68dRXXUUUcd1QZwJjABmAk8CkwBRgENUa0D6AVMAzaTjR+Bp4CmDBmHArcCa4HxaQRjgNXACVVyYhjwrTP4J+BlGf0I8Dzwmfu+G7jN8R+rWfMyFiaV9AZ26ONXQP/ATowD/pD8jcC1WUsIOA14EfhX9ObsR+7ZY1iS+cYEwXtAv0BOnA/8Kbk26r1y8o0F9jibzJH1wF49N6cxrdLH54CP9f+nwICCThzuZvrZCvjPAeZqTxwPLHOOrQA+tBnzDPG6Gwkc7Zyx90MKOGIRCa39xgJyBgBvk45tnvB3vRyo537A63pny+KuCpQfAnwvGWMqdSKxYmLsd39HesIOfTgiEeYeBw7om43I4CgngIvE15aXJwuKqMuBqcBs58jUJOEufTg7Q8h3+r7PQh5wcqbWg3z3iWdJFAjAdOAfDe4DaQRvSulNGQJs3ywCOkXXqekebTOXwfO0aGcEcuIZp3tSFtG9InqjjLAzgFc0KjHagaWKLMc52jjC3B3IkXbJu64roiYlrP159gFwCvAk8ENKFLGM/QGwSc9zAzmyU/IGlSO0eB2Hyt45hTeo0LNp/8ItPY/lgRz5WfKO6YrIksurzpA1wGEVKOujaHW7NvsTwFlFnTAo0JA5yBZySce7Phz3JICBsunXcomr061vjxuiGgAwXPa0liP8UoR20BmsInJCkbIiJIDJ8ZIvRzhfhC1RDYJSWW+YXo7wXGVLC7+nRzUGoE2OXJCH2KJWXFOlZuueADDU7d/ySx040W32BRYEohoA8LBsWtEdJktuv7lcEvTI211QqsC3y56rKmkSxOcIK0EetNZN1azt2pbxsmNHt9tEYo4d8VhUNYuzbVkv3TMrYX4sxQmLaPOqYm22HVdI9y8VLXF1AOPWizk1ws4jVbE224ZGYINsuD9EAtoGHBnUynz6Z0m/nUz7FBHU5Or/t/7PGaHUAvpbuq8MIfA8qzZdd3BoEEu71nkU8I10vhB6dLZKsB1vm60iBk4KXVBSOqTFLaivQ3U6vYK+wByXKGN0ZDUrKkx8L7nmdfXqPXVS4iCAItvNgSJULNf6BpeGsTh9yi8H3nFOWNkwKoDs/q4V+hdwWRirDyoYpMPVgkSW36MmRd8AOi4EtrhSaEQRYa/phqhN9yLtGpkktqtVWTgMq0Exx7U9Te+pRYW2phjdoajRom56qC5Io46su9wem18o4SVGZ3biQmUdcH3eC5mc55yH3D2J4XPgkhDy0+4fFrqMipac9XfvsLwRdW9wLlb5/36ivWrJ7paqH9ooRRFr3X+SsuR264ZojW625um3GFipRnhbyl1fh+4BR/fIqRMYYpWnroGtlM6LfdpjS4Crg2foorA7EYvzwES1Q2fpdw9wJ3CNemI10Quro46oOP4DSdt4H31vYVQAAAAASUVORK5CYII="
                  width={35}
                />
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO2ZW4hWVRTHf6PjCKmZjgrpmJcMpJuC1EMvlZk2iuhMk6JPkqlFr9rog6E140wgaMhgDz6U4V0QHSVhpAtRYpYa4S3qwQqi1Ml7KdOMLPgf2By+cz/zfd/D/GHDxzlr//f+n733WmuvD/rQh7LHYKAWaAXagQtAJ3BPzX6fBw4BLcAr6lMWqNDk9wL/AT0J27/AbokyrpKgAfjRmVQX8A3QBNQDjwPDgAFq9vsJvWsGvlUfr/8ZoK6YAiYBHc4ELgGrgNEpuMYA7wC/OXxHgYn0MhYDNzTgX8Ab+tpZUQUsBy6L+zqwkF5AhbaM99W2a6vkjeHADmec9XmLaBPxXeB1eh/L5elszC15kXorcQuYRfFQC9zOa2UWOyuRh4hH5WqNdxHwGjATmAaMChDjrcyCLN7JO9hZtpOdpXd9nimoTQ3YZvbuWlpv1uEc7LR4BvjDmeifwGc60DsUSL8A7oQIwXEA1jdxsPNcbFrvNBm4KZ6vgOdCbM9ECKl2XPO8JF7Ki9gWJ9LAOH4Qx06gMsI+SojhTdmcipvO1DoRO22wm+lwDCrwfgTwAjBD7dcYQqqA32UXy/HslbGlDmnxcQjHmpAEc2oE72rZ7YqawBBlpF0pcycPP2vAKb7nC/XcXOqX+mhuGx/BOxb4X87hgTjbyrLYtLDt2K3J9ve9+178b2fgPyEO276BaJWRRfO0GCmOv33PBzoCs1yoWsS/IcyoXUZ2Z0iLieKwA+yiRs8trmRBg3gOhhldlJFdgLKkIcbxS4G40qPrbhY8GYfnqowsnS5XISPEYwEyEHdlZD47DuarqOC2axFCugr08dqzMcYcKB5z4YHwMs24gXBBSAIYJCSsVccYs8rJyAPRKaOHEgo5oJzMbUN9tv0L2HgFicit4mC47K8QggsysgOVRMge0mO6OL6Oaf+U7M+GGR2WUV0Rhbwljm0x7etlb4W+QDTHCTYFhFi23OhrK3y21QVsGnUfMY6VMcf8QPbvhxnNkdHxEhz2uQlTlNAMeJAu/N0qnkXhaaU1bvsoQsiVAn2sPRxjvBrN7VZU0mjYlzHf6s2A2JTkTL7sXPb9LrSUQh4E/hGHebpI2DXyp4QHsBhCGtX/dJJO85xVGVcGQmqcYG13pkQ4po6fA/1KKKSfbpNepT4xxjsFOlvWUglZ4+wOu+qmQp3cXbcicLGFLNUdvTtLydTDe5qAES4popBlEmB91pETPnTEtEak+VmFDNC93BOxkZzR6JCfVJE7byETVMHp0Vi5rYQfrzpByWpLmwukFmmEWA1tk/N/SGfGAkgsjHPSfU9Qm0qglQmFWLV+q6/y2A48QhExR1vMzWCteHEkQojVuz5RXdjt+x0wmxLieeBTJ+YkSeNv6v8XW82ygRUFXgLW6g7vj8KPAeeA/bJ5MUG1pg99oES4D16PyFnalVHhAAAAAElFTkSuQmCC"/> */}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2avUoDQRDH10bUyjIXSZF3sBEs7WIhNha2dmKX6AOoiOgb6GuIWETxHawsLESr2Bi/YuNPLowgR0z29lZ3T+YHaZb5+jOzOXITYxRFcQJYBNrAM+F5kloaeUXsEC/beTqR0gOaQGICAyRAS2rCqjPAuRg3TWQAm1Jb28Y4nceUiokMoCK1dW2M+5hIwbY+FfJHoB3xDFAHDoEredi+ALfAJbAPzANjUd8RYA14tXjoXUcrBFgBPuRzDMwCU8C4fK0uAAej8gcVAkwDDxJ6o0h+AgtZl7AXRfMTWMiJhF3NnKejtQfcZO+OiVTInYStZ86PfrrtJlIhbxJ2InN+L+dzwKRlrKBCBsZ0yYUKccRm7hlObVhc6wICC+kUrs+3kJw+y+J2WnYhu6NeMJRFyJm4LRWOG8kdqf0HIR0v9fkSYhPTcfz6+DP0kNwlF7Y+KmQI2pEB6Gj5QEdrADpaPtDRKjhaXbFNYusIMCMujzbG6fY0peVQ828L2cqzemuIcU92dlWH2r0KAaoi4l1c7NbU6S80yr6eznSm/W05Wr4/DCiKYr74BGqGAfr+nDYAAAAAAElFTkSuQmCC"
                  width={35}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2aPWsUURSGrxoFxSSmS2JhJVpoFRG0t4qYKrG1SOEPSCJYiKDYKDb6CywFtRMEV0QRgim0iqBgYVBQJCRRkoiaR87yBoZhZ3J3Zid7B+9TJee83HvevR8zmxPnIpFIIYCzQAP4Sff5oVpG2zVxnXC51s5KGOvAFDDkugwwBEyrJrxWBngm8ZQLDGBGtTV8xLYfjUEXGMCgalvxETdxgYJvff+FEeAU8Bj4CnwBHgHHqii4MiO6zf60uA7XgBFXIyNvlbJnzAFgv93pij2tqvAqjCwrtS8R6/O+RQIy8lypG0C/TFxVbLaqwqswMgKstjgj9rQ94Wp2ax0G7gGfgM+1vLVCgQ5srVdk89JHA+wGzgMPgAVtyyXdiLeAo9thJBcfDfBui/xv4DbQU7mRvLjnhzAPTAKHgD1AL3AauAv8kuYhsDNEI/b03wCuZBUo3Ungm4aZCdHIODCR+H1XzvxnNIydnb6gjChnrzV3gO+S2UvnTdtaLbRPpLkYlBF7rQHeJM7J38TPc8DelP6CcvdDM3JZqffAcbuVdB4+tjoPwBHFP4RmxD5141wqPqb461S8X/Gl0IwsKjWQig8ovpiK71B8IzQjmZOXmS+XaMTFFWlSdme4sgMk40UmLzNfLtGIiyvSpOzOcGUHSMaLTF5mvly2GiALX02RcTttxL5zZ/HCV1Nk3I4aCQXaMLIibddbbmmAg6pt2Uds3VNj2gUGcKmd1tuoxOvq2Q1vS5X5NQ3LxOZfWfza1Il2QX3b06mVaSSao/X7h4FIJOI2+Qcr3dTGXC5RnAAAAABJRU5ErkJggg=="
                  width={35}
                />
              </div>
            </div>
          </div>
          <div className="founderCard">
            <img src="/images/staticStaff.jpg" className="founderImg" />
            <div className="CardText">
              <div className="founderName">
                <p className="" style={{ fontWeight: 700 }}>
                  Professor Sunday Idowu
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, dicta possimus nemo sunt animi corrupti autem nam sint
                  ea? Qui
                </p>
              </div>
              <div className="iconHolderF">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2Zy04UQRSGe4GK4TouYauCcSGK7lTiTmIi+gSEiLyAF3QNsiUYlhJ8AS+JKxm87tS9gG4U3CoKiCv5TMlfsTKZ6a7u6Z4ek/mTSTrTVaf+03Xq3CoIGmggfwA9wDiwCCwBW6QHI8vILAI3gcNZKHASeEbtsQj0p6HAHmAW2JHgr8A94KJ2pyWVL7W7VotkDgFzWgutfRdoSiq4ADyXsJ/ABNCeFnGP9duBSWDb2Z3OJDthTemLMa3MGEdzOQZ8EpdXwN44k405GawCXZky9ePTBayJ00ycg70jczoe1AmAEzKz3+bZZ4I1qYmgzgDcEbdi1MAexzvV7GA761/QmTRmNFjmfQfwTRwPhQkywc5gLmvSFdZfc2LIaoUx83p/I0yQiaoGQ1kSrlKRy3q/ECZoRYMSpweKPyPAY2BZqceWnh/pXaHC3EEpY7zl+QjzXw4jsaFBbQkU2A/cBr57pB7rwC2gOcE6bZKxETboLxL6+XcO0afAqE1j9OvVfwvOuLdJ4hRRPJMoIiVW7XYDpz3mnHHMOHbQJW1FZE52J17EyYV0ll5q7ps4ZkYGipgzgeqIeAndP2XszoznoohI2IMdaU4hcgYcB1DIQ5ERe7Bj8I6KX8N5KGJigsGVGJwryboqWQ/yUMTadk8MzpVk9VqvF+SgyKaGt8bgXElWq2Rt/u+KmLLW4Ifn+IZphR320aBKAGN5HvaRyHTaE+qQ5OZ+CwpiBmdj8C6Vc04yjKzOmitSkqKs+EblMh/jQ2TFVwNFmpWKowTQWxngAPC6LpLGMmm8+boDgZ85faybNL5EGfNVLYryREcU7Fr1POYcbLsTmRRWG1WUus3qwlgHEIZ1XR3sy6rUXUmh+dBp3CjwUHXKpn5L+m84Se0St/mQazvIB047qHL5oO3OrUHnA+C+OF6r25ZpFLxbphpsvcpkUGcApiLNyhncr2uFba/2fY3A7nXHL10r9PlOMnd2qH3ZnTnLaD7dTl94Os7EJsfETJv/VKZMw7n0AZ+dQNuUJB5YZbZ1ydKRGePyB3tK5oRarcnij3ZmRnaJPIa5n7ikhkHVZa6zlkljehUn5h3vZNaeTnw9XbLIUeAJtUcxE4djfLepG7TNNv1IC0bWe3XyrwMHU1eggQaC2PgDcoKh50PBZGwAAAAASUVORK5CYII="
                  width={35}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEf0lEQVR4nO2Za4hVVRTHT81oaVYymfSyIiorLSSi0kxIjQrt/SY0IZGUSAJNg56gZSXhKy3EMkSjafpQEFr0wYqeUxmlZuog6fShp9pzHMtfLO7/4OJwztwz9+zb3A/3D5eZc8567sdaa68dRXXUUUcd1QZwJjABmAk8CkwBRgENUa0D6AVMAzaTjR+Bp4CmDBmHArcCa4HxaQRjgNXACVVyYhjwrTP4J+BlGf0I8Dzwmfu+G7jN8R+rWfMyFiaV9AZ26ONXQP/ATowD/pD8jcC1WUsIOA14EfhX9ObsR+7ZY1iS+cYEwXtAv0BOnA/8Kbk26r1y8o0F9jibzJH1wF49N6cxrdLH54CP9f+nwICCThzuZvrZCvjPAeZqTxwPLHOOrQA+tBnzDPG6Gwkc7Zyx90MKOGIRCa39xgJyBgBvk45tnvB3vRyo537A63pny+KuCpQfAnwvGWMqdSKxYmLsd39HesIOfTgiEeYeBw7om43I4CgngIvE15aXJwuKqMuBqcBs58jUJOEufTg7Q8h3+r7PQh5wcqbWg3z3iWdJFAjAdOAfDe4DaQRvSulNGQJs3ywCOkXXqekebTOXwfO0aGcEcuIZp3tSFtG9InqjjLAzgFc0KjHagaWKLMc52jjC3B3IkXbJu64roiYlrP159gFwCvAk8ENKFLGM/QGwSc9zAzmyU/IGlSO0eB2Hyt45hTeo0LNp/8ItPY/lgRz5WfKO6YrIksurzpA1wGEVKOujaHW7NvsTwFlFnTAo0JA5yBZySce7Phz3JICBsunXcomr061vjxuiGgAwXPa0liP8UoR20BmsInJCkbIiJIDJ8ZIvRzhfhC1RDYJSWW+YXo7wXGVLC7+nRzUGoE2OXJCH2KJWXFOlZuueADDU7d/ySx040W32BRYEohoA8LBsWtEdJktuv7lcEvTI211QqsC3y56rKmkSxOcIK0EetNZN1azt2pbxsmNHt9tEYo4d8VhUNYuzbVkv3TMrYX4sxQmLaPOqYm22HVdI9y8VLXF1AOPWizk1ws4jVbE224ZGYINsuD9EAtoGHBnUynz6Z0m/nUz7FBHU5Or/t/7PGaHUAvpbuq8MIfA8qzZdd3BoEEu71nkU8I10vhB6dLZKsB1vm60iBk4KXVBSOqTFLaivQ3U6vYK+wByXKGN0ZDUrKkx8L7nmdfXqPXVS4iCAItvNgSJULNf6BpeGsTh9yi8H3nFOWNkwKoDs/q4V+hdwWRirDyoYpMPVgkSW36MmRd8AOi4EtrhSaEQRYa/phqhN9yLtGpkktqtVWTgMq0Exx7U9Te+pRYW2phjdoajRom56qC5Io46su9wem18o4SVGZ3biQmUdcH3eC5mc55yH3D2J4XPgkhDy0+4fFrqMipac9XfvsLwRdW9wLlb5/36ivWrJ7paqH9ooRRFr3X+SsuR264ZojW625um3GFipRnhbyl1fh+4BR/fIqRMYYpWnroGtlM6LfdpjS4Crg2foorA7EYvzwES1Q2fpdw9wJ3CNemI10Quro46oOP4DSdt4H31vYVQAAAAASUVORK5CYII="
                  width={35}
                />
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMklEQVR4nO2ZW4hWVRTHf6PjCKmZjgrpmJcMpJuC1EMvlZk2iuhMk6JPkqlFr9rog6E140wgaMhgDz6U4V0QHSVhpAtRYpYa4S3qwQqi1Ml7KdOMLPgf2By+cz/zfd/D/GHDxzlr//f+n733WmuvD/rQh7LHYKAWaAXagQtAJ3BPzX6fBw4BLcAr6lMWqNDk9wL/AT0J27/AbokyrpKgAfjRmVQX8A3QBNQDjwPDgAFq9vsJvWsGvlUfr/8ZoK6YAiYBHc4ELgGrgNEpuMYA7wC/OXxHgYn0MhYDNzTgX8Ab+tpZUQUsBy6L+zqwkF5AhbaM99W2a6vkjeHADmec9XmLaBPxXeB1eh/L5elszC15kXorcQuYRfFQC9zOa2UWOyuRh4hH5WqNdxHwGjATmAaMChDjrcyCLN7JO9hZtpOdpXd9nimoTQ3YZvbuWlpv1uEc7LR4BvjDmeifwGc60DsUSL8A7oQIwXEA1jdxsPNcbFrvNBm4KZ6vgOdCbM9ECKl2XPO8JF7Ki9gWJ9LAOH4Qx06gMsI+SojhTdmcipvO1DoRO22wm+lwDCrwfgTwAjBD7dcYQqqA32UXy/HslbGlDmnxcQjHmpAEc2oE72rZ7YqawBBlpF0pcycPP2vAKb7nC/XcXOqX+mhuGx/BOxb4X87hgTjbyrLYtLDt2K3J9ve9+178b2fgPyEO276BaJWRRfO0GCmOv33PBzoCs1yoWsS/IcyoXUZ2Z0iLieKwA+yiRs8trmRBg3gOhhldlJFdgLKkIcbxS4G40qPrbhY8GYfnqowsnS5XISPEYwEyEHdlZD47DuarqOC2axFCugr08dqzMcYcKB5z4YHwMs24gXBBSAIYJCSsVccYs8rJyAPRKaOHEgo5oJzMbUN9tv0L2HgFicit4mC47K8QggsysgOVRMge0mO6OL6Oaf+U7M+GGR2WUV0Rhbwljm0x7etlb4W+QDTHCTYFhFi23OhrK3y21QVsGnUfMY6VMcf8QPbvhxnNkdHxEhz2uQlTlNAMeJAu/N0qnkXhaaU1bvsoQsiVAn2sPRxjvBrN7VZU0mjYlzHf6s2A2JTkTL7sXPb9LrSUQh4E/hGHebpI2DXyp4QHsBhCGtX/dJJO85xVGVcGQmqcYG13pkQ4po6fA/1KKKSfbpNepT4xxjsFOlvWUglZ4+wOu+qmQp3cXbcicLGFLNUdvTtLydTDe5qAES4popBlEmB91pETPnTEtEak+VmFDNC93BOxkZzR6JCfVJE7byETVMHp0Vi5rYQfrzpByWpLmwukFmmEWA1tk/N/SGfGAkgsjHPSfU9Qm0qglQmFWLV+q6/y2A48QhExR1vMzWCteHEkQojVuz5RXdjt+x0wmxLieeBTJ+YkSeNv6v8XW82ygRUFXgLW6g7vj8KPAeeA/bJ5MUG1pg99oES4D16PyFnalVHhAAAAAElFTkSuQmCC"/> */}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2avUoDQRDH10bUyjIXSZF3sBEs7WIhNha2dmKX6AOoiOgb6GuIWETxHawsLESr2Bi/YuNPLowgR0z29lZ3T+YHaZb5+jOzOXITYxRFcQJYBNrAM+F5kloaeUXsEC/beTqR0gOaQGICAyRAS2rCqjPAuRg3TWQAm1Jb28Y4nceUiokMoCK1dW2M+5hIwbY+FfJHoB3xDFAHDoEredi+ALfAJbAPzANjUd8RYA14tXjoXUcrBFgBPuRzDMwCU8C4fK0uAAej8gcVAkwDDxJ6o0h+AgtZl7AXRfMTWMiJhF3NnKejtQfcZO+OiVTInYStZ86PfrrtJlIhbxJ2InN+L+dzwKRlrKBCBsZ0yYUKccRm7hlObVhc6wICC+kUrs+3kJw+y+J2WnYhu6NeMJRFyJm4LRWOG8kdqf0HIR0v9fkSYhPTcfz6+DP0kNwlF7Y+KmQI2pEB6Gj5QEdrADpaPtDRKjhaXbFNYusIMCMujzbG6fY0peVQ828L2cqzemuIcU92dlWH2r0KAaoi4l1c7NbU6S80yr6eznSm/W05Wr4/DCiKYr74BGqGAfr+nDYAAAAAAElFTkSuQmCC"
                  width={35}
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO2aPWsUURSGrxoFxSSmS2JhJVpoFRG0t4qYKrG1SOEPSCJYiKDYKDb6CywFtRMEV0QRgim0iqBgYVBQJCRRkoiaR87yBoZhZ3J3Zid7B+9TJee83HvevR8zmxPnIpFIIYCzQAP4Sff5oVpG2zVxnXC51s5KGOvAFDDkugwwBEyrJrxWBngm8ZQLDGBGtTV8xLYfjUEXGMCgalvxETdxgYJvff+FEeAU8Bj4CnwBHgHHqii4MiO6zf60uA7XgBFXIyNvlbJnzAFgv93pij2tqvAqjCwrtS8R6/O+RQIy8lypG0C/TFxVbLaqwqswMgKstjgj9rQ94Wp2ax0G7gGfgM+1vLVCgQ5srVdk89JHA+wGzgMPgAVtyyXdiLeAo9thJBcfDfBui/xv4DbQU7mRvLjnhzAPTAKHgD1AL3AauAv8kuYhsDNEI/b03wCuZBUo3Ungm4aZCdHIODCR+H1XzvxnNIydnb6gjChnrzV3gO+S2UvnTdtaLbRPpLkYlBF7rQHeJM7J38TPc8DelP6CcvdDM3JZqffAcbuVdB4+tjoPwBHFP4RmxD5141wqPqb461S8X/Gl0IwsKjWQig8ovpiK71B8IzQjmZOXmS+XaMTFFWlSdme4sgMk40UmLzNfLtGIiyvSpOzOcGUHSMaLTF5mvly2GiALX02RcTttxL5zZ/HCV1Nk3I4aCQXaMLIibddbbmmAg6pt2Uds3VNj2gUGcKmd1tuoxOvq2Q1vS5X5NQ3LxOZfWfza1Il2QX3b06mVaSSao/X7h4FIJOI2+Qcr3dTGXC5RnAAAAABJRU5ErkJggg=="
                  width={35}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="sliderTitle">App Preview</h4>
        <AutoPlay className="slider_responsive" />
      </div>
      <div className="footer">
        <div className="card-links child">
          <img src="icons/facebook.png" alt="" className="footer_link-size" />
          <img src="icons/linkedin.png" alt="" className="footer_link-size" />
          <img src="icons/twitter.png" alt="" className="footer_link-size" />
          <img src="icons/instagram.png" alt="" className="footer_link-size" />
        </div>
        <div className="finl_txt">
          <p>Copyright © 2022 Babcock University Computer Club</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
