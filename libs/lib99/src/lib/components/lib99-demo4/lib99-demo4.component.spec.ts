import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo4Component } from './lib99-demo4.component';

describe('Lib99Demo4Component', () => {
  let component: Lib99Demo4Component;
  let fixture: ComponentFixture<Lib99Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
