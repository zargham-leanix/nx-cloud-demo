import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo17Component } from './lib53-demo17.component';

describe('Lib53Demo17Component', () => {
  let component: Lib53Demo17Component;
  let fixture: ComponentFixture<Lib53Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
