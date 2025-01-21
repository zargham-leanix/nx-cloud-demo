import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo44Component } from './lib99-demo44.component';

describe('Lib99Demo44Component', () => {
  let component: Lib99Demo44Component;
  let fixture: ComponentFixture<Lib99Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
