import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo15Component } from './lib53-demo15.component';

describe('Lib53Demo15Component', () => {
  let component: Lib53Demo15Component;
  let fixture: ComponentFixture<Lib53Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
