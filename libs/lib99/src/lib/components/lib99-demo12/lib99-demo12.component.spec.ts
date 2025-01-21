import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo12Component } from './lib99-demo12.component';

describe('Lib99Demo12Component', () => {
  let component: Lib99Demo12Component;
  let fixture: ComponentFixture<Lib99Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
