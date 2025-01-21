import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo15Component } from './lib45-demo15.component';

describe('Lib45Demo15Component', () => {
  let component: Lib45Demo15Component;
  let fixture: ComponentFixture<Lib45Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
