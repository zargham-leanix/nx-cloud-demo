import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo15Component } from './lib5-demo15.component';

describe('Lib5Demo15Component', () => {
  let component: Lib5Demo15Component;
  let fixture: ComponentFixture<Lib5Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
