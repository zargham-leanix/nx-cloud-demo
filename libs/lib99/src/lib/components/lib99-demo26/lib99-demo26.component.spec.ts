import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo26Component } from './lib99-demo26.component';

describe('Lib99Demo26Component', () => {
  let component: Lib99Demo26Component;
  let fixture: ComponentFixture<Lib99Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
