import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo15Component } from './lib94-demo15.component';

describe('Lib94Demo15Component', () => {
  let component: Lib94Demo15Component;
  let fixture: ComponentFixture<Lib94Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
