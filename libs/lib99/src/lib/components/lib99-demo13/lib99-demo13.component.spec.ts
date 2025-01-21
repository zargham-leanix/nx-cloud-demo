import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo13Component } from './lib99-demo13.component';

describe('Lib99Demo13Component', () => {
  let component: Lib99Demo13Component;
  let fixture: ComponentFixture<Lib99Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
