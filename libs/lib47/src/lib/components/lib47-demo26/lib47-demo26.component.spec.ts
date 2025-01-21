import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo26Component } from './lib47-demo26.component';

describe('Lib47Demo26Component', () => {
  let component: Lib47Demo26Component;
  let fixture: ComponentFixture<Lib47Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
