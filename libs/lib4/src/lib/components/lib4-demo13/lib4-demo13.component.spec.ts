import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo13Component } from './lib4-demo13.component';

describe('Lib4Demo13Component', () => {
  let component: Lib4Demo13Component;
  let fixture: ComponentFixture<Lib4Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
