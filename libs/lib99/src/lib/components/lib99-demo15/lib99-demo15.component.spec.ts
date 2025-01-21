import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo15Component } from './lib99-demo15.component';

describe('Lib99Demo15Component', () => {
  let component: Lib99Demo15Component;
  let fixture: ComponentFixture<Lib99Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
