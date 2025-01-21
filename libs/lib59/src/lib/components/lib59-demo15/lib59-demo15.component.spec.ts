import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo15Component } from './lib59-demo15.component';

describe('Lib59Demo15Component', () => {
  let component: Lib59Demo15Component;
  let fixture: ComponentFixture<Lib59Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
