import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo13Component } from './lib75-demo13.component';

describe('Lib75Demo13Component', () => {
  let component: Lib75Demo13Component;
  let fixture: ComponentFixture<Lib75Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
