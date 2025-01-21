import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo48Component } from './lib53-demo48.component';

describe('Lib53Demo48Component', () => {
  let component: Lib53Demo48Component;
  let fixture: ComponentFixture<Lib53Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
