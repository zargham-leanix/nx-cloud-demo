import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo14Component } from './lib99-demo14.component';

describe('Lib99Demo14Component', () => {
  let component: Lib99Demo14Component;
  let fixture: ComponentFixture<Lib99Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
