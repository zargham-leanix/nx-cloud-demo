import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo46Component } from './lib99-demo46.component';

describe('Lib99Demo46Component', () => {
  let component: Lib99Demo46Component;
  let fixture: ComponentFixture<Lib99Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
