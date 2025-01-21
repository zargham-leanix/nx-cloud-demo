import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo13Component } from './lib88-demo13.component';

describe('Lib88Demo13Component', () => {
  let component: Lib88Demo13Component;
  let fixture: ComponentFixture<Lib88Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
