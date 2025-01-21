import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo13Component } from './lib41-demo13.component';

describe('Lib41Demo13Component', () => {
  let component: Lib41Demo13Component;
  let fixture: ComponentFixture<Lib41Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
