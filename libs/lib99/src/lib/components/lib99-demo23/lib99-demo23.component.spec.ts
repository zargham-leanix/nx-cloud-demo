import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo23Component } from './lib99-demo23.component';

describe('Lib99Demo23Component', () => {
  let component: Lib99Demo23Component;
  let fixture: ComponentFixture<Lib99Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
