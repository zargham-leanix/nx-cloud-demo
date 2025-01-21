import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo13Component } from './lib58-demo13.component';

describe('Lib58Demo13Component', () => {
  let component: Lib58Demo13Component;
  let fixture: ComponentFixture<Lib58Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
