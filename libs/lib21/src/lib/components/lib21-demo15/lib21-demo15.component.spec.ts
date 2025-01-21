import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo15Component } from './lib21-demo15.component';

describe('Lib21Demo15Component', () => {
  let component: Lib21Demo15Component;
  let fixture: ComponentFixture<Lib21Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
