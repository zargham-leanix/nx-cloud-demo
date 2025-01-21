import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo26Component } from './lib41-demo26.component';

describe('Lib41Demo26Component', () => {
  let component: Lib41Demo26Component;
  let fixture: ComponentFixture<Lib41Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
