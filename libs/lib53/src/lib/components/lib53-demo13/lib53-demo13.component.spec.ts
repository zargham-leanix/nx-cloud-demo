import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo13Component } from './lib53-demo13.component';

describe('Lib53Demo13Component', () => {
  let component: Lib53Demo13Component;
  let fixture: ComponentFixture<Lib53Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
