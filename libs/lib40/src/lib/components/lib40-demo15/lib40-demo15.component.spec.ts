import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo15Component } from './lib40-demo15.component';

describe('Lib40Demo15Component', () => {
  let component: Lib40Demo15Component;
  let fixture: ComponentFixture<Lib40Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
