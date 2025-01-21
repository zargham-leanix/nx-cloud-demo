import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo11Component } from './lib53-demo11.component';

describe('Lib53Demo11Component', () => {
  let component: Lib53Demo11Component;
  let fixture: ComponentFixture<Lib53Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
