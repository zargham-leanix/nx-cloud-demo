import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo15Component } from './lib29-demo15.component';

describe('Lib29Demo15Component', () => {
  let component: Lib29Demo15Component;
  let fixture: ComponentFixture<Lib29Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
