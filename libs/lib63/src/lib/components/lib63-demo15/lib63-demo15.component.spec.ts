import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo15Component } from './lib63-demo15.component';

describe('Lib63Demo15Component', () => {
  let component: Lib63Demo15Component;
  let fixture: ComponentFixture<Lib63Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
