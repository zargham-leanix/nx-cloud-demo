import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo39Component } from './lib99-demo39.component';

describe('Lib99Demo39Component', () => {
  let component: Lib99Demo39Component;
  let fixture: ComponentFixture<Lib99Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
