import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo15Component } from './lib14-demo15.component';

describe('Lib14Demo15Component', () => {
  let component: Lib14Demo15Component;
  let fixture: ComponentFixture<Lib14Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
