import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo43Component } from './lib53-demo43.component';

describe('Lib53Demo43Component', () => {
  let component: Lib53Demo43Component;
  let fixture: ComponentFixture<Lib53Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
