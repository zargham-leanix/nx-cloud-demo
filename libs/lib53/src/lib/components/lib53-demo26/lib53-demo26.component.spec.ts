import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo26Component } from './lib53-demo26.component';

describe('Lib53Demo26Component', () => {
  let component: Lib53Demo26Component;
  let fixture: ComponentFixture<Lib53Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
