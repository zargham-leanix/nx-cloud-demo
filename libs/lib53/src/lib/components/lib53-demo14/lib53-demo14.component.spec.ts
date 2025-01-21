import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo14Component } from './lib53-demo14.component';

describe('Lib53Demo14Component', () => {
  let component: Lib53Demo14Component;
  let fixture: ComponentFixture<Lib53Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
