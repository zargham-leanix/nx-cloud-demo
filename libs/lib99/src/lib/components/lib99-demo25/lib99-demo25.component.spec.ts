import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo25Component } from './lib99-demo25.component';

describe('Lib99Demo25Component', () => {
  let component: Lib99Demo25Component;
  let fixture: ComponentFixture<Lib99Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
