import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo15Component } from './lib85-demo15.component';

describe('Lib85Demo15Component', () => {
  let component: Lib85Demo15Component;
  let fixture: ComponentFixture<Lib85Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
