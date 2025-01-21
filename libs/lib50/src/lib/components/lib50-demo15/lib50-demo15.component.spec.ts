import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo15Component } from './lib50-demo15.component';

describe('Lib50Demo15Component', () => {
  let component: Lib50Demo15Component;
  let fixture: ComponentFixture<Lib50Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
