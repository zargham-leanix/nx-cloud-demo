import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo13Component } from './lib72-demo13.component';

describe('Lib72Demo13Component', () => {
  let component: Lib72Demo13Component;
  let fixture: ComponentFixture<Lib72Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
