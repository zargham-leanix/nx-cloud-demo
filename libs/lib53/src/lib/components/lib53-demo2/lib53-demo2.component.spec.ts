import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo2Component } from './lib53-demo2.component';

describe('Lib53Demo2Component', () => {
  let component: Lib53Demo2Component;
  let fixture: ComponentFixture<Lib53Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
