import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo6Component } from './lib53-demo6.component';

describe('Lib53Demo6Component', () => {
  let component: Lib53Demo6Component;
  let fixture: ComponentFixture<Lib53Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
