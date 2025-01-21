import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo15Component } from './lib91-demo15.component';

describe('Lib91Demo15Component', () => {
  let component: Lib91Demo15Component;
  let fixture: ComponentFixture<Lib91Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
