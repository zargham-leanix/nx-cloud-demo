import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo6Component } from './lib99-demo6.component';

describe('Lib99Demo6Component', () => {
  let component: Lib99Demo6Component;
  let fixture: ComponentFixture<Lib99Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
