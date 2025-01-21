import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo15Component } from './lib74-demo15.component';

describe('Lib74Demo15Component', () => {
  let component: Lib74Demo15Component;
  let fixture: ComponentFixture<Lib74Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
