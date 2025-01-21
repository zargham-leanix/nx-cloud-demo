import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo10Component } from './lib99-demo10.component';

describe('Lib99Demo10Component', () => {
  let component: Lib99Demo10Component;
  let fixture: ComponentFixture<Lib99Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
