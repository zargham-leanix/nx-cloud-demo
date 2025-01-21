import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo15Component } from './lib61-demo15.component';

describe('Lib61Demo15Component', () => {
  let component: Lib61Demo15Component;
  let fixture: ComponentFixture<Lib61Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
