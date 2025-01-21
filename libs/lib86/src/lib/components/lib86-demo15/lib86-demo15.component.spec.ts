import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo15Component } from './lib86-demo15.component';

describe('Lib86Demo15Component', () => {
  let component: Lib86Demo15Component;
  let fixture: ComponentFixture<Lib86Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
