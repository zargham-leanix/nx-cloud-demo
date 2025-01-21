import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo17Component } from './lib99-demo17.component';

describe('Lib99Demo17Component', () => {
  let component: Lib99Demo17Component;
  let fixture: ComponentFixture<Lib99Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
