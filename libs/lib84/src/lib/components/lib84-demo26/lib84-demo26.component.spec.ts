import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo26Component } from './lib84-demo26.component';

describe('Lib84Demo26Component', () => {
  let component: Lib84Demo26Component;
  let fixture: ComponentFixture<Lib84Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
