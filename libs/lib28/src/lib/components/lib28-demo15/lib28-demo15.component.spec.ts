import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo15Component } from './lib28-demo15.component';

describe('Lib28Demo15Component', () => {
  let component: Lib28Demo15Component;
  let fixture: ComponentFixture<Lib28Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
