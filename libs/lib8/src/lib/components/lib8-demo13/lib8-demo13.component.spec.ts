import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo13Component } from './lib8-demo13.component';

describe('Lib8Demo13Component', () => {
  let component: Lib8Demo13Component;
  let fixture: ComponentFixture<Lib8Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
