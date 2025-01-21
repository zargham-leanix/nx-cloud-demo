import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo13Component } from './lib47-demo13.component';

describe('Lib47Demo13Component', () => {
  let component: Lib47Demo13Component;
  let fixture: ComponentFixture<Lib47Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
