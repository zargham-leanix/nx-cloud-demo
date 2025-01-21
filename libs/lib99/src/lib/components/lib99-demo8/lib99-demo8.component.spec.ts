import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo8Component } from './lib99-demo8.component';

describe('Lib99Demo8Component', () => {
  let component: Lib99Demo8Component;
  let fixture: ComponentFixture<Lib99Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
