import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo13Component } from './lib93-demo13.component';

describe('Lib93Demo13Component', () => {
  let component: Lib93Demo13Component;
  let fixture: ComponentFixture<Lib93Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
