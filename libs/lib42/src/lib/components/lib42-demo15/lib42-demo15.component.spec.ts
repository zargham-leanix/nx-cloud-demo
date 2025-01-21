import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo15Component } from './lib42-demo15.component';

describe('Lib42Demo15Component', () => {
  let component: Lib42Demo15Component;
  let fixture: ComponentFixture<Lib42Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
