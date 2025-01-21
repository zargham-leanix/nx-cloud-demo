import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo32Component } from './lib53-demo32.component';

describe('Lib53Demo32Component', () => {
  let component: Lib53Demo32Component;
  let fixture: ComponentFixture<Lib53Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
