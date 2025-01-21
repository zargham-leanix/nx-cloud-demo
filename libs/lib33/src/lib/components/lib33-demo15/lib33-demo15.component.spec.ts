import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo15Component } from './lib33-demo15.component';

describe('Lib33Demo15Component', () => {
  let component: Lib33Demo15Component;
  let fixture: ComponentFixture<Lib33Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
