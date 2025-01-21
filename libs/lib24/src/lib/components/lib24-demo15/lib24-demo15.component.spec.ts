import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo15Component } from './lib24-demo15.component';

describe('Lib24Demo15Component', () => {
  let component: Lib24Demo15Component;
  let fixture: ComponentFixture<Lib24Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
