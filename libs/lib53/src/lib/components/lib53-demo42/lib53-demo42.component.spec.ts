import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo42Component } from './lib53-demo42.component';

describe('Lib53Demo42Component', () => {
  let component: Lib53Demo42Component;
  let fixture: ComponentFixture<Lib53Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
