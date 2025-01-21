import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo15Component } from './lib93-demo15.component';

describe('Lib93Demo15Component', () => {
  let component: Lib93Demo15Component;
  let fixture: ComponentFixture<Lib93Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
