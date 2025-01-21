import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo15Component } from './lib88-demo15.component';

describe('Lib88Demo15Component', () => {
  let component: Lib88Demo15Component;
  let fixture: ComponentFixture<Lib88Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
