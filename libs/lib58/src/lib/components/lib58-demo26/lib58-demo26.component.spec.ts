import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo26Component } from './lib58-demo26.component';

describe('Lib58Demo26Component', () => {
  let component: Lib58Demo26Component;
  let fixture: ComponentFixture<Lib58Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
